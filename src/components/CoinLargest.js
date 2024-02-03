import React from "react";

function CoinLargest({ coinL }) {
  return (
    <>
      <div className="flexContainerMain">
        <img
          src={coinL.image}
          alt={coinL.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <div className="flexboxright">
          {coinL.name}
          <div className="item-symbol">{coinL.symbol}</div>
        </div>
        <div className = "day-percentage-change">{coinL.price_change_percentage_24h}%</div>
      </div>
    </>
  );
}

export default CoinLargest;
