import styles from "./styles.module.css";

export default function HeroSection() {
  const phone = "558592584209";

  const message ="Olá! 😄 Vi o site de vocês e quero montar meu açaí 🍧\n" +
    "Pode me enviar o cardápio do dia, por favor?";

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;

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
        <p>O melhor açaí da cidade, entregue na porta da sua casa</p>
      </div>

      <a
        className={styles.linkButton}
        href={whatsappLink}
        target="_blank"
        title="Fazer pedido"
        aria-label="Fazer pedido"
      >
        Pedir agora
      </a>
      <footer className={styles.footer}>
        <p>
          <span>⚠️ Cuidado:</span> altas chances de virar seu vício favorito
        </p>
      </footer>
    </div>
  );
}
