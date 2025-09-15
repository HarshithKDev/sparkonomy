import React, { useState } from 'react';
import { ChevronLeft, Plus, ChevronDown, Edit, Bell } from 'lucide-react'; // Removed Calendar from import
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ReactLogo from './assets/profile.png';
import LogoPaw from './assets/logo.png';
import CrownImage from './assets/crown.png'; 
import GradientCalendarImage from './assets/calender-2.png'; // Assuming you save the gradient calendar image in assets
import GreyCalendarImage from './assets/calender-3.png'; // Assuming you save the grey calendar image in assets
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Removed GradientCalendar component

const InvoiceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3Months');
  const [isInvoiceExpanded, setIsInvoiceExpanded] = useState(true);

  const toggleInvoiceExpansion = () => {
    setIsInvoiceExpanded(!isInvoiceExpanded);
  };

  const invoices = [
    { id: 1, client: 'Client Name', amount: '€1,25,000', date: '2024-06-15', status: 'Update Status' },
    { id: 2, client: 'Client Name', amount: '€1,25,000', date: '2024-06-15', status: 'Unpaid' },
    { id: 3, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Disputed' },
    { id: 4, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Paid' },
    { id: 5, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Paid' },
    { id: 6, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Partially Paid' },
    { id: 7, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Paid' },
    { id: 8, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Overdue' },
    { id: 9, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Awaited' },
    { id: 10, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Draft' },
    { id: 11, client: 'Income Trend', amount: '€1,25,000', date: '2024-06-15', status: 'Paid' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Update Status': return 'bg-purple-500';
      case 'Unpaid': return 'bg-gray-400';
      case 'Disputed': return 'bg-red-400';
      case 'Paid': return 'bg-green-400';
      case 'Partially Paid': return 'bg-yellow-400';
      case 'Overdue': return 'bg-red-500';
      case 'Awaited': return 'bg-orange-400';
      case 'Draft': return 'bg-gray-300';
      default: return 'bg-gray-400';
    }
  };

  const monthData = [
    { month: 'Jan', income: 3, growth: -20 },
    { month: 'Feb', income: 4.5, growth: 30 },
    { month: 'Mar', income: 6, growth: 80 },
    { month: 'Apr', income: 2, growth: -60 },
    { month: 'May', income: 5.5, growth: 40 },
    { month: 'Jun', income: 4, growth: 10 },
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
    scales: {
      y1: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: {
          display: false,
          drawOnChartArea: false,
        },
        border: {
          color: '#a743ef',
        },
        min: 0,
        max: 8,
        ticks: {
          callback: value => `${value}k`,
          stepSize: 2,
          color: '#a743ef',
        },
      },
      y2: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
          color: '#E5E7EB',
        },
        border: {
          color: '#974847',
        },
        min: -100,
        max: 100,
        ticks: {
          callback: value => `${value}%`,
          stepSize: 50,
          color: '#974847',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#374151',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
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
              label += `${context.raw}k`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden px-4 py-3 flex items-center justify-between" style={{ backgroundColor: '#e7cde6' }}>
        <div className="flex items-center">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
          <span className="ml-2 text-gray-600 text-sm">Back</span>
        </div>
        <h1 className="font-semibold text-gray-900">Dashboard</h1>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img src={ReactLogo} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block px-8 py-4" style={{ backgroundColor: '#e7cde6' }}>
        <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <ChevronLeft className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-600 mr-6">Back</span>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src={ReactLogo} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create New Invoice Card */}
            <div className="bg-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-center">
                {/* Gradient Border for Plus Icon */}
                <div className="w-12 h-12 p-[3px] rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA]">
                  <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                    <Plus className="w-6 h-6 text-purple-600" strokeWidth={3} />
                  </div>
                </div>
                <h2 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent">Create New Invoice</h2>
                <p className="text-sm text-gray-400 mb-1">Start by creating and sending new invoice</p>
              </div>
            </div>
            
            {/* Moved text */}
            <p className="text-center text-xs text-[#8134AF]">Or upload an existing invoice and set payment reminder</p>

            {/* Time Period Selection (Mobile Only) */}
            <div className="lg:hidden bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-400">Time Period</h3>
                <p className="text-xs text-gray-400">dd:mm:yyyy - dd:mm:yyyy</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedPeriod('1Month')}
                  className={`px-5 py-2 rounded-full text-sm border transition-colors ${selectedPeriod === '1Month' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200'}`}
                >
                  <span className={selectedPeriod === '1Month' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>1 Month</span>
                </button>
                <button
                  onClick={() => setSelectedPeriod('3Months')}
                  className={`px-5 py-2 rounded-full text-sm border transition-colors ${selectedPeriod === '3Months' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200'}`}
                >
                  <span className={selectedPeriod === '3Months' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>3 Months</span>
                </button>
                <button
                  onClick={() => setSelectedPeriod('1Year')}
                  className={`px-5 py-2 rounded-full text-sm flex items-center border transition-colors ${selectedPeriod === '1Year' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200'}`}
                >
                  <span className={selectedPeriod === '1Year' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>1 Year</span> <img src={CrownImage} alt="Crown" className="w-4 h-4 ml-1" />
                </button>
              </div>
              <button 
                onClick={() => setSelectedPeriod('Custom')}
                className={`px-4 py-2 rounded-full text-sm flex items-center border transition-colors ${selectedPeriod === 'Custom' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-300'}`}
              >
                <img src={selectedPeriod === 'Custom' ? GradientCalendarImage : GreyCalendarImage} alt="Calendar" className="w-5 h-5 p-0 mr-2" />
                <span className={selectedPeriod === 'Custom' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>Custom</span>
              </button>
            </div>
            
            {/* Financial Summary sections on mobile */}
            <div className="lg:hidden space-y-6">
              {/* Total Earnings */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Total Earnings</h3>
                <p className="text-3xl font-semibold text-[#8134AF]">$1,25,000</p>
              </div>
              {/* Payment Status - Side by side for all screen sizes */}
              <div className="grid grid-cols-2 gap-4">
                {/* Payment Awaited */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Awaited</h4>
                  <p className="text-xl font-semibold text-[#8134AF]">$25,000</p>
                </div>
                {/* Payment Overdue */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Overdue</h4>
                  <p className="text-xl font-semibold text-[#8134AF]">$25,000</p>
                </div>
              </div>
            </div>

            {/* Income Trend Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Income Trend</h3>
              <p className="text-xs text-gray-400 mb-6">Your monthly income and growth for the last 6 months</p>
              
              <div className="relative h-48 w-full">
                <Bar options={options} data={data} />
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center mt-4 space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#A855F7] mr-2"></div>
                  <span className="text-xs text-gray-600">income</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#974847] mr-2"></div>
                  <span className="text-xs text-gray-600">momGrowth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Financial Summary (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-6">
            {/* Time Period Selection (Desktop Only) */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-400">Time Period</h3>
                <p className="text-xs text-gray-400">dd:mm:yyyy - dd:mm:yyyy</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedPeriod('1Month')}
                  className={`px-5 py-2 rounded-full text-sm border transition-colors ${selectedPeriod === '1Month' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200'}`}
                >
                  <span className={selectedPeriod === '1Month' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>1 Month</span>
                </button>
                <button
                  onClick={() => setSelectedPeriod('3Months')}
                  className={`px-5 py-2 rounded-full text-sm border transition-colors ${selectedPeriod === '3Months' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200'}`}
                >
                  <span className={selectedPeriod === '3Months' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>3 Months</span>
                </button>
                <button
                  onClick={() => setSelectedPeriod('1Year')}
                  className={`px-5 py-2 rounded-full text-sm flex items-center border transition-colors ${selectedPeriod === '1Year' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200'}`}
                >
                  <span className={selectedPeriod === '1Year' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>1 Year</span> <img src={CrownImage} alt="Crown" className="w-4 h-4 ml-1" />
                </button>
              </div>
              <button 
                onClick={() => setSelectedPeriod('Custom')}
                className={`px-4 py-2 rounded-full text-sm flex items-center border transition-colors ${selectedPeriod === 'Custom' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-300'}`}
              >
                <img src={selectedPeriod === 'Custom' ? GradientCalendarImage : GreyCalendarImage} alt="Calendar" className="w-5 h-5 p-0 mr-2" />
                <span className={selectedPeriod === 'Custom' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>Custom</span>
              </button>
            </div>
            
            <div className="flex-grow flex flex-col gap-6">
              {/* Total Earnings */}
              <div className="bg-white rounded-2xl p-6 shadow-sm flex-grow">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Total Earnings</h3>
                <p className="text-3xl font-semibold text-[#8134AF]">$1,25,000</p>
              </div>
              
              {/* Payment Status - Side by side for all screen sizes */}
              <div className="grid grid-cols-2 gap-4 flex-grow">
                {/* Payment Awaited */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Awaited</h4>
                  <p className="text-xl font-semibold text-[#8134AF]">$25,000</p>
                </div>
                {/* Payment Overdue */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Overdue</h4>
                  <p className="text-xl font-semibold text-[#8134AF]">$25,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices List */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-sm">
            <div
              className="p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer"
              onClick={toggleInvoiceExpansion}
            >
              <h3 className="text-lg font-semibold text-gray-400">Your Invoices</h3>
              <ChevronDown className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isInvoiceExpanded ? '' : '-rotate-180'}`} />
            </div>
            
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isInvoiceExpanded ? 'max-h-screen' : 'max-h-0'}`}
            >
              <div className="divide-y divide-gray-100">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="p-4 lg:p-6 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">{invoice.client}</h4>
                      <p className="text-sm text-gray-500">{invoice.amount}, Due: {invoice.date}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                      
                      {(invoice.status === 'Overdue' || invoice.status === 'Awaited') && (
                        <Bell className="w-4 h-4 text-gray-400" />
                      )}
                      
                      {invoice.status === 'Draft' && (
                        <Edit className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center">
            <img src={LogoPaw} alt="Sparkonomy Paw Logo" className="inline-block h-4 w-max mx-1" />
          </p>
          <p className="text-xs text-gray-400 mt-1">sparking the creator economy</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDashboard;