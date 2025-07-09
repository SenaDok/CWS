import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import RoleDialog from "components/RoleDialog";
import React, { useState } from "react";

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
  const [role, setRole] = useState("");
  const [dialogOpen, setDialogOpen] = useState(true);

  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
    setDialogOpen(false);
  };

  return (
    <>
      <DefaultNavbar routes={routes} center />
      <RoleDialog open={dialogOpen} onSelect={handleSelect} />
      <div className={classes.container}>
        <h2>Login</h2>
        {role && <p>Selected role: {role}</p>}
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
    </>
  );
}
