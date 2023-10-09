import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={styles.button} />
);
