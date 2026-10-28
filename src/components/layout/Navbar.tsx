import { useState } from "react";

import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((current) => !current);
  }
  function handleCloseMenu() {
    setIsMenuOpen(false);
  }
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold text-gray-900">
          UniDocsity
          {/**will replace this with a website logo */}
        </Link>
        {/**Navigation Bar */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/documents"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Browse Documents
          </Link>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Login
          </Link>
          {/* <Link to="/register" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">Register</Link> */}
          <Button size="sm">Register</Button>
        </nav>
        <button
          type="button"
          onClick={handleToggleMenu}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <Menu size={22} />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </header>
  );
}
