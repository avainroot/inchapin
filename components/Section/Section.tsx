import styles from "./Section.module.scss";

export const Section = ({ children }: { children: React.ReactNode }) => (
  <section className={styles.section}>{children}</section>
);
