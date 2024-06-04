import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Não encontrado</h2>
      <p>Desculpe, a página que você procura não existe.</p>
      <Link href="/">Retornar ao Início</Link>
    </div>
  );
};

export default NotFound;
