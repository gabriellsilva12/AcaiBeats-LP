import styles from "./styles.module.css";

export default function SideBar() {
  function handleClick() {
    const menu = document.querySelector("#menu");
    const containerMenu = document.querySelector("#containerMenu");

    if (!menu|| !containerMenu) return;

    menu.classList.toggle(styles.active);
    containerMenu.classList.toggle(styles.active);
  }

  return (
    <>
      <div onClick={handleClick} id="menu" className={styles.menu}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>

      <div id="containerMenu" className={styles.containerMenu}>
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
          <a href="">Sobre Nós</a>
        </p>

        <footer className={styles.footerContainer}>
          developer
          <a
            href="https://www.instagram.com/gabriellsilva_19?igsh=MXh2NXd0YzUxd3lpOA%3D%3D&utm_source=qr"
            target="_blank"
          >
            @gabriellSilva_19
          </a>
        </footer>
      </div>
    </>
  );
}
