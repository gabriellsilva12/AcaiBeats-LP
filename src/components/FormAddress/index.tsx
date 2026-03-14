import DefaultButton from "../DefaultButton";
import styles from "./styles.module.css";

export default function FormAddress() {
  function handleSubmit(e: React.SubmitEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  return (
    <div className={styles.containerform}>
      <div className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h2>Endereço</h2>
        <form>
          <label>
            <span>CEP</span>
            <input type="text" placeholder="Ex: 62000-000" />
          </label>

          <label>
            <span>Rua</span>
            <input type="text" placeholder="Ex: Rua das Flores" />
          </label>

          <label>
            <span>Número</span>
            <input type="text" placeholder="Ex: 123" />
          </label>

          <label>
            <span>Complemento</span>
            <input type="text" placeholder="Ex: Apto 202, Bloco B (opcional)" />
          </label>

          <label>
            <span>Bairro</span>
            <input type="text" placeholder="Ex: Centro" />
          </label>

          <label>
            <span>Referência</span>
            <input type="text" placeholder="Ex: Próximo à padaria ou escola" />
          </label>

          <DefaultButton text={"Finalizar pedido"} onClick={() => alert("olaaa")}/>
        </form>
      </div>
    </div>
  );
}
