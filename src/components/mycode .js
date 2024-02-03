import React, { useEffect, useState } from "react";
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

const HeroChart = ({ coinId }) => {
  const { response, loading, error } = useAxios(
    `coins/${coinId}/market_chart?vs_currency=usd&days=7`
  );

  const [coinChartData, setCoinChartData] = useState([]);

  useEffect(() => {
    if (!loading && response) {
      const chartData = response.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));
      setCoinChartData(chartData);
    }
  }, [loading, response]);

  if (loading || !response) {
    // Display loading message or handle the case when response is not available yet
    return <h4>Loading...</h4>;
  }

  if (error) {
    // Display error message
    return <div>Error fetching chart data: {error.message}</div>;
  }

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMMDD")),
    datasets: [
      {
        fill: true,
        label: coinId,
        data: coinChartData.map((val) => val.y),
        borderColor: "rgb(53, 162,235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default HeroChart;
