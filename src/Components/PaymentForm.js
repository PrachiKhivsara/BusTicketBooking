import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 500,
  height: "auto",
  padding: theme.spacing(3),
  textAlign: "center",
  margin: "auto",
  marginTop: "40px",
  marginBottom: "40px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
}));

const Paymentform = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <DemoPaper variant="outlined">
        <Typography variant="h5" gutterBottom>
          Payment Details
        </Typography>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="mobile"
          label="Mobile No"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="cardNumber"
          label="Card Number"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="expirationDate"
          label="Expiration Date"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="cvv"
          label="CVV"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={() => {
            navigate("/paymentpage");
          }}
        >
          Submit
        </Button>
      </DemoPaper>
    </Box>
  );
};

export default Paymentform;
