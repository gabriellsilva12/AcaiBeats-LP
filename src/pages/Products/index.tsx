import SideBar from "../../components/SideBar";
import LogoHeader from "../../components/LogoHeader";
import styles from "./styles.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      <LogoHeader />
      <SideBar scrollMobile={true}/>
      <main className={styles.containerProducts}>
        <header className={styles.header}>
          <h1>Produtos</h1>
        </header>

        <section className={styles.products}>

          <div className={styles.image}>
            <img src="maracuja.png" alt="" />
            <a className={styles.button}>
              comprar
            </a>
          </div>

          <div className={styles.image}>
            <img src="" alt="" />
          </div>

          <div className={styles.image}>
            <img src="" alt="" />
          </div>

          <div className={styles.image}>
            <img src="" alt="" />
          </div>
        </section>

      </main>
    </div>
  );
}
