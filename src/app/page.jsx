import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

// PÁGINA INICIAL
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Um lugar de Indicações.</h1>
        <p className={styles.desc}>
          aqui na Resolutiva, nós tentamos conectar você ao melhor porofissional
          com a forma mais eficiente póssivel. Para isso, basta entra em contato
          mais sobre nosso serviço.
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>Leia Mais</button>
          </Link>
          <Link href={`/contact`}>
            <button className={styles.contactbutton}>Contato</button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/inicio.svg" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
