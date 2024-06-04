import Image from "next/image";
import styles from "./about.module.css";



// METADADOS DA PÁGINA
export const metadata = {
  title: "Sobre nós",
  description: "Página sobre o projeto",
};



// PÁGINA SOBRE NÓS
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Sobre o projeto</h2>
        <h1 className={styles.title}>
          Conectamos profissionais e contratantes com eficácia e uma variedade
          de opções.
        </h1>
        <p className={styles.desc}>
          Em nosso compromisso de simplificar a busca por talento e
          oportunidades, nossa plataforma facilita a conexão entre profissionais
          e contratantes, oferecendo uma variedade de opções e garantindo
          eficiência em cada parceria estabelecida.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>2</h1>
            <p>Anos no mercado</p>
          </div>
          <div className={styles.box}>
            <h1>10.000</h1>
            <p>Usuários Ativos</p>
          </div>
          <div className={styles.box}>
            <h1>8.000</h1>
            <p>Indicações realizadas</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/sobre.svg"
          alt="Sobre nós Imagem"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
