import Image from "next/image";
import styles from "./Modal.module.scss";
import close from "@/assets/images/close.svg";
import { Section } from "../Section/Section";
import { Form } from "../Form/Form";
import { LegacyRef, forwardRef, useEffect } from "react";
import { usePageContext } from "@/context/usePageContext";

// eslint-disable-next-line react/display-name
export const Modal = forwardRef(
  ({ state }: { state: string }, ref: LegacyRef<HTMLDivElement>) => {
    const { showModal } = usePageContext();
    const handleClose = () => showModal(false);

    const handleExit = (code: string) => {
      code === "Escape" && showModal(false);
    };

    useEffect(() => {
      addEventListener("keyup", ({ code }) => handleExit(code));
      return () => {
        removeEventListener("keyup", ({ code }) => handleExit(code));
      };
    });

    return (
      <div ref={ref} className={`${styles.modal} ${styles[`modal-${state}`]}`}>
        <div onClick={handleClose} className={styles.close}>
          <Image
            src={close}
            alt="Закрыть"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <Section>
          <Form />
        </Section>
      </div>
    );
  }
);
