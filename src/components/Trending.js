import React, { useState, useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import CoinTrending from "./CoinTrending";
// import HeroChart from "./HeroChart";
import "../styles/Trending.css";

const Trending = () => {
  const { response, loading } = useAxios("search/trending");
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  // let trendingCoinResponse = response
  if (response) {
  }
  
  const handleCoinClick = (coinId) => {        
    setSelectedCoinId(coinId);
  };  
  
  useEffect(() => {
    if (response && response.coins.length > 0) {
      setSelectedCoinId(response.coins[0].item.id);
    }
  }, [response]);

  return (
    <>
      <div className="main-Trending-container">
        <h4>Trending Coins</h4>
        <div id="trending-card-flexContainer">
          {response &&
            response.coins.map((coinT) => (
              <div
                className={`card-container ${
                  selectedCoinId !== coinT.item.id ? "unpickedCoinId" : ""
                } ${selectedCoinId === coinT.item.id ? "selected-coin" : ""}`}
                key={coinT.item.id}
                onClick={()=>handleCoinClick(coinT.item.id)}
              >
                <CoinTrending coinT={coinT} />
              </div>
            ))}
        </div>
      </div>
      {/* <div className="heroChart">          
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <>{selectedCoinId && <HeroChart  trendingCoinResponse = {trendingCoinResponse} coinId={selectedCoinId} />}</>
        )}
      </div> */}
    </>
  );
};

export default Trending;