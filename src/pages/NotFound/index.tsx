import SideBar from "../../components/SideBar";
import LogoHeader from "../../components/LogoHeader";
import styles from "./styles.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <LogoHeader />
      <SideBar />

      <main className={styles.content}>
        <header className={styles.header}>
          <h1>404 — Página Não Encontrada</h1>
          <h2>
            ⚠️ Alerta do sistema: você entrou em uma área que ainda não foi
            desbloqueada.
          </h2>
        </header>
        <section className={styles.story}>
          <p>
            Durante sua jornada pela internet, você tentou acessar uma rota
            secreta… mas ela simplesmente não existe neste mapa. 🗺️
          </p>
          <p>
            O servidor jogou um lag, o roteador ficou confuso e o NPC
            responsável por essa página saiu para tomar um café ☕.
          </p>

          <p>Enquanto isso, o sistema recomenda:</p>

          <p>
            🧠 Recalcular rota e voltar para a base antes que o bug se espalhe.
          </p>
        </section>

        <section className={styles.action}>
          <span>🚀 Próximo passo</span>
          <p>
            Clique no botão abaixo para retornar à base principal e continuar
            sua aventura:
          </p>
          <a href="/">Voltar para a Home</a>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>🕹️ Dica gamer:</span>
        <p>
          Nem toda fase escondida leva a um tesouro… algumas só levam ao 404
          mesmo 😅
        </p>
      </footer>
    </div>
  );
}
