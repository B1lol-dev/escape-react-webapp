import { Link } from "react-router-dom";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`bg-[#232F3899] w-full h-[90px] text-white py-8 block! ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-serif mb-4 md:mb-0">
          Escape.
        </Link>
        <ul className="flex space-x-8">
          <Link to="/" className="hover:text-[#dd783f] transition-colors">
            HOME
          </Link>
          <Link
            to="/categories"
            className="hover:text-[#dd783f] transition-colors"
          >
            CATEGORIES
          </Link>
          <Link to="/about" className="hover:text-[#dd783f] transition-colors">
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#dd783f] transition-colors"
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </footer>
  );
};
