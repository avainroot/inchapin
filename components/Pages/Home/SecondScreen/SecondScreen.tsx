import { Video } from "@/components/Video/Video";
import Image from "next/image";
import styles from "./SecondScreen.module.scss";
import banner from "@/assets/images/second_image.jpeg";
import { UpButton } from "@/components/UpButton/UpButton";
import { Typography } from "@/components/Typography/Typography";
import { usePageContext } from "@/context/usePageContext";

export const SecondScreen = () => {
  const { scrollbar } = usePageContext();

  const handleToTop = () => {
    scrollbar?.scrollTo(0, 0, 600);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.sideLeft}>
        <Typography variant="small">О проекте</Typography>
        <div className={styles.banner}>
          <Image
            src={banner}
            alt="Banner"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className={styles.toUp} onClick={handleToTop}>
            <UpButton />
          </div>
        </div>
      </div>
      <div className={styles.sideRight}>
        <Typography variant="title2">
          Уютное и безопасное
          <br /> пространство для счастливой,
          <br />
          <span>спокойной и размеренной жизни</span>
        </Typography>
        <div className={styles.textPad}>
          <Typography variant="text">
            <span>
              Квартиры от 65 до 356 м<sup>2</sup> с чистовой отделкой,
            </span>
            <br /> балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ
            охраняемой территориИ.
          </Typography>
        </div>
        <Video />
      </div>
    </div>
  );
};
