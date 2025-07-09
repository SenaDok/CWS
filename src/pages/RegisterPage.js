import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

const useStyles = makeStyles(() => ({
  container: {
    padding: "100px 20px",
    textAlign: "center",
  },
  input: {
    marginBottom: "20px",
  },
}));

export default function RegisterPage() {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) newErrors.email = "Email is required";
    if (!formValues.password) newErrors.password = "Password is required";
    setErrors(newErrors);
  };

  return (
    <>
      <DefaultNavbar routes={routes} center />
      <div className={classes.container}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formValues.name}
            onChange={handleChange}
            className={classes.input}
            error={Boolean(errors.name)}
            helperText={errors.name || " "}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>person</Icon>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formValues.email}
            onChange={handleChange}
            className={classes.input}
            error={Boolean(errors.email)}
            helperText={errors.email || " "}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formValues.password}
            onChange={handleChange}
            className={classes.input}
            error={Boolean(errors.password)}
            helperText={errors.password || " "}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>lock_outline</Icon>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </div>
    </>
  );
}
