"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Nome de Usuário" name="username" />
      <input type="password" placeholder="Senha" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Registrar</b>
      </Link>
    </form>
  );
};

export default LoginForm;