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
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
        </header>

        <section className={styles.products}>

          <div className={styles.image}>
            <img src="maracuja.png" alt="" />
          </div>

          <div className={styles.image}>
            <img src="maracuja.png" alt="" />
          </div>

          <div className={styles.image}>
            <img src="maracuja.png" alt="" />
          </div>

          <div className={styles.image}>
            <img src="maracuja.png" alt="" />
          </div>

        </section>

      </main>
    </div>
  );
}
