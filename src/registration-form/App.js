import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
        {...register("firstName", {
          required: "Обязательное поле",
          maxLength: 80,
        })}
        helperText={errors.firstName && errors.firstName.message}
        error={!!errors.firstName}
      />
      <TextField
        name="lastName"
        fullWidth
        label="Lastname"
        variant="standard"
        {...register("lastName", {
          required: "Обязательное поле",
          maxLength: 80,
        })}
        helperText={errors.lastName && errors.lastName.message}
        error={!!errors.lastName}
      />
      <TextField
        name="password"
        type="password"
        fullWidth
        label="password"
        variant="standard"
        {...register("password", {
          required: "Обязательное поле",
          minLength: { value: 6, message: "PW at least 6 symbols" },
        })}
        helperText={errors.password && errors.password.message}
        error={!!errors.password}
      />
      <TextField
        name="email"
        fullWidth
        label="email"
        variant="standard"
        {...register("email", {
          required: "Обязательное поле",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Wrong email",
          },
        })}
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
