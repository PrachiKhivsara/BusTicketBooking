import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DisplayBuses from "./Components/DisplayBuses";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import BasicAccordion from "./Components/SeatView";
import ProfilePage from "./Components/ProfilePage";
import { useSelector } from "react-redux";
import ContactPage from "./Components/Contact";
import Payment from "./Components/Payment";
import PaymentPage from "./Components/Payment";
import Paymentform from "./Components/PaymentForm";
import Footercomp from "./Components/Footer";
// import { ThemeProvider } from "@emotion/react";
// import BusTicketTheme from "./Components/Theme";

function App() {
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  // console.log(isAuthenticated)
  return (
    // <ThemeProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/displayBuses" element={<DisplayBuses />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/BasicAccordian" element={<BasicAccordion />}></Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/paymentform" element={<Paymentform />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
        </Routes>
        <Footercomp />
      </div>
    </Router>
    // </ThemeProvider>
  );
}
export default App;
