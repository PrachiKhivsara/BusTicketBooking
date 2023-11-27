import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footercomp = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        <Typography variant="h5">Popular Routes</Typography>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <List>
            <ListItem>Chennai to Bangalore Bus</ListItem>
            <ListItem>Chennai to Mysore Bus</ListItem>
            <ListItem>Chennai to Coimbatore Bus</ListItem>
            <ListItem>Coimbatore to Bangalore Bus</ListItem>
          </List>
        </div>
        <div>
          <List>
            <ListItem>Chennai to Bangalore Bus</ListItem>
            <ListItem>Chennai to Mysore Bus</ListItem>
            <ListItem>Chennai to Coimbatore Bus</ListItem>
            <ListItem>Coimbatore to Bangalore Bus</ListItem>
          </List>
        </div>
        <div>
          <List>
            <ListItem>Chennai to Bangalore Bus</ListItem>
            <ListItem>Chennai to Mysore Bus</ListItem>
            <ListItem>Chennai to Coimbatore Bus</ListItem>
            <ListItem>Coimbatore to Bangalore Bus</ListItem>
          </List>
        </div>
      </div>
      <div>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
          <BottomNavigationAction label="Youtube" icon={<YouTubeIcon />} />
          <BottomNavigationAction label="Telegram" icon={<TelegramIcon />} />
        </BottomNavigation>
      </div>
      <div
        style={{
          backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>Home</div>
        <div>Offers</div>
        <div>About</div>
        <div>FAQ</div>
        <div>Terms</div>
        <div>Privacy</div>
        <div>Feedback</div>
        <div>Routes</div>
      </div>
      <div style={{ backgroundColor: "coral", textAlign: "right" }}>
        Copyright @ Red Bus Online Portal. All rights Reserved.
      </div>
    </div>
  );
};

export default Footercomp;
