/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

import React from "react";
import Icon from "@mui/material/Icon";
import LoginPage from "pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage";
import BookPage from "./pages/BookPage";
import TermsPage from "./pages/TermsPage";
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
  {
    name: "Book a Seat",
    icon: <Icon>event_seat</Icon>,
    route: "/book",
    component: BookPage,
  },
  {
    name: "Terms & Conditions",
    icon: <Icon>gavel</Icon>,
    route: "/terms",
    component: TermsPage,
  },
  {
    name: "About Us",
    icon: <Icon>info</Icon>,
    route: "/about",
    component: AboutPage,
  },
];

export default routes;
