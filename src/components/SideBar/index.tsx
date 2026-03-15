import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type sideBarProps = {
  scrollMobile: boolean;
};

export default function SideBar({ scrollMobile = false }: sideBarProps) {
  const [state, setState] = useState(scrollMobile);

  useEffect(() => {
    
    const usingSetState = () => {
      const menu = document.querySelector("#menu");
      const activeScrollmobile = document.querySelector("#activeScrollmobile");

      if (!menu || !activeScrollmobile) return;
      menu.classList.toggle(styles.scrollmobile);
      activeScrollmobile.classList.toggle(styles.scrollmobile);
      setState(false);
    };

    usingSetState();

  }, [state === true]);

  function handleClick() {
    const menu = document.querySelector("#menu");
    const containerMenu = document.querySelector("#containerMenu");

    if (!menu || !containerMenu) return;

    menu.classList.toggle(styles.active);
    containerMenu.classList.toggle(styles.active);
  }

  return (
    <>
      <div id="activeScrollmobile" className={styles.sectionWrapper}>
        <div onClick={handleClick} id="menu" className={styles.menu}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>

        <div id="containerMenu" className={styles.containerMenu}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/products">Produtos</Link>
          </p>
          <p>
            <Link to="/sasas">Localização</Link>
          </p>
          <p>
            <Link to="/about/">Sobre Nós</Link>
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
      </div>
    </>
  );
}
