import { ChevronLeft } from 'lucide-react';
import profilePic from '../assets/profile.webp';

/**
 * The header component for the application.
 * It provides a consistent navigation and branding experience across the app.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => (
  <>
    {/* Mobile Header: Visible on smaller screens */}
    <div className="lg:hidden px-4 py-3 flex items-center justify-between" style={{ backgroundColor: '#e7cde6' }}>
      <div className="flex items-center p-2 rounded-md transition-transform hover:scale-105 cursor-pointer">
        <ChevronLeft className="w-5 h-5 text-gray-600" />
        <span className="ml-2 text-gray-600 text-sm">Back</span>
      </div>
      <h1 className="font-semibold text-gray-900">Dashboard</h1>
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
        <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Desktop Header: Visible on larger screens */}
    <div className="hidden lg:block px-8 py-4" style={{ backgroundColor: '#e7cde6' }}>
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center p-2 rounded-md transition-transform hover:scale-105 cursor-pointer">
          <ChevronLeft className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-600">Back</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </>
);

export default Header;