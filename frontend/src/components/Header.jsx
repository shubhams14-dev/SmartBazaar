import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  return (
    <>
      <header className="fixed w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-heading font-bold text-primary-600">eBazaar</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:justify-center flex-1 px-8">
              <div className="flex space-x-8">
                <Link 
                  to="/" 
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/#shop" 
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Shop
                </Link>
              </div>
            </nav>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-6 pr-4">
              <Link 
                to="/login" 
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
              >
                <User className="w-5 h-5" />
                {userInfo?.name && (
                  <span className="ml-2 text-primary-600 font-medium truncate max-w-[100px]">
                    {userInfo.name}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative flex items-center">
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary-600 transition-colors" />
                {productData.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                    {productData.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#shop"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-5 h-5 mr-2" />
                <span>
                  {userInfo?.name ? userInfo.name : 'Login'}
                </span>
              </Link>
              <Link
                to="/cart"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span>Cart ({productData.length})</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </>
  );
};

export default Header;