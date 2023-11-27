import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, Button, Grid, Box, Typography } from "@mui/material";
function Item(props) {
  return (
    <Paper
      square={false}
      elevation={3}
      // variant="outlined"
      sx={{
        // backgroundImage:
        // "linear-gradient(71.04deg, rgb(134, 0, 62) -6.92%, rgb(210, 81, 141) 109.43%)",
        backgroundImage:
          // "linear-gradient(71.04deg, rgb(206, 119, 0) -6.92%, rgb(255, 194, 111) 109.43%)",
          "linear-gradient(71.04deg, rgb(24, 125, 151) -6.92%, rgb(109, 213, 237) 109.43%)",
        width: "300px",
        // justifyContent: "center",
        // alignItems: "center",
        height: "300px",
        color: "white",
        fontFamily: "Montserrat",
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "row", height: "300px" }}>
          <img
            style={{ paddingTop: "50px" }}
            src={props.item.image}
            alt={props.item.alternative}
            height="100px"
          />
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100px" }}
          >
            <h2 style={{ paddingBottom: "30px" }}>{props.item.name}</h2>
            <p style={{ paddingBottom: "30px" }}>{props.item.description}</p>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <h3
            style={{
              border: "2px dashed white",
              padding: "4px",
              display: "inline",
            }}
          >
            {props.item.code}
          </h3>
          <h1>View More</h1>
        </Box>
      // </Box> */}
      <Grid
        maxWidth="sm"
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={4}>
          <div style={{ alignItems: "center", justifyContent: "center" }}>
            <img
              // style={{ paddingTop: "50px" }}
              src={props.item.image}
              alt={props.item.alternative}
              // height="100px"
            />
          </div>
        </Grid>
        {/* <Grid
          container
          xs={8}
          height="250px"
          sx={{ justifyContent: "center", mt: 4 }}
        >  */}
        <Grid item>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ paddingBottom: "20px" }}>{props.item.name}</h2>
            <p style={{ paddingBottom: "20px" }}>{props.item.description}</p>
          </div>
        </Grid>
        {/* <Grid item>
        </Grid> */}
        <Grid item>
          <h3
            style={{
              border: "2px dashed white",
              padding: "8px",
              display: "inline",
              marginBottom: "30px",
              margin: "20px",
            }}
          >
            {props.item.code}
          </h3>
        </Grid>
        {/* </Grid> */}
      </Grid>
      <Button
        className="CheckButton"
        variant="contained"
        sx={{ backgroundColor: "darkred", marginTop: "20px" }}
      >
        VIEW DETAILS
      </Button>
    </Paper>
  );
}

const SimpleSlider = () => {
  var items = [
    {
      image:
        "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
      name: "Save up to Rs 250 on bus tickets",
      description: "Valid till 30 Nov",
      alternative: "image1",
      code: "SUPERHIT",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/BUS300.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "FIRST",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/RBTRIP.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
    },
    {
      name: "Save up to 300 in AP,TS routes",
      image: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
      description: "Valid till 30 Nov",
      alternative: "image2",
      code: "BUS300",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0",
    // nextArrow: <div className="next-slick-arrow"> ⫸ </div>,
    // prevArrow: <div className="prev-slick-arrow"> ⫷ </div>,
  };

  return (
    <div style={{ margin: "40px" }}>
      <Typography
        variant="h4"
        style={{
          marginTop: "60px",
          marginBottom: "40px",
          color: "",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        TRENDING OFFERS
      </Typography>
      <Slider {...settings}>
        <div>
          <Item item={items[0]}></Item>
        </div>
        <div>
          <Item item={items[1]}></Item>
        </div>
        <div>
          <Item item={items[2]}></Item>
        </div>
        <div>
          <Item item={items[3]}></Item>
        </div>
        <Item item={items[4]}></Item>
        <div>
          <Item item={items[0]}></Item>
        </div>
        <div>
          <Item item={items[1]}></Item>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
