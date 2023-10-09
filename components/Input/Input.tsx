"use client";

import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import styles from "./Input.module.scss";
import { Typography } from "../Typography/Typography";
import { IMaskInput } from "react-imask";

export const Input = (
  props: InputHTMLAttributes<HTMLInputElement> & { mask?: string }
) => {
  const [active, setActive] = useState<boolean>(false);
  const { placeholder, onChange, value, mask } = props;

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    if (!value) setActive(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value && setActive(true);
  };

  useEffect(() => {
    if (value) setActive(true);
  }, [value]);

  return (
    <div className={`${styles.input} ${active ? styles.active : ""}`}>
      <IMaskInput
        {...props}
        mask={mask}
        value={String(value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange && onChange(event);
          handleChange(event);
        }}
      />
      {placeholder && (
        <div className={styles.placeholder}>
          <Typography variant="inputPlaceholder">{placeholder}</Typography>
        </div>
      )}
    </div>
  );
};
