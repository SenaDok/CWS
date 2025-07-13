import React from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <MKBox component="footer" py={6} textAlign="center" sx={{ backgroundColor: "#e4cdaeff" }}>
      <MKTypography variant="body2" color="secondary">
        © {year} Co-Working Space. All rights reserved.
      </MKTypography>
    </MKBox>
  );
}

export default Footer;
