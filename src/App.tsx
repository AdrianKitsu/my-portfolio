import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
};

export default App;
