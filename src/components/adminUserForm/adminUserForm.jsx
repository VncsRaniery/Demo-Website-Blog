"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Adicionar novo Usuário</h1>
      <input type="text" name="username" placeholder="Nome de Usuário" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Senha" />
      <input type="text" name="img" placeholder="imagem" />
      <select name="isAdmin">
        <option value="false">é Administrador?</option>
        <option value="false">Não</option>
        <option value="true">Sim</option>
      </select>
      <button>Adicionar</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;