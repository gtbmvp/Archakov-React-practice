import React from "react";
import { useFormContext } from "react-hook-form";

import TextField from "@mui/material/TextField";

function FormField({ name, label, type = "text" }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      name={name}
      fullWidth
      label={label}
      variant="standard"
      {...register(name)}
      helperText={errors[name] && errors[name].message}
      error={!!errors[name]}
      type={type}
    />
  );
}

export default FormField;
