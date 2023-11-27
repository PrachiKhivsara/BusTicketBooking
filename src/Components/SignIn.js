import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./actions/authActions";
import axios from "axios";

const defaultTheme = createTheme();

export default function SignIn({
  onSignUpClick,
  Close,
  onAuthenticationSuccess,
}) {
  // const [allCreds, setAllCreds] = useState([]);
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  const handleSignUpClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    Close();
    onSignUpClick(); // Call the provided function to open the SignUp dialog
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/loginCreds");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setAllCreds(data);
  //       data.map((cred) => {
  //         console.log(cred);
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // // const navigate = useNavigate();
  // const p = "";
  // const handleLogin = () => {
  //   const userEmail = formData.email;
  //   const password = formData.password;
  //   const isAuthenticated = allCreds.some((cred) => (p = cred["email"]));
  //   console.log(password);
  //   // console.log(e + " " + userEmail);
  //   if (isAuthenticated) {
  //     console.log("success");
  //     // dispatch(login());
  //     Close();
  //   } else {
  //     console.log("failure");
  //   }
  // };

  // const handleState = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState([]);
  const HandleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const authenticatedUser = loginCreds.find(
      (user) =>
        user.email === data.get("email") &&
        user.password === data.get("password")
    );

    if (authenticatedUser) {
      console.log("User authenticated!");
      onAuthenticationSuccess();
      Close();
    } else {
      console.log("Authentication failed!");
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/loginCreds")
      .then((response) => setLoginCreds(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={HandleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={handleState}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              // onChange={handleState}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  onClick={handleSignUpClick}
                  variant="body2"
                >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
