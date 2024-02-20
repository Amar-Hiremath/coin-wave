import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MiniChart from "./MiniChart";
import "../styles/CryptoCurrencyTable.css";

const CryptoCurrencyTable = ({ response, loading, error }) => {
  let topCoins = []; // Define topCoins array

  if (response) {
    // Sort response if available
    const sortedCoins = response.sort((a, b) => b.market_cap - a.market_cap);
    topCoins = sortedCoins;
  }

  return (
    <>
      <h2>
        <div className="heroTable-heading">
          Crypto market cap ranking
          <KeyboardDoubleArrowRightIcon className="arrow" fontSize="large" />
        </div>
      </h2>

      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div className="CryptoCurrencyTable-container">
          <table className="HeroTable-MainContainer">
            <thead>
              <tr>
                <th>#</th>
                <th>
                  <p className="HeroTable-headingColumn2">Coin</p>
                </th>
                <th>Price</th>
                <th>24h</th>
                <th>24h Volume</th>
                <th>Market Cap</th>
                <th>Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {topCoins.map((coinM, index) => {
                const currentPrice = `$${coinM.current_price.toLocaleString()}`;
                const priceChange24h = Math.abs(
                  coinM.price_change_percentage_24h
                );
                const formattedPriceChange24h = priceChange24h.toFixed(1);

                return (
                  <tr key={index} className="rows">
                    <td className="Col1-SerialNumber">{index + 1}</td>

                    <td className="Col2-img-name-symbol">
                      <img
                        className="Colm2-CoinImg"
                        alt={`${coinM.id}`}
                        src={`${coinM.image}`}
                      />
                      <div className="column2-name-symbol">
                        <p className="column2-coinName">{coinM.name}</p>
                        <p>{coinM.symbol.toUpperCase()}</p>
                      </div>
                    </td>

                    <td>{currentPrice}</td>
                    <td>
                      <div className="flexBox-24h">
                        {coinM.price_change_percentage_24h > 0 ? (
                          <ArrowDropUpIcon sx={{ color: "green" }} />
                        ) : (
                          <ArrowDropDownIcon sx={{ color: "red" }} />
                        )}
                        <div
                          className={
                            coinM.price_change_percentage_24h > 0
                              ? "greenColor-class"
                              : "redColor-class"
                          }
                        >
                          {formattedPriceChange24h + "%"}
                        </div>
                      </div>
                    </td>
                    <td>{"$" + coinM.total_volume.toLocaleString()}</td>
                    <td>{"$" + coinM.market_cap.toLocaleString()}</td>
                    {/* MiniChart */}
                    <td>
                      <MiniChart data={coinM.sparkline_in_7d?.price} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CryptoCurrencyTable;
