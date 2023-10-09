import { Typography } from "@/components/Typography/Typography";
import styles from "./FirstScreen.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo_large.svg";
import banner from "@/assets/images/first_image.jpeg";
import { useDeviceSize } from "@/hooks/useDeviceSize";

export const FirstScreen = () => {
  const { size } = useDeviceSize();
  return (
    <div className={styles.screen} style={{ height: size }}>
      <div className={styles.banner}>
        <Image
          src={banner}
          alt="INCHAPIN"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          priority
        />
      </div>
      <div className={styles.title}>
        <Typography variant="title1">
          Дом бизнес-класса
          <br /> для ценителей роскоши
        </Typography>
        <Image
          src={logo}
          alt="INCHAPIN"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};
