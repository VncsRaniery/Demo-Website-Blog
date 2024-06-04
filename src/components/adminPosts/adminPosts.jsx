import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import Link from "next/link";
import { deletePost } from "@/lib/action";
import { updatePost } from "@/lib/action";

// POSTAGENS ADMINISTRADORES DA PÁGINA
const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Postagens</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title.slice(0,50)}</span>
          </div>

          <div className={styles.buttons}>
            <Link href={`/update/postsUpdate`}>
              <button className={`${styles.button} ${styles.update}`}>
                Editar
              </button>
            </Link>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className={`${styles.button} ${styles.delete}`}>
                Excluir
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;