import { Typography } from "@/components/Typography/Typography";
import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.burger} />
      <Typography variant="menu">Меню</Typography>
    </div>
  );
};
