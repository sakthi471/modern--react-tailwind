import React from "react";
import ReactDOM from "react-dom/client";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Analytics/>
    <Newsletter/>
    <Cards/>
    <Footer/>
  </React.StrictMode>
);
