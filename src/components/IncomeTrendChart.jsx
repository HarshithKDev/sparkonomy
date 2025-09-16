import React from 'react';
import { Bar } from 'react-chartjs-2';
import { GitCommitHorizontal } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);

const IncomeTrendChart = () => {
  // Calculated data based on your invoices
  const monthData = [
    { month: 'Jan', income: 0, growth: 0 },
    { month: 'Feb', income: 2.9, growth: 0 },
    { month: 'Mar', income: 6.2, growth: 114 },
    { month: 'Apr', income: 2.2, growth: -65 },
    { month: 'May', income: 5.0, growth: 127 },
    { month: 'Jun', income: 4.1, growth: -18 },
  ];

  const data = {
    labels: monthData.map(d => d.month),
    datasets: [
      {
        type: 'line',
        label: 'momGrowth',
        data: monthData.map(d => d.growth),
        borderColor: '#974847',
        backgroundColor: '#974847',
        pointBackgroundColor: '#974847',
        pointBorderColor: '#974847',
        pointRadius: 0,
        yAxisID: 'y2',
        tension: 0.4,
      },
      {
        type: 'bar',
        label: 'Income',
        data: monthData.map(d => d.income),
        backgroundColor: '#A855F7',
        borderColor: '#A855F7',
        borderWidth: 1,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000, // 1-second animation
      easing: 'easeInOutQuart', // Smooth easing effect
    },
    scales: {
      y1: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: { drawOnChartArea: true, color: '#f3e9fe', tickColor: '#a743ef', tickLength: 8 },
        border: { color: '#a743ef' },
        min: 0,
        max: 8,
        ticks: { callback: value => `$${value}k`, stepSize: 2, color: '#6B7280', padding: 5 },
      },
      y2: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: { drawOnChartArea: false }, 
        border: { color: '#974847' },
        min: -100,
        max: 150,
        ticks: { callback: value => `${value}%`, stepSize: 50, color: '#6B7280', padding: 5 },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#6B7280' },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.dataset.type === 'line') {
              label += `${context.raw}%`;
            } else {
              label += `$${context.raw}k`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Income Trend</h3>
      <p className="text-xs text-gray-400 mb-6">Your monthly income and growth for the last 6 months</p>
      <div className="relative h-48 w-full">
        <Bar options={options} data={data} />
      </div>
      <div className="flex items-center justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#A855F7] mr-2"></div>
          <span className="text-xs text-gray-600">income</span>
        </div>
        <div className="flex items-center">
          <GitCommitHorizontal className="w-5 h-5 mr-2" style={{ color: '#974847' }} />
          <span className="text-xs text-gray-600">momGrowth</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeTrendChart;