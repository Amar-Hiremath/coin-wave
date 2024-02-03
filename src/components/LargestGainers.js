import React from "react";
import { useState, useEffect } from "react";
import CoinLargest from "./CoinLargest";
import "../styles/LargestGainers.css";

function LargestGainers({ response, loading, error }) {
  // asigining variables

  // useState
  const [LargestCoins, setLargestCoins] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState(null);

  //click handler
  function handleCoinClick(coinId) {
    setSelectedCoinId(coinId);
  }

  useEffect(() => {
    const fetchingSortedCoins = async () => {
      if (response) {
        const responseCopy = [...response] // sort method was modifiying the original array
        const sortedCoins = await responseCopy.sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        console.log(sortedCoins);
        const topSixGainers = sortedCoins.slice(0, 6);
        setLargestCoins(topSixGainers);

        if (topSixGainers && topSixGainers.length > 0) {
          setSelectedCoinId(topSixGainers[0].id);
          console.log("top six gainers: ", topSixGainers);
        }
      }
    };
    fetchingSortedCoins();
  }, [response, loading]);
  

  return (
    <div className="largestGainers-mainContainer">
      <h4>Largest Gainers</h4>
      <div id="trending-card-flexContainer">
        {LargestCoins &&
          LargestCoins.map((coinL) => (
            <div
              className={`card-container ${
                selectedCoinId !== coinL.id ? "unpickedCoinId" : ""
              } ${selectedCoinId === coinL.id ? "selected-coin" : ""}`}
              key={coinL.id}
              onClick={() => handleCoinClick(coinL.id)}
            >
              <CoinLargest coinL={coinL} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default LargestGainers;
