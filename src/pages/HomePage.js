import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import ImageCarousel from "components/ImageCarousel";
import ScrollTopButton from "components/ScrollTopButton";
import BookSection from "sections/BookSection";
import SubscriptionSection from "sections/SubscriptionSection";
import AboutSection from "sections/AboutSection";
import bg1 from "assets/images/inohub.png";
import bg2 from "assets/images/CWS-image.jpg";
import bg3 from "assets/images/CWS-image3.webp";
import bg4 from "assets/images/CWS-image4.jpg";
import bg5 from "assets/images/CWS-image2.webp";
import Footer from "components/Footer";

export default function HomePage() {
  return (
    <>
      <DefaultNavbar routes={routes} center />
      <ImageCarousel images={[bg1, bg4, bg2, bg3, bg5]} title="Welcome to the Co-Working Space!" />
      <BookSection />
      <SubscriptionSection />
      <AboutSection />
      <ScrollTopButton />
      <Footer />
    </>
  );
}
