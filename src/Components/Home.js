import React from "react";
import { Button, Box, Typography } from "@mui/material";
import SearchBox from "./SearchBox";
import SimpleSlider from "./HorizontalScrollBar";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <img
          width="500px"
          height="500px"
          alt="girl and a bus"
          style={{ marginBottom: "15px" }}
          src="https://t4.ftcdn.net/jpg/05/09/25/59/360_F_509255982_OwyHscTpn0Z7a3Bn3sFTN2MfLFWzRezp.jpg"
        ></img>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginTop: "60px",
              color: "#FFCF96",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" marginBottom="10px">
              India's No. 1 Online Bus Ticket Booking Site
            </Typography>
            <Typography variant="h5">
              Your Ticket to Seamless Bus Travel Across India
            </Typography>
          </div>
          <SearchBox />
        </Box>
      </div>
      <SimpleSlider />
    </>
  );
}
