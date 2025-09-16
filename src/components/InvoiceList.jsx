import React, { useState } from 'react';
import { ChevronDown, Edit, Bell } from 'lucide-react';

const InvoiceList = () => {
  const [isInvoiceExpanded, setIsInvoiceExpanded] = useState(true);
  const toggleInvoiceExpansion = () => setIsInvoiceExpanded(!isInvoiceExpanded);

  const invoices = [
    { id: 1, client: 'Innovate LLC', amount: '$2,500', date: '22-06-2024', status: 'Update Status' },
    { id: 2, client: 'Quantum Solutions', amount: '$3,200', date: '28-06-2024', status: 'Unpaid' },
    { id: 3, client: 'Synergy Corp', amount: '$1,800', date: '15-06-2024', status: 'Disputed' },
    { id: 4, client: 'Apex Industries', amount: '$3,800', date: '30-05-2024', status: 'Paid' },
    { id: 5, client: 'Momentum Tech', amount: '$4,200', date: '05-06-2024', status: 'Partially Paid' },
    { id: 6, client: 'Zenith Group', amount: '$2,200', date: '20-04-2024', status: 'Paid' },
    { id: 7, client: 'Phoenix Digital', amount: '$1,500', date: '10-05-2024', status: 'Overdue' },
    { id: 8, client: 'Vortex Inc.', amount: '$3,750', date: '25-06-2024', status: 'Awaited' },
    { id: 9, client: 'Catalyst Co.', amount: '$850', date: '20-06-2024', status: 'Draft' },
    { id: 10, client: 'Orion Systems', amount: '$4,500', date: '18-03-2024', status: 'Paid' },
    { id: 11, client: 'Nova Creative', amount: '$2,900', date: '25-02-2024', status: 'Paid' },
    { id: 12, client: 'Pioneer Labs', amount: '$1,500', date: '25-01-2024', status: 'Paid'},
  ];

  const getStatusStyle = (status) => {
    const style = {
      minWidth: '112px',
      textAlign: 'center',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
    };

    switch (status) {
      case 'Update Status':
        return { ...style, backgroundColor: '#8134af', color: 'white' };
      case 'Unpaid':
        return { ...style, backgroundColor: '#f2f2f2', color: '#6F6F6F' };
      case 'Disputed':
        return { ...style, backgroundColor: '#ffdde2', color: '#C0392B' };
      case 'Paid':
        return { ...style, backgroundColor: '#dcfce7', color: '#1E8449' };
      case 'Partially Paid':
        return { ...style, backgroundColor: '#fef3c7', color: '#B45309' };
      case 'Overdue':
        return { ...style, backgroundColor: '#ffdde2', color: '#C0392B' };
      case 'Awaited':
        return { ...style, backgroundColor: '#fef3c7', color: '#B45309' };
      case 'Draft':
        return { ...style, backgroundColor: '#f2f2f2', color: '#6F6F6F' };
      default:
        return { ...style, backgroundColor: '#f2f2f2', color: '#6F6F6F' };
    }
  };

  return (
    <div className="mt-8">
      <style>
        {`
          @keyframes bounce-arrow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          .animate-bounce-arrow {
            animation: bounce-arrow 1s infinite;
          }
        `}
      </style>
      <div className="bg-white rounded-2xl shadow-sm">
        <div
          className="px-4 lg:px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between cursor-pointer"
          onClick={toggleInvoiceExpansion}
        >
          <h3 className="text-lg font-semibold text-gray-400">Your Invoices</h3>
          <ChevronDown className={`w-5 h-5 text-purple-600 transform transition-transform duration-300 ${isInvoiceExpanded ? '-rotate-180' : 'animate-bounce-arrow'}`} />
        </div>
        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isInvoiceExpanded ? 'max-h-[100rem]' : 'max-h-0'}`}>
          <div className="divide-y divide-gray-100">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="p-4 lg:p-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{invoice.client}</h4>
                  <p className="text-sm text-gray-500">{invoice.amount}</p>
                  <p className="text-sm text-gray-500">Due: {invoice.date}</p>
                </div>
                <div className="flex items-center justify-end" style={{ width: '180px' }}>
                  <span style={getStatusStyle(invoice.status)} className="flex items-center justify-center whitespace-nowrap">
                    {invoice.status}
                    {invoice.status === 'Update Status' && <ChevronDown className="w-4 h-4 ml-1" />}
                  </span>
                  <div className="w-8 text-right">
                    {(invoice.status === 'Overdue' || invoice.status === 'Awaited') && <Bell className="w-4 h-4 text-gray-400 inline-block" />}
                    {invoice.status === 'Draft' && <Edit className="w-4 h-4 text-gray-400 inline-block" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;