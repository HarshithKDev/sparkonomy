import React, { useState, useEffect } from 'react';
import CrownImage from '../assets/crown.png';
import GradientCalendarImage from '../assets/calender-2.png';
import GreyCalendarImage from '../assets/calender-3.png';

const TimePeriodSelection = ({ selectedPeriod, setSelectedPeriod }) => {
  const [dateRange, setDateRange] = useState('dd-mm-yyyy - dd-mm-yyyy');

  useEffect(() => {
    const today = new Date();
    let startDate;

    switch (selectedPeriod) {
      case '1Month':
        startDate = new Date(today.getFullYear(), 5, 1); // June 1st
        break;
      case '3Months':
        startDate = new Date(today.getFullYear(), 3, 1); // April 1st
        break;
      case '1Year':
        startDate = new Date(today.getFullYear(), 0, 1); // January 1st
        break;
      default:
        setDateRange('dd-mm-yyyy - dd-mm-yyyy');
        return;
    }

    const endDate = new Date(today.getFullYear(), 5, 30); // June 30th
    
    const format = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };

    setDateRange(`${format(startDate)} - ${format(endDate)}`);

  }, [selectedPeriod]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-400">Time Period</h3>
        <p className="text-xs text-gray-400">{dateRange}</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
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
          className={`px-5 py-2 rounded-full text-sm flex items-center justify-center border transition-colors ${selectedPeriod === '1Year' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200'}`}
        >
          <span className={selectedPeriod === '1Year' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>1 Year</span> <img src={CrownImage} alt="Crown" className="w-4 h-4 ml-1" />
        </button>
        <button
          onClick={() => setSelectedPeriod('Custom')}
          className={`px-5 py-2 rounded-full text-sm flex items-center justify-center border transition-colors ${selectedPeriod === 'Custom' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-300'}`}
        >
          <img src={selectedPeriod === 'Custom' ? GradientCalendarImage : GreyCalendarImage} alt="Calendar" className="w-5 h-5 p-0 mr-2" />
          <span className={selectedPeriod === 'Custom' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>Custom</span>
        </button>
      </div>
    </div>
  );
};

export default TimePeriodSelection;