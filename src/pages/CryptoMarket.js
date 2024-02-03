import React from "react";
import useAxios from "../Hooks/useAxios";
import MarketCoin from "../components/MarketCoin"

const CryptoMarket = () => {
  const { response } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
  );  
  return (
    <section>
      <h1>Crypto Market</h1>      
      {response && response.map((coinM) => (<MarketCoin key={coinM.id} coinM={coinM} />))}
    </section>
  );
};

export default CryptoMarket;
