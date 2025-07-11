import React, { useEffect, useState } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import { makeStyles } from "@material-ui/core/styles";

// Material Kit 2 components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKProgress from "components/MKProgress";

const useStyles = makeStyles(() => ({
  container: {
    padding: "100px 20px",
    textAlign: "center",
  },
  input: {
    marginBottom: "20px",
  },
}));

export default function BookPage() {
  const classes = useStyles();
  const [capacity, setCapacity] = useState(0);
  const [occupancy, setOccupancy] = useState(0);

  useEffect(() => {
    // TODO: replace the mock with real sensor/API data
    const fetchStatus = async () => {
      // This is just mocked data for now
      const mockCapacity = 50;
      const mockOccupancy = 23;

      setCapacity(mockCapacity);
      setOccupancy(mockOccupancy);
    };

    fetchStatus();
  }, []);

  const usage = capacity ? Math.min((occupancy / capacity) * 100, 100) : 0;

  return (
    <>
      <DefaultNavbar routes={routes} center />
      <MKBox className={classes.container}>
        <MKTypography variant="h2" mb={2}>
          Book a Seat
        </MKTypography>
        <MKTypography variant="body1" mb={1}>
          Capacity: {capacity}
        </MKTypography>
        <MKTypography variant="body1" mb={2}>
          Current Occupancy: {occupancy}
        </MKTypography>
        <MKProgress color="info" value={usage} label />
      </MKBox>
    </>
  );
}
