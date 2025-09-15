import React, { useState } from 'react';
import Header from './components/Header';
import CreateInvoiceCard from './components/CreateInvoiceCard';
import TimePeriodSelection from './components/TimePeriodSelection';
import FinancialSummary from './components/FinancialSummary';
import IncomeTrendChart from './components/IncomeTrendChart';
import InvoiceList from './components/InvoiceList';
import Footer from './components/Footer';

const InvoiceDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3Months');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <CreateInvoiceCard />
            <p className="text-center text-xs text-[#8134AF]">Or upload an existing invoice and set payment reminder</p>
            {/* Mobile-only sections */}
            <div className="lg:hidden">
              <TimePeriodSelection selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
            </div>
            <div className="lg:hidden space-y-6">
              <FinancialSummary />
            </div>
            <IncomeTrendChart />
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-6">
            <TimePeriodSelection selectedPeriod={selectedPeriod} setSelectedPeriod={setSelectedPeriod} />
            <FinancialSummary />
          </div>
        </div>

        <InvoiceList />
        <Footer />
      </div>
    </div>
  );
};

export default InvoiceDashboard;