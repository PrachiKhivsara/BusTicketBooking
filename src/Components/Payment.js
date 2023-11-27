import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Box,
  Divider,
} from "@mui/material";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const numberOfPassengers = 2; // Example number of passengers
  const taxPercentage = 8; // Example tax percentage

  const calculateTotalFare = () => {
    const baseFare = 1000 * numberOfPassengers; // Assuming a fixed base fare of 1000
    const taxAmount = (baseFare * taxPercentage) / 100;
    return baseFare + taxAmount;
  };

  const grandTotal = calculateTotalFare();

  return (
    <Box sx={{ display: "flex" }}>
      <Card
        style={{
          maxWidth: "400px",
          margin: "auto",
          // marginLeft: "100px",
          marginTop: "50px",
          padding: "20px 120px",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Payment Details
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Payment Method</FormLabel>
            <RadioGroup
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <FormControlLabel
                value="creditCard"
                control={<Radio />}
                label="Credit Card"
                defaultChecked
              />
              {paymentMethod === "creditCard" && (
                <CardContent>
                  <TextField
                    label="Card Number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    autoFocus
                  />
                  <TextField
                    label="Expiry Date"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    label="CVV"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  {/* Add more card-related fields like cardholder name, etc. */}
                </CardContent>
              )}
              <FormControlLabel
                value="debitCard"
                control={<Radio />}
                label="Debit Card"
              />
              {paymentMethod === "debitCard" && (
                <CardContent>
                  <TextField
                    label="Card Number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    autoFocus
                  />
                  <TextField
                    label="Expiry Date"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    label="CVV"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  {/* Add more card-related fields like cardholder name, etc. */}
                </CardContent>
              )}
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              {paymentMethod === "upi" && (
                <CardContent>
                  <TextField
                    label="UPI ID"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    autoFocus
                  />
                </CardContent>
              )}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button variant="contained" color="primary">
            Pay Now
          </Button>
        </div>
      </Card>
      {/* </Grid> */}
      {/* <Grid item xs={6}> */}
      <Divider orientation="vertical" flexItem style={{ marginLeft: "auto" }} />
      <div
        style={{
          maxWidth: "400px",
          //   margin: "auto",
          marginTop: "50px",
          padding: "20px",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Fare Information
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Passenger Fare: ₹1000
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Passengers: {numberOfPassengers}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Tax ({taxPercentage}%): ₹
            {1000 * numberOfPassengers * (taxPercentage / 100)}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Total Fare: ₹{grandTotal}
          </Typography>
        </CardContent>
      </div>
      {/* </Grid> */}
    </Box>
  );
};

export default PaymentPage;
