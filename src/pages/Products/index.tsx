import { useState } from "react";
import SideBar from "../../components/SideBar";
import styles from "./styles.module.css";

export default function Products() {
  const [sabor, setSabor] = useState("");

  const phone = "558592584209";

  const message = [
    [
      "Olá! 😄 Vi o site de vocês e quero montar meu açaí 🍧\n" +
        "Pode me enviar o cardápio do dia, por favor?",
    ],
    [
      `Olá! 😄 Vi o site de vocês gostaria de pedir meu açai de ${sabor} 🍧\n`
    ],
  ];

  const whatsappLink = `https://wa.me/${phone}?text=${!sabor ? message[0]: message[1]}`;

  return (
    <>
      <div className={styles.container}>
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

        <div className={styles.info}>
          <h2>Sabores:</h2>
          <ul>
            <ul>
              <h3>Açaí com Ninho e Nutella</h3>
              <li>
                300ML: R$15,00 - <span>R$20,00</span>
              </li>
              <li>
                50ML: 20,00 - <span>R$24,00</span>
              </li>
              {/* <button>send</button> */}
            </ul>
            <ul>
              <h3>Açaí com Mousse de Maracujá</h3>
              <li>
                300ML: R$15,00 - <span>R$19,00</span>
              </li>
              <li>
                50ML: 20,00 - <span>R$24,00</span>{" "}
              </li>
            </ul>
            {/* <button>send</button> */}
            <ul>
              <h3>Açaí com Creme de Ninho</h3>
              <li>
                300ML: R$13,00 - <span>R$17,00</span>
              </li>
              <li>
                500ML: R$18,00 - <span>R$23,00</span>
              </li>
            </ul>
            {/* <button>send</button> */}
          </ul>
          <div className={styles.confirmation}>
            <label htmlFor="select">Escolha o seu</label>
            <p>Você escolheu: {!sabor ? "..." : sabor}</p>
            <select
              name="select"
              id="select"
              defaultValue=""
              onChange={(e) => setSabor(e.target.value)}
            >
              <option value="" disabled>
                Escolha uma fruta
              </option>
              <option value="uva">Uva</option>
              <option value="morango">Morango</option>
              <option value="maracuja">Maracujá</option>
            </select>
            <a href={whatsappLink}>Fazer pedido</a>
          </div>
        </div>
      </div>
    </>
  );
}
