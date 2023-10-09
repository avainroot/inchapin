import { ReactNode } from "react";
import styles from "./HoverText.module.scss";

export const HoverText = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.text}>
      <div>{children}</div>
      <div>{children}</div>
    </div>
  );
};
