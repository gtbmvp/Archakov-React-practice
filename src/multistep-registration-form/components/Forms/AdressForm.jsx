import React from "react";
import Button from "@mui/material/Button";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormField from "../FormField";

const schema = yup
  .object({
    city: yup.string().required("Укажите город"),
    street: yup.string().required("Укажите улицу"),
    apartment: yup.number().required("Укажите номер квартиры"),
  })
  .required();

function AdressForm({ nextStep, saveValues }) {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (inputValues) => {
    saveValues((prev) => ({ ...prev, ...inputValues }));
    nextStep("/result");
  };

  return (
    <FormProvider {...methods}>
      <form
        style={{
          margin: "0 auto",
          width: 600,
          height: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <FormField name="city" label="city" />
        <FormField name="street" label="street" />
        <FormField name="apartment" label="apartment number" />

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

export default AdressForm;
