import React from "react";
import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavBar";
import"../styles/Portfolio.css"

const Portfolio = () => {
  return (
    <div className="Portfolio-container" >
      <Header />
      <div>
        <div className="wishlist-bar">
          <LeftNavBar />
        </div>
        <div className="Investment-page"></div>
      </div>
    </div>
  );
};

export default Portfolio;
