import Acaicustomizer from "../../components/AcaiCustomizer";
import LogoHeader from "../../components/LogoHeader";
import SideBar from "../../components/SideBar";
import styles from "./styles.module.css";

export default function Products() {
  return (
    <>
      <div className={styles.container}>
        <LogoHeader />
        <SideBar scrollMobile={true} />
      </div>

      <div className={`${styles.laranja} ${styles.card}`}>
        <h1>Creme</h1>
        <div className={styles.imagem}>
          <img src="/CremeNinho.png" alt="" />
        </div>
        <p>delíciaaaa❤️</p>
      </div>

      <div className={`${styles.morango} ${styles.card}`}>
        <h1>Maracuja</h1>
        <div className={styles.imagem}>
          <img src="/MousseMaracuja.png" alt="" />
        </div>
        <p>Esse é tooop das galáxias 😍</p>
      </div>

      <div className={`${styles.uva} ${styles.card}`}>
        <h1>Nutela</h1>
        <div className={styles.imagem}>
          <img src="/NinhoNutela.png" alt="" />
        </div>
        <p>o favoritooo😮‍💨❤️</p>
      </div>
      
      <div className={styles.info}>
        <h2>Sabores:</h2>
        <ul>
          <ul>
            <h3>Açaí com Ninho e Nutella</h3>
            <li>
              300ML: R$15,00 -{" "}
              <span className={styles.spanProducts}>R$20,00</span>
            </li>
            <li>
              50ML: 20,00 - <span className={styles.spanProducts}>R$24,00</span>
            </li>
            {/* <button>send</button> */}
          </ul>
          <ul>
            <h3>Açaí com Mousse de Maracujá</h3>
            <li>
              300ML: R$15,00 -{" "}
              <span className={styles.spanProducts}>R$19,00</span>
            </li>
            <li>
              50ML: 20,00 -{" "}
              <span className={styles.spanProducts}>R$24,00</span>{" "}
            </li>
          </ul>
          {/* <button>send</button> */}
          <ul>
            <h3>Açaí com Creme de Ninho</h3>
            <li>
              300ML: R$13,00 -{" "}
              <span className={styles.spanProducts}>R$17,00</span>
            </li>
            <li>
              500ML: R$18,00 -{" "}
              <span className={styles.spanProducts}>R$23,00</span>
            </li>
          </ul>
          {/* <button>send</button> */}
        </ul>

        <Acaicustomizer />
      </div>
    </>
  );
}
