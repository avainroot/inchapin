import Image from "next/image";
import phoneIcon from "@/assets/images/phone.svg";
import styles from "./Phone.module.scss";

export const PhoneButton = () => {
  return (
    <div className={styles.phone}>
      <Image src={phoneIcon} alt="Заказать звонок" />
    </div>
  );
};
