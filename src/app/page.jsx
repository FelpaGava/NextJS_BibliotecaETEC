import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <div className="containerGlobal">
        <h1 className={styles.tituloHomePage}>Aula Next JS</h1>
        <h2>Exemplo h2</h2>
        <h3>Exemplo h3</h3>
        <p>Texto parágrafo</p>
      </div>
  );
}
