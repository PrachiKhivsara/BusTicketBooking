import React from "react";
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CallIcon from "@mui/icons-material/Call";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Paper from "@mui/material/Paper";
// import FeedbackForm from "./Feedback";
import "../App.css";
import QuestionMark from "@mui/icons-material/QuestionMark";
export default function ContactPage() {
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          backgroundImage:
            'url("https://www.teahub.io/photos/full/203-2035384_high-resolution-blue-background.jpg"',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% auto",
          height: "50vh",
        }}
      >
        <div
          style={{
            padding: "100px",
            color: "white",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          <h2>Contact us</h2>
        </div>
      </div>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h3>Let's Start a Conversation</h3>
      </div>
      <Box sx={{ flexGrow: "3px" }}>
        <Paper elevation={3}>
          <div style={{ margin: "20px", textAlign: "center" }}>
            <h3>Ask How can we Help you?</h3>
          </div>
          <div style={{ margin: "20px" }}>
            <h3>Frequently asked Questions</h3>
          </div>
          <div className="question">
            <QuestionMark />
            What are the benefits of online bus booking?
            <div className="answers">
              <p>
                <QuestionAnswerIcon />
                Online booking gives ample choice to passenger with regard to
                bus operators, departure and arrival timings, bus type, etc.
                Also multiple payment modes to chose from like debit card,
                credit card, internet banking, etc.
              </p>
            </div>
          </div>
          <div className="question">
            <QuestionMark />
            What do I need to prepare before booking online?
            <div className="answers">
              <QuestionAnswerIcon />
              All you need to have is a computer with internet connection or a
              smart phone with active data, valid email id and bank account with
              debit card or credit card for online payment.
            </div>
          </div>
          <div className="question">
            <QuestionMark />
            How can I cancel my ticket?
            <div className="answers" style={{ paddingBottom: "20px" }}>
              <QuestionAnswerIcon />
              Ticket can be cancelled online by calling on the call center after
              clearing security questions. Cancellation charges and policy
              depends on various bus operators individually. Passenger can check
              the cancellation policy at the time of booking ticket or anytime.
            </div>
          </div>
        </Paper>
      </Box>
      <div>
        {/* <Router>
          <Link to="/Feedbackform">Feedback</Link>
          <Routes>
            <Route path="/Feedbackform" element={<FeedbackForm />} />
          </Routes>
        </Router> */}
      </div>
      {/* <div style={{justifyContent:"center",margin:"20px"}}>
            <h3 textAlign={"center"}>Rate Us</h3>
            <Stack spacing={2}>
            <Rating name="size-medium" defaultValue={2} size="small" />
            </Stack>
            </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CallIcon />
        <h4>Toll Free : 1440-83459845</h4>
      </div>
    </div>
  );
}
