import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"; // ✅ Material UI button
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

const useStyles = makeStyles(() => ({
  container: {
    padding: "100px 20px",
    textAlign: "center",
  },
  input: {
    marginBottom: "20px",
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <>
      <DefaultNavbar routes={routes} />
      <div className={classes.container}>
        <h2>Login</h2>
        <TextField
          label="Email"
          variant="outlined"
          className={classes.input}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          className={classes.input}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon>lock_outline</Icon>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary">
          Log In
        </Button>
      </div>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}
