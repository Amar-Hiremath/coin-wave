import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MiniChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: data.length }, (_, i) => `Day ${i + 1}`), // Dynamic labels based on data length
        datasets: [{
          label: '',
          data: data,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          fill: false
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
      },
    });

    // Cleanup function
    return () => {
      myChart.destroy();
    };
  }, [data]); // Re-render the chart when data changes

  return (
    <div>
      <canvas ref={chartRef} width="600" height="300"></canvas>
    </div>
  );
};

export default MiniChart;
