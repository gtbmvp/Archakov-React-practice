import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().min(4, "Имя от 4 символов"),
    lastName: yup.string().required("Это обязательное поле"),
    email: yup.string().email().required("Это обязательное поле"),
    password: yup.string().min(6, "Пароль от 6 символов").required(),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("errors:", errors);

  return (
    <form
      style={{
        margin: "0 auto",
        width: 800,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextField
        name="firstName"
        fullWidth
        label="Firstname"
        variant="standard"
        {...register("firstName")}
        helperText={errors.firstName && errors.firstName.message}
        error={!!errors.firstName}
      />
      <TextField
        name="lastName"
        fullWidth
        label="Lastname"
        variant="standard"
        {...register("lastName")}
        helperText={errors.lastName && errors.lastName.message}
        error={!!errors.lastName}
      />
      <TextField
        name="password"
        type="password"
        fullWidth
        label="password"
        variant="standard"
        {...register("password")}
        helperText={errors.password && errors.password.message}
        error={!!errors.password}
      />
      <TextField
        name="email"
        fullWidth
        label="email"
        variant="standard"
        {...register("email")}
        helperText={errors.email && errors.email.message}
        error={!!errors.email}
      />
      <br />
      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        Registrate
      </Button>
      <Button variant="contained" color="error" onClick={() => reset()}>
        Clear
      </Button>
    </form>
  );
}

export default App;
