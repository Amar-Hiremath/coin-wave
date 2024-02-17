import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// CSS styles for the MiniChart component
const chartStyles = {
  height: "100%", // Set the height of the chart container to 100% of its parent's height
  width: "100%", // Set the width of the chart container to 100% of its parent's width
};

const performanceColor = (data) => {
  const isPerformingWell = data[data.length - 1] > data[0];
  return isPerformingWell ? "rgb(14, 178, 14)" : "rgb(255, 0, 0)";
};

const MiniChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const labels = Array.from({ length: 168 }, (_, i) => {
        const day = Math.floor(i / 24) + 1;
        const hour = i % 24;
        return `Day ${day} - Hour ${hour}`;
      });
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "",
              data: data,
              borderColor: performanceColor(data),
              borderWidth: 0.8,
              tension: 0.2,
              fill: false,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false, // Disable the tooltip
            },
          },
        },
      });

      // Cleanup function
      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return (
    <div className="MiniChart">
      <canvas style={chartStyles} ref={chartRef}></canvas>
    </div>
  );
};

export default MiniChart;
