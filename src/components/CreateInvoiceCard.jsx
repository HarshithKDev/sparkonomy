import { Plus } from 'lucide-react';

/**
 * A card component for creating a new invoice.
 *
 * @returns {JSX.Element} The rendered CreateInvoiceCard component.
 */
const CreateInvoiceCard = () => (
  <div className="bg-gray-200 rounded-2xl p-6 shadow-sm transition-transform hover:scale-[1.02] cursor-pointer">
    <div className="text-center">
      <div className="w-12 h-12 p-[3px] rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#DD2A7B] via-[#9747FF] to-[#334CCA]">
        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
          <Plus className="w-6 h-6 text-purple-600" strokeWidth={3} />
        </div>
      </div>
      <h2 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#DD2A7B] via-[#9747FF] to-[#334CCA] bg-clip-text text-transparent">
        Create New Invoice
      </h2>
      <p className="text-sm text-gray-400 mb-1">Start by creating and sending new invoice</p>
    </div>
  </div>
);

export default CreateInvoiceCard;