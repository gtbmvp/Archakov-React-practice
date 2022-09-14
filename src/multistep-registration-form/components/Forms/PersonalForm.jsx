import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "@mui/material/Button";
import FormField from "../FormField";

const schema = yup
  .object({
    firstName: yup.string().min(4, "Имя от 4 символов"),
    lastName: yup.string().required("Это обязательное поле"),
    email: yup.string().email().required("Это обязательное поле"),
    password: yup.string().min(6, "Пароль от 6 символов").required(),
  })
  .required();

function PersonalInfoForm({ nextStep, saveValues }) {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (inputValues) => {
    saveValues(inputValues);
    nextStep("/adress");
  };

  return (
    <FormProvider {...methods}>
      <form
        style={{
          margin: "0 auto",
          width: 600,
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <FormField name="firstName" label="Firstname" />
        <FormField name="lastName" label="Lastname" />
        <FormField name="password" label="password" type="password" />
        <FormField name="email" label="email" />
        <Button onClick={methods.handleSubmit(onSubmit)} variant="contained">
          Continue
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => methods.reset()}
        >
          Clear
        </Button>
      </form>
    </FormProvider>
  );
}

export default PersonalInfoForm;
