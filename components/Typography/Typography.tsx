import styles from "./Typography.module.scss";

interface ITypography {
  variant: string;
  children: React.ReactNode;
}

export const Typography = ({ variant, children }: ITypography) => {
  return <div className={styles[variant]}>{children}</div>;
};
