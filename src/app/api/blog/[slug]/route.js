import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";



// ROTA PARA PEGAR TODAS AS POSTAGENS
export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao buscar postagem!");
  }
};



// ROTA PARA DELETAR UMA POSTAGEM
export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({ slug });
    return NextResponse.json("Postagem deletada!");
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao excluir postagem!");
  }
};