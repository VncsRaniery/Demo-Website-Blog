import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";



// OBTER POSTAGENS DE UM USUÁRIO
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao buscar postagens!");
  }
};



// OBTER POSTAGEM POR SLUG
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug:decodeURIComponent(slug) });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao buscar postagem!");
  }
};



// OBTER USUÁRIO POR ID
export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao buscar usuário!");
  }
};


// OBTER TODOS OS USUÁRIOS
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao buscar usuários!");
  }
};