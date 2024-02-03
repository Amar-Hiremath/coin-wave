import React from "react";
import "../styles/CryptoMarketCapRanking.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import TableComponent from "./TableComponent";

const CryptoCurrencyTable = ({ response, loading, error }) => {
  // Logic to filter and display top 6 coins by market cap
  let topCoins = [];
  if (response) {
    const sortedCoins = response.sort((a, b) => b.market_cap - a.market_cap);
    topCoins = sortedCoins;
    console.log(response);
  }
  return (
    <>
      <h2>
        <Link className="cmcr-heading" to="/crypto-market">
          <p>Crypto market cap ranking </p>
          <KeyboardDoubleArrowRightIcon className="arrow" fontSize="large" />
        </Link>
      </h2>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <section>
          {topCoins.map((coinM, index) => (
            <TableComponent
              key={coinM.id}
              coinM={coinM}
              serialNumber={index + 1}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default CryptoCurrencyTable;
