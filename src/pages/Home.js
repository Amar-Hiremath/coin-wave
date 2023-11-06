import React from 'react';
import Carousel from '../components/Carousel';
import TradingViewWidget from '../components/HeroChart';


function Home() {
  return (
    <div>
      <Carousel/>
      <TradingViewWidget/>
    </div>
  )
}

export default Home