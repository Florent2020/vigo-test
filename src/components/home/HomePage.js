import React, { useState, Fragment } from "react";

import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CardMedia from "@mui/material/CardMedia";

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  AlertTitle,
  InputLabel,
} from "@mui/material";

const alo = {
  skills: "",
};

function HomePage() {
  const validationSchema = Yup.object().shape({
    navn: Yup.string().required("Navn er påkrevd!"),
    adresse: Yup.string().required("Adresse er påkrevd!"),
    postnr: Yup.number()
      .required("Postnr er påkrevd!")
      .typeError("Vennligst skriv inn postnr ditt, og det må være et nummer!"),
    poststed: Yup.string().required("Poststed er påkrevd!"),
    telefon: Yup.string()
      .required("Telefon er påkrevd!")
      .typeError(
        "Vennligst skriv inn telefonnummeret ditt, og det må være et nummer!"
      )
      .min(8, "Telefonnummeret må bestå av minst 8 tegn!"),
    epost: Yup.string()
      .required("Epost er påkrevd!")
      .email("Epost er ugyldig!"),
    fødselsdato: Yup.date().nullable().typeError("fødselsdato er påkrevd!"),
    markedsforing: Yup.bool().oneOf([true], "Tillat markedsforing er påkrevd!"),
  });

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset(alo);
  }

  return (
    <main>
      <h1>Home page</h1>

      <Fragment>
        <Paper>
          <Grid item xs={12} sm={4}>
            <CardMedia
              image={
                "https://www.vigoiks.no/extension/site/design/site/images/logo_light.svg"
              }
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box px={3} py={2}>
              <Typography variant="h6" align="center" margin="dense">
                Registreringsskjema - React & Material UI
              </Typography>

              {submitted && (
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  Innsendingen var vellykket!
                </Alert>
              )}

              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Navn*
                  </InputLabel>
                  <TextField
                    required
                    id="outlined-navn"
                    name="navn"
                    // label="Navn"
                    fullWidth
                    margin="dense"
                    {...register("navn")}
                    error={errors.navn ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.navn?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Adresse*
                  </InputLabel>
                  <TextField
                    required
                    id="outlined-adresse"
                    name="adresse"
                    // label="Adresse"
                    fullWidth
                    margin="dense"
                    {...register("adresse")}
                    error={errors.adresse ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.adresse?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Postnr*
                  </InputLabel>
                  <TextField
                    required
                    id="postnr"
                    name="postnr"
                    // label="Postnr"
                    type="number"
                    fullWidth
                    margin="dense"
                    {...register("postnr")}
                    error={errors.postnr ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.postnr?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Poststed*
                  </InputLabel>
                  <TextField
                    required
                    id="poststed"
                    name="poststed"
                    // label="Poststed"
                    fullWidth
                    margin="dense"
                    {...register("poststed")}
                    error={errors.poststed ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.poststed?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Telefon*
                  </InputLabel>
                  <TextField
                    required
                    id="telefon"
                    name="telefon"
                    // label="Telefon"
                    type="number"
                    fullWidth
                    margin="dense"
                    {...register("telefon")}
                    error={errors.telefon ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.telefon?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Epost*
                  </InputLabel>
                  <TextField
                    required
                    id="epost"
                    name="epost"
                    // label="Epost"
                    fullWidth
                    margin="dense"
                    {...register("epost")}
                    error={errors.epost ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.epost?.message}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Fødselsdato*
                  </InputLabel>
                  <TextField
                    required
                    id="fødselsdato"
                    name="fødselsdato"
                    // label="Fødselsdato"
                    type="date"
                    fullWidth
                    margin="dense"
                    {...register("fødselsdato")}
                    error={errors.fødselsdato ? true : false}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.fødselsdato?.message}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Controller
                        control={control}
                        name="markedsforing"
                        defaultValue="false"
                        inputRef={register()}
                        render={({ field: { onChange } }) => (
                          <Checkbox
                            color="primary"
                            onChange={(e) => onChange(e.target.checked)}
                          />
                        )}
                      />
                    }
                    label={
                      <Typography
                        color={errors.markedsforing ? "error" : "inherit"}
                      >
                        Tillat markedsforing! *
                      </Typography>
                    }
                  />
                  <br />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.markedsforing
                      ? "(" + errors.markedsforing.message + ")"
                      : ""}
                  </Typography>
                </Grid>
              </Grid>

              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  Registrere
                </Button>
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Fragment>
    </main>
  );
}

export default HomePage;
