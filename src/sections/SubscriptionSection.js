import React, { useState } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SubscriptionSection() {
  const [open, setOpen] = useState(false);

  const handleSubscribe = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderCard = (title, description, note) => (
    <MKBox borderRadius="lg" shadow="md" p={3} textAlign="center" width={{ xs: "100%", md: "25%" }}>
      <MKTypography variant="h5" mb={1} fontWeight="bold">
        {title}
      </MKTypography>
      <MKTypography variant="body1" mb={1}>
        {description}
      </MKTypography>
      <MKTypography variant="caption" color="text" mb={2} display="block">
        {note}
      </MKTypography>
      <MKButton color="info" onClick={handleSubscribe}>
        subscribe
      </MKButton>
    </MKBox>
  );

  return (
    <section id="subscriptions">
      <MKBox pt={12} px={2}>
        <MKTypography variant="h2" align="center" mb={4}>
          Subscriptions
        </MKTypography>
        <MKBox
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          gap={3}
          mb={6}
        >
          {renderCard(
            "Student Pass",
            "Subscription rates for students is €20/month, €200/year",
            "+Access to reservation"
          )}
          {renderCard(
            "Professional Pass",
            "Subscription rates for professionals is €40/month, €400/year",
            "+Access to reservation"
          )}
          {renderCard("Guest Pass", "Day pass for €5/24hours", "+Day reservation")}
        </MKBox>
        <MKBox>
          <MKTypography variant="h4" mb={2}>
            Terms and Conditions
          </MKTypography>
          <MKTypography variant="body2" mb={1}>
            By subscribing you agree to our general rules of conduct and payment policy.
            Subscriptions are non‑transferable and renew automatically unless cancelled.
          </MKTypography>
          <MKTypography variant="body2">
            Please respect other guests and use the facilities responsibly. We reserve the right to
            update these terms at any time.
          </MKTypography>
        </MKBox>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="info" sx={{ width: "100%" }} onClose={handleClose}>
            subscription temporarily under work
          </Alert>
        </Snackbar>
      </MKBox>
    </section>
  );
}
