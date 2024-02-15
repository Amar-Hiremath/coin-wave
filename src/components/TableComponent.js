import React from "react";
import MiniChart from "./MiniChart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TableComponent = ({ error, response, coinM, serialNumber }) => {
  let sevenDaysData = [];
  let symbolWord = coinM.symbol.toUpperCase();
  let currentPrice = "$" + coinM.current_price.toLocaleString();
  let priceChange24h = Math.abs(coinM.price_change_percentage_24h);
  let formatedPriceChange24h = priceChange24h.toFixed(1);
  
  // const priceChangeSign = coinM.price_change_percentage_24h > 0 ? "+" : "-" ;

  if (coinM.sparkline_in_7d && coinM.sparkline_in_7d.price) {
    sevenDaysData = coinM.sparkline_in_7d.price;
  }

  return (
    <table className="HeroTable-MainContainer">
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>24h</th>
          <th>24h Volume</th>
          <th>Market Cap</th>
          <th>Last 7 Days</th>
        </tr>
      </thead>

      {/* serialnumber  */}
      <div className="Colm1-SerialNumber"> {serialNumber}</div>

      {/* image  */}
      <img
        className="Colm2-CoinImg"
        alt={`${coinM.id}`}
        src={`${coinM.image}`}
      />

      {/* Coin Name & Symbol  */}
      <div className="">
        <p>{coinM.name}</p>
        <p>{symbolWord}</p>
      </div>

      {/* price section */}
      <div className="">
        <div className="">{currentPrice}</div>
        <div>
          {coinM.price_change_percentage_24h > 0 ? (
            <ArrowDropUpIcon sx={{ color: "green" }} />
          ) : (
            <ArrowDropDownIcon sx={{ color: "red" }} />
          )}
          {formatedPriceChange24h + "%"}
        </div>
      </div>

      {/* Total Volume       */}
      <div className="">{"$" + coinM.total_volume.toLocaleString()}</div>

      {/* MarketCap  */}
      <div className="">{"$" + coinM.market_cap.toLocaleString()}</div>

      {/* Minichart      */}
      <div>
        <MiniChart data={sevenDaysData} />
      </div>
    </table>
  );
};

export default TableComponent;
