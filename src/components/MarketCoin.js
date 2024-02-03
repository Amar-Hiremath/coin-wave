import "../styles/MarketCoin.css";

const MarketCoin = ({ coinM }) => {
  console.log(coinM)
  
  return (
    <div className="coin-Container">
      <p>{coinM.name}</p>
      <img alt={`${coinM.id}`} src={`${coinM.image}`} />{" "}
      <p>$ {coinM.current_price}</p>
      <p>{coinM.price_change_percentage_24h}%</p>
      <p>Market Cap : {coinM.market_cap}</p>
    </div>
  );
};

export default MarketCoin;
