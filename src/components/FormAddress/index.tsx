import styles from "./styles.module.css";

type FormAddressProps = {
  active: boolean
}

export default function FormAddress({active}: FormAddressProps) {


  return (
    <div className={styles.containerform}>
      <div className="form">
        <form>
          <label>
            <span>CEP</span>
            <input type="number" name="" id="" />
          </label>

          <label>
            <span>Rua</span>
            <input type="text" />
          </label>

          <label>
            <span>Número</span>
            <input type="number" name="" id="" />
          </label>

          <label>
            <span>Complemento</span>
            <input type="text" />
          </label>

          <label>
            <span>Bairro</span>
            <input type="text" />
          </label>

          <label>
            <span>Referência</span>
            <input type="text" />
          </label>

          <button>Finalizar pedido</button>
        </form>
      </div>
    </div>
  );
}
