"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import { Section } from "../Section/Section";
import logo from "@/assets/images/logo.svg";
import { PhoneButton } from "../PhoneButton/PhoneButton";
import { Menu } from "./Menu/Menu";
import { Typography } from "../Typography/Typography";
import { HoverText } from "../HoverText/HoverText";
import { SelectButton, SelectOption } from "../Select/Select";
import { usePageContext } from "@/context/usePageContext";

const dataSelect: SelectOption[] = [
  {
    value: "1",
    label: "Квартира 1",
  },
  {
    value: "2",
    label: "Квартира 2",
  },
];

export const Header = () => {
  const { showModal } = usePageContext();

  const handleShowModal = () => {
    showModal(true);
  };

  return (
    <header className={styles.header}>
      <Section>
        <div className={styles.wrapper}>
          <div className={styles.headerLeft}>
            <div className={styles.headerLeftMobile}>
              <Menu />
              <div onClick={handleShowModal} className={styles.call}>
                <PhoneButton />
              </div>
            </div>
            <div className={styles.select}>
              <SelectButton options={dataSelect} />
            </div>
          </div>
          <div className={styles.headerRight}>
            <a href="tel:+74955272121">
              <Typography variant="phone">+7 495 527 21 21</Typography>
            </a>
            <div onClick={handleShowModal}>
              <HoverText>
                <Typography variant="call">Заказать звонок</Typography>
              </HoverText>
            </div>
          </div>
          <div className={styles.logo}>
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
      </Section>
    </header>
  );
};
