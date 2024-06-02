"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Adicionar novo Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Título" />
      <input type="text" name="slug" placeholder="Subtítulo" />
      <input type="text" name="img" placeholder="imgagem" />
      <textarea type="text" name="desc" placeholder="descrição" rows={10} />
      <button>Adicionar</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;