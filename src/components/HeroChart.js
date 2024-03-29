import React, { useState, useEffect } from "react";
import useAxios from "../Hooks/useAxios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import moment from "moment/moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function HeroChart({ coinId }) {
  // Axios fetching
  const { response, loading, error } = useAxios(
    `coins/${coinId}/market_chart?vs_currency=usd&days=7`
  );

  //useState hook
  const [coinChartData, setCoinChartData] = useState([]);

  //useEffect hook 1
  //fetching trending coin api's

  //useEffect hook 2
  useEffect(() => {
    if (!loading && response) {
      const chartData = response.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));
      setCoinChartData(chartData);
    }
  }, [response, loading]);

  if (loading) {
    return <h4>Chart Loading...</h4>;
  }

  if (error) {
    return <h4>Error Fetching Data : {error.message}</h4>;
  }

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMMDD")),
    datasets: [
      {
        fill: false,
        label: coinId,
        data: coinChartData.map((val) => val.y),
        borderColor: "green",
        backgroundColor: "rgba(0, 225, 0, 0.3)",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data}></Line>
    </>
  );
}

export default HeroChart;
