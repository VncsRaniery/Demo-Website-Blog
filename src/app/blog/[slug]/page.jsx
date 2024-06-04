import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";



// BUSCAR DADOS COM UMA API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Ops! Algo deu errado");
  }

  return res.json();
};



// BUSCAR DADOS SEM UMA API
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};



// PÁGINA DE POSTAGEM INDIVIDUAL
const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // BUCAR DADOS COM UMA API
  const post = await getData(slug);

  // BUSCAR DADOS SEM UMA API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>

      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Carregando...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publicado</span>
            <span className={styles.detailValue}>
              {/*post.createdAt.toString().slice(4, 16)*/}
              {new Date(post.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;