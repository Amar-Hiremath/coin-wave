import React, { useEffect, useState } from "react";
// import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
// import { CoinsByMarketCap } from "../components/config/api";
import {CoinData} from "../components/config/data"
import "../styles/Carousel.css";
const Carousel = () => {
  // useState
  const [trending, setTrending] = useState([]);

  // fetch function
  const fetchCoins =  () => {
    try {
      const response = (CoinData());
      const first15Coins = response.slice(0, 15); // Get the first 15 coins
      setTrending(first15Coins); // Set the state with the first 15 coins
    } catch (error) {
      console.error(error);
    }
  };

  console.log(trending);
  // useEffect
  useEffect(() => {
    fetchCoins();
  }, []);

  const items = trending.map((coin) => (
    <div className="carouselItem" >
      <Link className="flexContainerMain" to={`/coins/${coin.id}`}>
        <img
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <div className="flexboxright">
          <div>{coin.name}</div> 
          <div className="miniFlexBox">
            <div>{coin.current_price} INR</div>
            {coin.price_change_percentage_24h > 0
              ? `+${coin.price_change_percentage_24h.toFixed(2)}%`
              : `${coin.price_change_percentage_24h.toFixed(2)}%`}
          </div>
        </div>
      </Link>
    </div>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        animationDuration={500}
        disableButtonsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
