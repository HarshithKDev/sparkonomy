import LogoPaw from '../assets/logo.webp';

/**
 * The footer component for the application.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => (
  <div className="mt-8 text-center">
    <p className="text-sm text-gray-400 flex items-center justify-center">
      <img src={LogoPaw} alt="Sparkonomy Paw Logo" className="inline-block h-4 w-auto mx-1" />
    </p>
    <p className="text-xs text-gray-400 mt-1">sparking the creator economy</p>
  </div>
);

export default Footer;