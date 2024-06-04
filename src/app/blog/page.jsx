import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// BUSCAR DADOS COM UMA API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Ops! Algo deu errado");
  }

  return res.json();
};

const BlogPage = async () => {

  // BUSCAR DADOS COM UMA API
  const posts = await getData();

  // BUSCAR DADOS SEM API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;