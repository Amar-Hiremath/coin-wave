import React from "react";
import Trending from "../components/Trending";
import Header from "../components/Header";
import "../styles/Home.css";
import LargestGainers from "../components/LargestGainers";
import TopLoosers from "../components/TopLoosers";
import useAxios from "../Hooks/useAxios";
import CryptoCurrencyTable from "../components/CryptoCurrencyTable";
import MiniChart from "../components/MiniChart";

function Home() {
  const { response, loading, error } = useAxios(
    "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en"
  );

  return (
    <div className="Home">
      <Header />
      <MiniChart />
      <div className="flex-box">
        <Trending />
        <LargestGainers response={response} loading={loading} error={error} />
        <TopLoosers response={response} loading={loading} error={error} />
      </div>
      <CryptoCurrencyTable
        response={response}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Home;
