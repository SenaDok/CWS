import React, { useEffect, useState } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "100px 20px",
    textAlign: "center",
  },
  slider: {
    width: "100%",
    height: "80vh",
    position: "relative",
    overflow: "hidden",
  },
  slideImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0,
    transition: "opacity 1s ease-in-out",
  },
  active: {
    opacity: 1,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const images = ["/CWS-image.jpg", "/CWS-image2.jpg", "/CWS-image3.jpg", "/CWS-image4.jpg"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <DefaultNavbar routes={routes} center />
      <div className={classes.slider}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`slide-${index}`}
            className={`${classes.slideImage} ${index === activeIndex ? classes.active : ""}`}
          />
        ))}
      </div>
      <div className={classes.container}>
        <h1>Welcome to the Co-Working Space!</h1>
      </div>
    </>
  );
}
