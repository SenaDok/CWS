import React from "react";
import Icon from "@mui/material/Icon";
import LoginPage from "pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage";
import BookPage from "./pages/BookPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import AboutPage from "./pages/AboutPage";
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
    route: "/book",
    component: BookPage,
  },
  {
    name: "Subscriptions",
    icon: <Icon>gavel</Icon>,
    route: "/subscriptions",
    component: SubscriptionPage,
  },
  {
    name: "About Us",
    icon: <Icon>info</Icon>,
    route: "/about",
    component: AboutPage,
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
