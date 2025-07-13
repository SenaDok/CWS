import React from "react";
import Icon from "@mui/material/Icon";
import LoginPage from "pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: "/",
    component: HomePage,
  },
  {
    name: "Book a Seat",
    icon: <Icon>event_seat</Icon>,
    href: "#book",
  },
  {
    name: "Subscriptions",
    icon: <Icon>gavel</Icon>,
    href: "#subscriptions",
  },
  {
    name: "About Us",
    icon: <Icon>info</Icon>,
    href: "#about",
  },
  {
    name: "Login",
    icon: <Icon>login</Icon>,
    route: "/login",
    component: LoginPage,
  },
  {
    name: "Register",
    icon: <Icon>person_add</Icon>,
    route: "/register",
    component: RegisterPage,
  },
];

export default routes;
