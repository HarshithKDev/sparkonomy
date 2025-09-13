import React, { useState } from 'react';
import { ChevronLeft, Plus, ChevronDown, Edit, Bell, Crown } from 'lucide-react';

const InvoiceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3Months');
  
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
          <span className="ml-2 text-gray-600 text-sm">Back</span>
        </div>
        <h1 className="font-semibold text-gray-900">Dashboard</h1>
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">A</span>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block bg-white px-8 py-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <ChevronLeft className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-600 mr-6">Back</span>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">A</span>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create New Invoice Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-purple-600 mb-2">Create New Invoice</h2>
                <p className="text-sm text-gray-500 mb-1">Start by creating and sending new invoice</p>
                <p className="text-xs text-gray-400">Or upload an existing invoice and set payment reminder</p>
              </div>
            </div>

            {/* Time Period Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Time Period</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <button 
                  onClick={() => setSelectedPeriod('1Month')}
                  className={`px-4 py-2 rounded-full text-sm ${selectedPeriod === '1Month' ? 'bg-gray-200 text-gray-800' : 'text-gray-600'}`}
                >
                  1 Month
                </button>
                <button 
                  onClick={() => setSelectedPeriod('3Months')}
                  className={`px-4 py-2 rounded-full text-sm ${selectedPeriod === '3Months' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
                >
                  3 Months
                </button>
                <button 
                  onClick={() => setSelectedPeriod('1Year')}
                  className={`px-4 py-2 rounded-full text-sm flex items-center ${selectedPeriod === '1Year' ? 'bg-gray-200 text-gray-800' : 'text-gray-600'}`}
                >
                  1 Year <Crown className="w-3 h-3 ml-1 text-yellow-500" />
                </button>
              </div>
              <button className="flex items-center text-sm text-gray-600">
                <span className="mr-2">📅</span>
                Custom
              </button>
            </div>

            {/* Income Trend Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Income Trend</h3>
              <p className="text-xs text-gray-400 mb-6">Your monthly income and growth for the last 6 months</p>
              
              {/* Chart */}
              <div className="relative h-48">
                <div className="absolute right-0 h-full flex flex-col justify-between text-xs text-gray-400">
                  <span>100%</span>
                  <span>50%</span>
                  <span>0%</span>
                  <span>-50%</span>
                  <span>-100%</span>
                </div>
                
                <div className="mr-12 h-full flex items-end justify-between">
                  {monthData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative mb-2" style={{ height: '120px' }}>
                        {/* Income bar */}
                        <div 
                          className="w-8 bg-purple-500 rounded-t absolute bottom-0"
                          style={{ height: `${(data.income / 6) * 100}%` }}
                        ></div>
                        {/* Growth line point */}
                        <div 
                          className="absolute w-2 h-2 bg-red-500 rounded-full -right-1"
                          style={{ bottom: `${50 + data.growth * 0.6}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{data.month}</span>
                    </div>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="flex items-center justify-center mt-4 space-x-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
                    <span className="text-xs text-gray-600">Income</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">mom Growth</span>
                  </div>
                </div>
              </div>
              
              {/* Income labels */}
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>$0k</span>
                <span>$2k</span>
                <span>$4k</span>
                <span>$6k</span>
                <span>$8k</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            {/* Total Earnings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Earnings</h3>
              <p className="text-3xl font-bold text-gray-900">$1,25,000</p>
            </div>

            {/* Payment Status */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-1">Payment Awaited</h4>
                  <p className="text-xl font-semibold text-gray-900">$25,000</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-1">Payment Overdue</h4>
                  <p className="text-xl font-semibold text-gray-900">$25,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices List */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Your Invoices</h3>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
            
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

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            <span className="font-medium">Sparks</span>Penny
          </p>
          <p className="text-xs text-gray-300 mt-1">Powering the modern economy</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDashboard;