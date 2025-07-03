import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, TrendingUp, Wallet, Trophy, User, Settings,
  LogOut, Coins, Menu, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext.jsx';
import AuthModal from './AuthModal.jsx';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Predictions', href: '/prediction', icon: TrendingUp },
    { name: 'Wallet', href: '/wallet', icon: Wallet },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg shadow-inner">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-extrabold text-purple-800">
                PredictoPlay
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-purple-500 to-purple-500 text-white shadow-md'
                        : 'text-gray-800 hover:bg-gray-100 hover:text-black'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-purple-400 to-purple-500 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-inner">
                    <Coins className="h-4 w-4" />
                    <span>{user.coins?.toLocaleString() || 0}</span>
                  </div>

                  <div className="relative">
  <button
    onClick={() => setIsDropdownOpen(prev => !prev)}
    className="flex items-center space-x-2 text-gray-700 hover:text-black"
  >
    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
      <User className="h-4 w-4 text-white" />
    </div>
    <span className="hidden sm:block font-medium">{user.username}</span>
  </button>

  {isDropdownOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white backdrop-blur-md rounded-md shadow-xl border border-gray-200 z-20">
      <div className="py-1 text-gray-800">
        <Link
          to="/profile"
          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          onClick={() => setIsDropdownOpen(false)}
        >
          <User className="h-4 w-4 mr-2" /> Profile
        </Link>
        {user.isAdmin && (
          <Link
            to="/admin"
            className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => setIsDropdownOpen(false)}
          >
            <Settings className="h-4 w-4 mr-2" /> Admin Panel
          </Link>
        )}
        <button
          onClick={() => {
           logout();
setIsDropdownOpen(false);

navigate('/'); // 👈 redirect to home

          }}
          className="flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </button>
      </div>
    </div>
  )}
</div>

                </>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  Login
                </button>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-200 transition"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
  <div className="md:hidden border-t border-gray-200 bg-white">
    <div className="px-4 pt-3 pb-4 space-y-2">
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center w-full space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${
              isActive(item.href)
                ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md'
                : 'text-gray-800 hover:bg-gray-100 hover:text-black'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="flex-1">{item.name}</span>
          </Link>
        );
      })}
    </div>
  </div>
)}

        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
};

export default Navbar;
