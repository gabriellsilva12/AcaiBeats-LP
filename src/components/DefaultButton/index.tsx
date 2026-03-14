import type React from "react";
import styles from "./styles.module.css";

type DefaultButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function DefaultButton({ text, ...props }: DefaultButtonProps) {
  return (
    <button className={styles.linkButton} {...props}>
      {text}
    </button>
  );
}
