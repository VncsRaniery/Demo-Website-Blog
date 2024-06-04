"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

// FORMULÁRIO DE CADASTROS DE POSTAGENS PELOS ADMINISTRADORES
const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Adicionar nova Postagem</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Título" />
      <input type="text" name="slug" placeholder="Caminho da URL (Não deixar espaços)" />
      <input type="text" name="img" placeholder="Imagem" />
      <textarea type="text" name="desc" placeholder="Descrição" rows={10} />
      <button>Adicionar</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;