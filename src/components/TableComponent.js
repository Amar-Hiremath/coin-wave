import "../styles/CapRanking.css";

const TableComponent = ({ coinM , serialNumber}) => {  

  const priceChangeSign = coinM.price_change_percentage_24h > 0 ? "+" : "-";
  return (
    <div className="cap-ranking-mainContainer">
      <div className="capRanking-div1">
      {serialNumber}
        <img className="CRimg" alt={`${coinM.id}`} src={`${coinM.image}`} />

        <div className="capRanking-flexbox-div1">
          <p>{coinM.name}</p>
        </div>
      </div>

      <div className="capRanking-div2">
        {coinM.market_cap}
        <p className="usdFont">USD</p>
      </div>

      <div className="capRanking-div3">
        <div className="capRanking-div3-flexbox1">
          {coinM.current_price}
          <p className="usdFont">USD</p>
        </div>
        <div>
          {priceChangeSign}
          
          {Math.abs(coinM.price_change_percentage_24h)}%
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
