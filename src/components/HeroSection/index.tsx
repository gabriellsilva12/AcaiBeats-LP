import styles from "./styles.module.css";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="/acai-beats-logo2.png"
          alt="logo-acai-beats"
          title="logo-acai-beats"
          aria-label="logo-acai-beats"
        />
        <p>O melhor açaí da cidade, entregue na sua casa.</p>
      </div>

        <a 
          className={styles.linkButton}
          href="https://wa.me/558592584209?text=Olá!%20Vi%20o%20link%20no%20site%20e%20quero%20montar%20meu%20açaí.%20Pode%20me%20enviar%20o%20cardápio%20do%20dia?%F0%9F%98%8B"
          target="_blank"
          title="Fazer pedido"
          aria-label="Fazer pedido"
        >
          fazer pedido
        </a>
    </div>
  );
}
