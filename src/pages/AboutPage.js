import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

export default function AboutPage() {
  return (
    <>
      <DefaultNavbar routes={routes} />
      <div style={{ padding: "2rem" }}>
        <h1>About Our Coworking Space</h1>

        {/* Coworking Space Image */}
        <img
          src="/Coffee-Cup.jpg"
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
        <form style={{ maxWidth: "600px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Name</label>
            <input type="text" placeholder="Your Name" className="form-control" />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input type="email" placeholder="Your Email" className="form-control" />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Message</label>
            <textarea placeholder="Your Message" className="form-control" rows="5" />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>

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
      <DefaultFooter content={footerRoutes} />
    </>
  );
}
