import React from "react";
import "../styles/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="headercontainer">
      <div className="logo">Logo</div>
      <div className="inputflexbox">
        <input placeholder="Search" />
        <div className="searchicon">
        <SearchIcon />
        </div>
      </div>
      <div className="portfolio"><Link to={'/portfolio'}>Portfolio</Link></div>      
    </div>
  );
}

export default Header;
