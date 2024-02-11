import React from "react";

function MiniChart({coinM }) {
  
  console.log(coinM)
  console.log(coinM.sparkline_in_7d.price)
  return (
    <>
      {coinM.sparkline_in_7d.price.map((price, index)=>{
        return(
        <div key ={index}>
        </div>)
      })}
      
    </>
  );
}
;
export default MiniChart;
