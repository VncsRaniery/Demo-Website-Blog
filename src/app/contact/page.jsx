import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Página de Contato",
  description: "Página para entrar em contato com o responsável da página",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Nome e Sobrenome" />
          <input type="text" placeholder="Endereço de Email" />
          <input type="text" placeholder="Número de Telefone (Opcional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Menssagem"
          ></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;