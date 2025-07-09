import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import ImageCarousel from "components/ImageCarousel";
import bg1 from "assets/images/CWS-image.jpg";
import bg2 from "assets/images/CWS-image2.jpg";
import bg3 from "assets/images/CWS-image3.jpg";
import bg4 from "assets/images/CWS-image4.jpg";

export default function HomePage() {
  return (
    <>
      <DefaultNavbar routes={routes} center />
      <ImageCarousel images={[bg1, bg2, bg3, bg4]} title="Welcome to the Co-Working Space!" />
    </>
  );
}
