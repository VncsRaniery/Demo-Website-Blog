"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";


// ADICIONAR UMA NOVA POSTAGEM
export const addPost = async (prevState,formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });

    await newPost.save();
    console.log("salvo no db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Ops! Algo deu errado" };
  }
};



// DELETAR UMA POSTAGEM
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deletado para o db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Ops! Algo deu errado" };
  }
};



// ADICIONAR UM NOVO USUÁRIO
export const addUser = async (prevState,formData) => {
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

  try {
    connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    });

    await newUser.save();
    console.log("salvo no db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Ops! Algo deu errado" };
  }
};



// DELETAR UM USUÁRIO
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deletado para o db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Ops! Algo deu errado" };
  }
};



// FAZER LOGIN COM O GITHUB
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};



// FAZER LOGIN COM O GOOGLE
export const handleLogout = async () => {
  "use server";
  await signOut();
};



// RESGITRAR UM NOVO USUÁRIO PARA O MESMO PODER FAZER LOGIN
export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "As senhas não combinam" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "O nome de usuário já existe" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("salvo no db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Ops! Algo deu errado" };
  }
};



// FAZER LOGIN DE UM USUÁRIO
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Nome de usuário ou senha inválidos" };
    }
    throw err;
  }
};
