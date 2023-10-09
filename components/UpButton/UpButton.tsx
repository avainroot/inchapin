import Image from "next/image";
import up from "@/assets/images/up.svg";
import styles from "./UpButton.module.scss";

export const UpButton = () => {
  return (
    <div className={styles.up}>
      <span>
        <Image
          src={up}
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="К началу"
        />
      </span>
    </div>
  );
};
