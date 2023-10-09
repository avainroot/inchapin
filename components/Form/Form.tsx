"use client";

import styles from "./Form.module.scss";
import { Typography } from "../Typography/Typography";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useFormik } from "formik";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Typography variant="formTitle">Заказать звонок</Typography>
      <div className={styles.fields}>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Ваше имя"
        />
        <Input
          id="phone"
          name="phone"
          type="text"
          mask="+{7}(000)000-00-00"
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder="Телефон"
        />
        <Input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="e-mail"
        />
      </div>
      <div className={styles.formFooter}>
        <Typography variant="formText">
          Нажимая на кнопку «Отправить», вы ознакомлены <br /> и подтверждаете
          согласие с <a href="/">политикой обработки персональных данных</a>
        </Typography>
        <Button type="submit">Отправить</Button>
      </div>
    </form>
  );
};
