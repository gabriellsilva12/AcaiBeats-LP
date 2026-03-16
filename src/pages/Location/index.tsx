import { Link } from "react-router-dom";
import LogoHeader from "../../components/LogoHeader";
import SideBar from "../../components/SideBar";
import styles from "./styles.module.css";

export default function Location() {
  return (
    <div className={styles.container}>
      <LogoHeader />
      <SideBar scrollMobile={false} />
      <main className={styles.content}>
        <div className={styles.div}>
          <header className={styles.header}>
            <h1>Onde nos encontrar?🏃🏻‍♂️</h1>
            <img src="/logoLoc.png" alt="" />
            <h2>
              Essa é uma pergunta comum… mas no Açaí Beats a resposta é
              diferente.
            </h2>
          </header>
          <section className={styles.story}>
            <p>
              Enquanto muitos saem de casa para buscar algo gostoso, aqui a
              ideia é simples:
            </p>
            <p>
              você faz o pedido, relaxa um pouco, e logo um açaí geladinho chega
              na sua porta.
            </p>

            <p>
              Nos bastidores, nossa equipe prepara cada pedido com cuidado para
              garantir que o sabor chegue fresco, cremoso e do jeito que você
              pediu.
            </p>

            <h3>Como nos encontrar? 🚀</h3>

            <h3>É fácil:</h3>
            <ul>
              <li>Escolha seu açaí</li>
              <li>Faça seu pedido</li>
              <li>Aguarde alguns minutos</li>
              <li>Pronto! Seu açaí chega até você.</li>
            </ul>
          </section>

          <section className={styles.action}>
            <span>🥤 Hora de escolher seu açaí!</span>
            <p>
              Clique no botão abaixo para ver o cardápio e montar seu pedido.
            </p>
            <Link to="/products">Faça seu pedido</Link>
          </section>
        </div>
      </main>
    </div>
  );
}
