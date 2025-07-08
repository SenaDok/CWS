import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

export default function TermsPage() {
  return (
    <>
      <DefaultNavbar routes={routes} />
      <h1>Terms and Conditions</h1>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}
