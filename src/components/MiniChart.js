import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
const performanceColor = (data) => {
  // Check performance criteria based on your specific logic
  // For example, if the last data point is greater than the first data point, consider it performing well
  const isPerformingWell = data[data.length - 1] > data[0];
  // Return green if performing well, otherwise red
  return isPerformingWell ? 'rgb(0, 128, 0)' : 'rgb(255, 0, 0)';
};

const MiniChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    const labels = Array.from({ length: 168 }, (_, i) => {
      const day = Math.floor(i / 24) + 1;
      const hour = i % 24;
      return `Day ${day} - Hour ${hour}`;
    });
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '',
          data: data,
          borderColor: performanceColor(data),
          borderWidth: 0.7,
          tension: 0.1,
          fill: false,
          pointRadius: 0
        }],
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
        }
      },
    });

    // Cleanup function
    return () => {
      myChart.destroy();
    };
  }, [data]); // Re-render the chart when data changes

  return (
    <div>
      <canvas ref={chartRef} width="150" height="75"></canvas>
    </div>
  );
};

export default MiniChart;
