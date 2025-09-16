/**
 * A component that displays a summary of financial information, including total earnings,
 * payments awaited, and overdue payments.
 *
 * @returns {JSX.Element} The rendered FinancialSummary component.
 */
const FinancialSummary = () => (
  <div className="flex-grow flex flex-col gap-6">

    {/* Displays the total earnings */}
    <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col justify-center items-center transition-shadow hover:shadow-md">
      <h3 className="text-sm font-medium text-gray-400 mb-2">Total Earnings</h3>
      <p className="text-3xl font-semibold text-[#8134AF]">$19,100</p>
    </div>

    {/* Container for the two smaller summary cards */}
    <div className="flex-1 flex gap-4">
      {/* Displays the total amount of payments awaited */}
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center flex-1 transition-shadow hover:shadow-md">
        <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Awaited</h4>
        <p className="text-xl font-semibold text-[#8134AF]">$6,950</p>
      </div>
      {/* Displays the total amount of overdue payments */}
      <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center flex-1 transition-shadow hover:shadow-md">
        <h4 className="text-sm font-medium text-gray-400 mb-1">Payment Overdue</h4>
        <p className="text-xl font-semibold text-[#8134AF]">$1,500</p>
      </div>
    </div>
  </div>
);

export default FinancialSummary;