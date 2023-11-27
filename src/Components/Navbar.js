import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./actions/authActions";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignInOpen = () => setSignInOpen(true);
  const handleSignInClose = () => setSignInOpen(false);

  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);

  const handleProfileButtonClick = () => {
    if (isAuthenticated) {
      navigate("/profile");
      console.log("hey");
    } else {
      handleSignInOpen();
    }
  };

  const handleAuthenticationSuccess = () => {
    // Logic to handle authentication success, e.g., set isAuthenticated to true
    setIsAuthenticated(true);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#2196F3" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            component={Link}
            to="/"
            color="inherit"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Home
          </Button>
          {isAuthenticated && (
            <Button
              onClick={handleProfileButtonClick}
              // component={Link}
              color="inherit"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Profile
            </Button>
          )}
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Contact US
          </Button>
        </div>
        {/* <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ margin: 0, padding: 0 }}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              sx={{ mt: 0 }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/profile">
                My Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
        ) : ( */}
        {!isAuthenticated && (
          <div>
            <Button
              onClick={handleSignInOpen}
              color="inherit"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Login
            </Button>
            <Button
              onClick={handleSignUpOpen}
              color="inherit"
              style={{ fontSize: "1rem", fontWeight: "bold" }}
            >
              Sign Up
            </Button>
          </div>
        )}
        {isAuthenticated && (
          <Button
            onClick={() => setIsAuthenticated(false)}
            color="inherit"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            Log Out
          </Button>
        )}
        {/* Sign In Dialog */}
        <Dialog open={signInOpen} onClose={handleSignInClose}>
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent>
            <SignIn
              onSignUpClick={handleSignUpOpen}
              Close={handleSignInClose}
              onAuthenticationSuccess={handleAuthenticationSuccess}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSignInClose}>Close</Button>
          </DialogActions>
        </Dialog>
        {/* Sign Up Dialog */}
        <Dialog open={signUpOpen} onClose={handleSignUpClose}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <SignUp
              onSignInClick={handleSignInOpen}
              Close={handleSignUpClose}
              onAuthenticationSuccess={handleAuthenticationSuccess}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSignUpClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
