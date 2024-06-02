import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>VncsRaniery</div>
      <div className={styles.text}>
        Desenvolvedor Backend VncsR © Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;