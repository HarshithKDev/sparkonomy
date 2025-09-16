import React, { useState } from 'react';
import { ChevronDown, Edit, Bell } from 'lucide-react';

const InvoiceList = () => {
  const [isInvoiceExpanded, setIsInvoiceExpanded] = useState(true);
  const toggleInvoiceExpansion = () => setIsInvoiceExpanded(!isInvoiceExpanded);

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

  const getStatusStyle = (status) => {
    const style = {
      width: '112px', // w-28
      textAlign: 'center',
      padding: '0.25rem 0.75rem', // px-3 py-1
      borderRadius: '9999px', // rounded-full
      fontSize: '0.75rem', // text-xs
      fontWeight: '500', // font-medium
    };

    switch (status) {
      case 'Update Status':
        return { ...style, backgroundColor: '#8134af', color: 'white' };
      case 'Unpaid':
        return { ...style, backgroundColor: '#f2f2f2', color: 'black' };
      case 'Disputed':
        return { ...style, backgroundColor: '#ffb1b1', color: 'black' };
      case 'Paid':
        return { ...style, backgroundColor: '#9cefb8', color: 'black' };
      case 'Partially Paid':
        return { ...style, backgroundColor: '#fffae5', color: 'black' };
      case 'Overdue':
        return { ...style, backgroundColor: '#ffb1b1', color: 'black' };
      case 'Awaited':
        return { ...style, backgroundColor: '#fffae5', color: 'black' };
      case 'Draft':
        return { ...style, backgroundColor: '#f2f2f2', color: 'black' };
      default:
        return { ...style, backgroundColor: '#f2f2f2', color: 'black' };
    }
  };

  return (
    <div className="mt-8">
      <div className="bg-white rounded-2xl shadow-sm">
        <div
          className="p-6 border-b border-gray-100 flex items-center justify-between cursor-pointer"
          onClick={toggleInvoiceExpansion}
        >
          <h3 className="text-lg font-semibold text-gray-400">Your Invoices</h3>
          <ChevronDown className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${isInvoiceExpanded ? '' : '-rotate-180'}`} />
        </div>
        <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isInvoiceExpanded ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="divide-y divide-gray-100">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="p-4 lg:p-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{invoice.client}</h4>
                  <p className="text-sm text-gray-500">{invoice.amount}, Due: {invoice.date}</p>
                </div>
                <div className="flex items-center justify-end" style={{ width: '180px' }}>
                  <span style={getStatusStyle(invoice.status)}>
                    {invoice.status}
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