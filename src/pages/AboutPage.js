// src/pages/AboutPage.js
import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
// Material Kit 2 components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

export default function AboutPage() {
  return (
    <>
      <DefaultNavbar routes={routes} center />
      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <h1>About Our Coworking Space</h1>

        {/* Coworking Space Image */}
        <img
          src="/CWS-image.jpg"
          alt="Coworking Space"
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        />

        {/* Contact Form */}
        <h2>Contact Us</h2>
        <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "2rem" }}>
          <img
            src="/Coffee-Cup.jpg"
            alt="Contact"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              marginRight: "1rem",
            }}
          />
          <MKBox component="form" sx={{ maxWidth: "600px" }}>
            <MKBox mb={2}>
              <MKInput label="Name" variant="standard" fullWidth />
            </MKBox>
            <MKBox mb={2}>
              <MKInput type="email" label="Email" variant="standard" fullWidth />
            </MKBox>
            <MKBox mb={2}>
              <MKInput label="Message" variant="standard" multiline rows={5} fullWidth />
            </MKBox>
            <MKButton type="submit" variant="gradient" color="info">
              Send
            </MKButton>
          </MKBox>
        </div>

        {/* Google Maps */}
        <h2 style={{ marginTop: "3rem" }}>Our Location</h2>
        <iframe
          title="CWS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.8444805203259!2d12.935596173366912!3d48.430086058128914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4775b12870cf8629%3A0x4d5f6b243117ee23!2sTexas-Kobold%20Irish%20Pub%20Pfarrkirchen!5e0!3m2!1sen!2sde!4v1751932100852!5m2!1sen!2sde"
          width="100%"
          height="400"
          style={{ border: 0, marginTop: "1rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
