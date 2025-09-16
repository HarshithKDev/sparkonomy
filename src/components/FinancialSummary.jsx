import React from 'react';

const FinancialSummary = () => (
  <div className="flex-grow flex flex-col gap-6">
    
    {/* Total Earnings Card */}
    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col justify-center items-center">
      <h3 className="text-sm font-medium text-gray-400 mb-2">Total Earnings</h3>
      <p className="text-3xl font-semibold text-[#8134AF]">$19,100</p>
    </div>
    
    {/* Container for the Bottom Two Cards */}
    <div className="flex-1 flex gap-4">
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center flex-1">
        <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Awaited</h4>
        <p className="text-xl font-semibold text-[#8134AF]">$6,950</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center flex-1">
        <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Overdue</h4>
        <p className="text-xl font-semibold text-[#8134AF]">$1,500</p>
      </div>
    </div>
  </div>
);

export default FinancialSummary;