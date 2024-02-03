import React from "react";
import "../styles/LeftNavBar.css";
import { CiSearch } from "react-icons/ci";
import { LuPieChart } from "react-icons/lu";
import useAxios from "../Hooks/useAxios";
import { useState,  } from "react";

function LeftNavBar() {
  const [data, setData] = useState('');
  const { response } = useAxios(data ? `search?query=${data}` : null);



  console.log(response?.coins,"res")
  let amount = 100000;

  console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(amount));

  function formatUSD(amount) {
    if (amount < 1) {
      return amount.toFixed(2); // Display amount with 2 decimal places if less than 1
    } else if (amount >= 1 && amount < 10) {
      return amount.toFixed(0); // Display without decimal places if between 1 and 10
    } else if (amount >= 10 && amount < 1000) {
      return amount.toFixed(2); // Display amount with 2 decimal places if between 10 and 1000
    } else if (amount >= 1000 && amount < 10000) {
      return (amount / 1000).toFixed(1) + "k"; // Display in 'k' format if between 1000 and 10000
    } else if (amount >= 10000 && amount < 1000000) {
      return (amount / 1000).toFixed(0) + "k"; // Display in 'k' format if between 10000 and 1000000
    } else if (amount >= 1000000 && amount < 10000000) {
      return (amount / 1000000).toFixed(1) + "M"; // Display in 'M' format if between 1000000 and 10000000
    } else if (amount >= 10000000 && amount < 1000000000) {
      return (amount / 1000000).toFixed(0) + "M"; // Display in 'M' format if between 10000000 and 1000000000
    } else if (amount >= 1000000000 && amount < 10000000000) {
      return (amount / 1000000000).toFixed(1) + "B"; // Display in 'B' format if between 1000000000 and 10000000000
    } else {
      return (amount / 1000000000).toFixed(0) + "B"; // Display in 'B' format for larger amounts
    }
  }

  const formatedUsd = formatUSD(amount);

  return (
    <div className="LeftNavBar-container">
      <div className="LeftNavBar-leftContainer">
        <div className="left-shadow-box ">
          <CiSearch
            className="seachIcon-portfolio"
            color=" rgba(255, 255, 255, 0.68)"
          />
          <input 
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="LeftNavBar-inputbox"
            placeholder="Search"
          />
          {response && (
            <div className="search-div">
              { response ?
                response.coins.map((item) => (
                  <div className="search-item" key={item.id}>{item.symbol}</div>
                )) : "Loading..."}
            </div>
          )}
        </div>
      </div>
      <div className="LeftNavBar-rightContainer">
        <p className="usersName">Hi, Amar</p>
        <div className="Equity-section">
          <div className="mainContainer">
            <LuPieChart />
            <p className="Equity">Equity</p>
          </div>

          <div className="flexbox-portfolio">
            <div className="a">
              <span title={`$${amount}`} className="box1">
                {formatedUsd}
              </span>
              <p className="box2">Margin available</p>
            </div>
            <div className="b">
              <p>
                Margins used
                <span className="box-b" title={`$${amount}`}>
                  {formatedUsd}
                </span>
              </p>
              <p>
                Opening Balance{" "}
                <span className="box-b" title={`$${amount}`}>
                  {formatedUsd}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftNavBar;
