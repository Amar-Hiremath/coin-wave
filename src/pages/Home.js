import React from "react";
// import Trending from "../components/Trending";
import Header from "../components/Header";
import "../styles/Home.css";
// import LargestGainers from "../components/LargestGainers";
// import TopLoosers from "../components/TopLoosers";
import useAxios from "../Hooks/useAxios";
import CryptoCurrencyTable from "../components/CryptoCurrencyTable";

function Home() {
  const { response, loading, error } = useAxios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h&locale=en"
  );

  return (
    <div className="Home">
      <Header />
      {/* <div className="flex-box">
        <Trending />
        <LargestGainers response={response} loading={loading} error={error} />
        <TopLoosers response={response} loading={loading} error={error} />
      </div> */}
      <div className="CryptoCurrencyTable-Component">
        <CryptoCurrencyTable
          response={response}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default Home;
