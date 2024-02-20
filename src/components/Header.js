import React from "react";
import "../styles/Header.css";
function Header() {
  return (
    <div className="headercontainer">
      <div className="logo">
        <img
          src="https://www.skydesigner.me/hamster-logo-design/attachment/377/"
          alt="logo"
        />
      </div>
      <div className="fontHeading">Coin Wave</div>
      <div className="portfolio">
        {/* <Link to={"/portfolio"}>Portfolio</Link> */}
      </div>
    </div>
  );
}

export default Header;
