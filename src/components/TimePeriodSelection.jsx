import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CrownImage from '../assets/crown.webp';
import GradientCalendarImage from '../assets/gradientcal.webp';
import GreyCalendarImage from '../assets/graycal.webp';

/**
 * A component that allows the user to select a time period for filtering data.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.selectedPeriod - The currently selected time period.
 * @param {Function} props.setSelectedPeriod - A function to update the selected time period.
 * @returns {JSX.Element} The rendered TimePeriodSelection component.
 */
const TimePeriodSelection = ({ selectedPeriod, setSelectedPeriod }) => {
  const [dateRange, setDateRange] = useState('dd-mm-yyyy - dd-mm-yyyy');
  const [customStartDate, setCustomStartDate] = useState(null);
  const [customEndDate, setCustomEndDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  /**
   * Formats a date object into a string with the format 'dd-mm-yyyy'.
   *
   * @param {Date} date - The date to format.
   * @returns {string} The formatted date string.
   */
  const format = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Updates the date range display when the selected period or custom dates change.
  useEffect(() => {
    const today = new Date();
    let startDate;

    if (selectedPeriod === 'Custom') {
      if (customStartDate && customEndDate) {
        setDateRange(`${format(customStartDate)} - ${format(customEndDate)}`);
      } else {
        setDateRange('Select a date range');
      }
      return;
    }

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
    setDateRange(`${format(startDate)} - ${format(endDate)}`);
  }, [selectedPeriod, customStartDate, customEndDate]);

  /**
   * Handles changes to the custom date range.
   *
   * @param {Array<Date>} dates - An array containing the start and end dates.
   */
  const handleCustomDateChange = (dates) => {
    const [start, end] = dates;
    setCustomStartDate(start);
    setCustomEndDate(end);
    if (start && end) {
      setIsDatePickerOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-400">Time Period</h3>
        <p className="text-xs text-gray-400">{dateRange}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedPeriod('1Month')}
            className={`flex-1 px-5 py-2 rounded-full text-sm border transition-colors ${selectedPeriod === '1Month' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-100'}`}
          >
            <span className={selectedPeriod === '1Month' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>1 Month</span>
          </button>
          <button
            onClick={() => setSelectedPeriod('3Months')}
            className={`flex-1 px-5 py-2 rounded-full text-sm border transition-colors ${selectedPeriod === '3Months' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-100'}`}
          >
            <span className={selectedPeriod === '3Months' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>3 Months</span>
          </button>
          <button
            onClick={() => setSelectedPeriod('1Year')}
            className={`flex-1 px-5 py-2 rounded-full text-sm flex items-center justify-center border transition-colors ${selectedPeriod === '1Year' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-100'}`}
          >
            <span className={selectedPeriod === '1Year' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>1 Year</span> <img src={CrownImage} alt="Crown" className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <button
              onClick={() => {
                setSelectedPeriod('Custom');
                setIsDatePickerOpen(!isDatePickerOpen);
              }}
              className={`w-full px-5 py-2 rounded-full text-sm flex items-center justify-center border transition-colors ${selectedPeriod === 'Custom' ? 'border-[#f3e9ff] bg-[#fbf5fc]' : 'bg-white text-gray-400 border-gray-300 hover:bg-gray-100'}`}
            >
              <img src={selectedPeriod === 'Custom' ? GradientCalendarImage : GreyCalendarImage} alt="Calendar" className="w-5 h-5 p-0 mr-2" />
              <span className={selectedPeriod === 'Custom' ? 'bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent' : 'text-gray-400'}>Custom</span>
            </button>
            {isDatePickerOpen && (
              <div className="absolute top-full mt-2 z-10">
                <DatePicker
                  selected={customStartDate}
                  onChange={handleCustomDateChange}
                  startDate={customStartDate}
                  endDate={customEndDate}
                  selectsRange
                  inline
                  onClickOutside={() => setIsDatePickerOpen(false)}
                />
              </div>
            )}
          </div>
          {/* Spacers to align the custom button */}
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default TimePeriodSelection;