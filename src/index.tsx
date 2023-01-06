import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Header } from "./components/Header";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import NotFound from "./pages/404";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<NotFound />} />
        <Route path="/car_rentals" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);
