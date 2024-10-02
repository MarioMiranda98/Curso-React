import { Button, Grid, TextField, Link, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  email: "mario@mario.com",
  password: "123456",
  displayName: "Mario Miranda",
};

const formValidations = {
  email: [value => value.includes("@"), "El correo debe de tener un @"],
  password: [
    value => value.length >= 6,
    "El password debe de tener más de 6 letras",
  ],
  displayName: [value => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    email,
    password,
    displayName,
    onInputChange,
    formState,
    displayNameValid,
    passwordValid,
    emailValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const onSubmit = event => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }
    console.log(formState);
    setFormSubmitted(true);
  };

  return (
    <>
      <AuthLayout title="Crear Registro">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={displayNameValid}
                helperText={displayNameValid && formValidations["displayName"]}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={emailValid}
                helperText={emailValid && formValidations["email"]}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={passwordValid}
                helperText={passwordValid && formValidations["password"]}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={!isFormValid && formSubmitted}
                >
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
