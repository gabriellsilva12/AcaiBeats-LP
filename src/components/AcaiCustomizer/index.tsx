import { useState } from "react";
import styles from "./styles.module.css";

export default function Acaicustomizer() {
  const [sabor, setSabor] = useState("");
  const [unidade, setUnidade] = useState("");

  const message = !sabor
    ? "Olá! 😄 Vi o site de vocês e quero montar meu açaí 🍧\n Pode me enviar o cardápio do dia, por favor?"
    : `Olá! 😄 Gostaria de fazer um pedido 🍧
     \nPedido: \n${unidade} - açaí de ${sabor}\n\nEnviado pelo site.`;

  const whatsappLink = `https://wa.me/558592584209?text=${encodeURIComponent(message)}`;

  // function address() {

  // }

  return (
    <div className={styles.container}>
      <div className={styles.confirmation}>
        <div className={styles.options}>
          <label htmlFor="select">Monte seu açaí 🍧:</label>
          <select
            name="select"
            id="select"
            defaultValue=""
            onChange={(e) => setUnidade(e.target.value)}
          >
            <option value="" disabled>
              Quantidade:
            </option>
            <option value="1">1 - Unidade</option>
            <option value="2">2 - Unidades</option>
            <option value="3">3 - Unidades</option>
          </select>

          <select
            name="select"
            id="select"
            defaultValue=""
            onChange={(e) => setSabor(e.target.value)}
          >
            <option value="" disabled>
              Escolha seu sabor:
            </option>
            <option value="Creme de Ninho">Creme de Ninho</option>
            <option value="Ninho e Nutella">Ninho e Nutella</option>
            <option value="Mousse de Maracujá">Mousse de Maracujá</option>
          </select>
        </div>

        <div className={styles.description}>
          <h3>Seu pedido</h3>
          <p>Quantidade: {!unidade ? "..." : unidade}</p>
          <p>Sabor: {!sabor ? "..." : sabor}</p>
        </div>

        {/* <button className={styles.linkButton}>
          Fazer pedido
          <span className={styles.spanProducts}>
            {!sabor ? "" : `${unidade} - acai de ${sabor}`}
          </span>
        </button> */}

        <a className={styles.linkButton} href={whatsappLink}>
          Fazer pedido
          <span className={styles.spanProducts}>
            {!sabor ? "" : `${unidade} - acai de ${sabor}`}
          </span>
        </a>
      </div>
    </div>
  );
}
