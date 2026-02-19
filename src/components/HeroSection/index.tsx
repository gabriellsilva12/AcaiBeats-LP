import styles from "./styles.module.css";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Mais que açaí. Uma explosão de sabor!</h1>
        <img
          src="/acai-beats-logo2.png"
          alt="logo-acai-beats"
          title="logo-acai-beats"
          aria-label="logo-acai-beats"
        />
        <p>O melhor açaí da cidade, entregue na porta sua casa</p>
      </div>

      <a
        className={styles.linkButton}
        href="https://wa.me/558592584209?text=Olá!%20😄%20Vi%20o%20site%20de%20vocês%20e%20quero%20montar%20meu%20açaí%20🍧%0APode%20me%20enviar%20o%20cardápio%20do%20dia,%20por%20favor%3F"
        target="_blank"
        title="Fazer pedido"
        aria-label="Fazer pedido"
      >
        Pedir agora
      </a>
      <footer className={styles.footer}>
        <p><span>⚠️ Cuidado:</span> altas chances de virar seu vício favorito</p>
      </footer>
    </div>
  );
}
