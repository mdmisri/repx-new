import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black tracking-tight">
            REPX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
              Shop
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>

            {/* User and Cart Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/LoginPage" className="hover:text-gray-300 transition-colors">
                <User className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="relative hover:text-gray-300 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-white" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute left-0 right-0 top-16 bg-black">
            <div className="px-4 pt-2 pb-4 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:bg-gray-800 p-2 rounded"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="block text-white hover:bg-gray-800 p-2 rounded"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link 
                to="/contact" 
                className="block text-white hover:bg-gray-800 p-2 rounded"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/LoginPage" 
                className="block text-white hover:bg-gray-800 p-2 rounded"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}