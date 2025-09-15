import React from 'react';

const FinancialSummary = () => (
  <div className="flex-grow flex flex-col gap-6">
    
    {/* Total Earnings Card */}
    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col">
      <h3 className="text-sm font-medium text-gray-400 mb-2">Total Earnings</h3>
      {/* The `mt-auto` class has been removed from here */}
      <p className="text-3xl font-semibold text-[#8134AF]">$1,25,000</p>
    </div>
    
    {/* Container for the Bottom Two Cards */}
    <div className="flex-1 grid grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Awaited</h4>
        {/* And from here... */}
        <p className="text-xl font-semibold text-[#8134AF]">$25,000</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
        <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Overdue</h4>
        {/* ...and here. */}
        <p className="text-xl font-semibold text-[#8134AF]">$25,000</p>
      </div>
    </div>
  </div>
);

export default FinancialSummary;