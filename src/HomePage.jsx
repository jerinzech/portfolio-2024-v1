import React from "react";
import "../src/scss/style.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="page">
      <div className="main-view">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
