import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

// CARTÃO DE POSTAGEM
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {new Date(post.createdAt).toLocaleString()}
          {/*post.createdAt?.toString().slice(4, 16)*/}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Ler Mais
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
