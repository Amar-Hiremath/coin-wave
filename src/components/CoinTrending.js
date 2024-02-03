import React from "react";
import { Link } from "react-router-dom";
import "../styles/CoinTrending.css";

function CoinTrending({ coinT }) {  
  return (
    <>
      <div className="flexContainerMain">
        <img
          src={coinT.item.small}
          alt={coinT.item.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <div className="flexboxright">
          {coinT.item.name}
          <Link to={`/coins/${coinT.item.coin_id}`}>
            <div className="item-symbol">{coinT.item.symbol}</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CoinTrending;
