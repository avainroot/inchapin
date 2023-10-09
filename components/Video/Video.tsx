import Image from "next/image";
import { Typography } from "../Typography/Typography";
import styles from "./Video.module.scss";
import videoBackground from "@/assets/images/video.jpeg";
import videoPlay from "@/assets/images/video.svg";

export const Video = () => {
  return (
    <>
      <div className={styles.block}>
        <div className={styles.name}>
          <Typography variant="name">Видео о проекте</Typography>
          <div className={styles.duration}>
            <Typography variant="name">1:25 минут</Typography>
          </div>
        </div>
        <div className={styles.sep} />
        <div className={styles.button}>
          <Image
            src={videoBackground}
            alt="Видео"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className={styles.play}>
            <Image
              src={videoPlay}
              alt="Play"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Typography variant="buttonPlay">Play</Typography>
          </div>
        </div>
      </div>
    </>
  );
};
