import styles from "./styles.module.css";

export default function HomePage() {
  function handleClick() {
    const menu = document.querySelector("#navMobile");
    const mobileMenu = document.querySelector("#mobileMenu");

    console.log(menu);
    if (!menu  || !mobileMenu) return;

    menu.classList.toggle(styles.active);
    mobileMenu.classList.toggle(styles.active);

    console.log(menu);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.acaiBeats}>
          <h1>Açai</h1>
          <p> Beats</p>
        </div>
      </div>

      <div onClick={handleClick} id="mobileMenu" className={styles.mobileMenu}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>

      <div id="navMobile" className={`${styles.navMobile}`}>
        <p>
          <a href="">Home</a>
        </p>
        <p>
          <a href="">Produtos</a>
        </p>
        <p>
          <a href="">Localização</a>
        </p>
        <p>
          <a href="">Sobre nós</a>
        </p>
      </div>

      <div className={styles.logo}>
        <picture>
          <img src="src/assets/img/acai-beats-logo.png" alt="" />
        </picture>
        <p>O melhor açaí da cidade, entregue na sua casa.</p>
      </div>

      <button type="button" className={styles.button}>
        <a
          href="https://wa.me/558592584209?text=Olá!%20Vi%20o%20link%20no%20site%20e%20quero%20montar%20meu%20açaí.%20Pode%20me%20enviar%20o%20cardápio%20do%20dia?%F0%9F%98%8B"
          target="_blank"
        >
          fazer pedido
        </a>
      </button>
    </div>
  );
}
