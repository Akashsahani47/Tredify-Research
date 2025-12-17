'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.mobile-menu-panel')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const announcements = [
    "🚀 New Workshop Available: Advanced Technical Research Methods",
    "📢 Latest Compliance Data Updates Now Live",
    "⭐ Featured Product: Innovative Research Solutions",
    "🔔 Contact us for customized technical consultations"
  ];

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCT & SERVICE', href: '/services' },
    { name: "LEARNING", href: '' },
    { name: "EVENTS", href: '/events' },
    { name: 'COMPLIANCE DATA', href: '/compliance' },
    { name: 'CONTACT', href: '/contactUS' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (itemname) => {
    setActiveLink(itemname);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Announcement Bar - Fixed at top */}
      <div className="w-full bg-gradient-to-r from-blue-600 to-green-600 py-2 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {announcements.map((announcement, index) => (
            <span key={index} className="mx-6 text-sm text-white font-medium">
              {announcement}
              {index < announcements.length - 1 && ' • '}
            </span>
          ))}
        </div>
        {/* Gradient overlays for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-blue-600 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-green-600 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Navbar - Fixed below announcement */}
      <nav className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-2'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <div 
                onClick={() => router.push('/')} 
                className="cursor-pointer flex-shrink-0"
              >
                <Image 
                  src={"/uplogo.png"}
                  width={60}
                  height={60}
                  alt="Logo"
                  className="object-contain w-12 h-12 sm:w-14 sm:h-14"
                  priority
                />
              </div>
              
              <div className="hidden sm:block h-10 w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              <div className="hidden sm:block">
                <h1 className="text-sm md:text-base font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent leading-tight">
                  Tredify Research & Finance PVT LTD
                </h1>
                <h2 className="text-xs md:text-sm text-blue-700 font-semibold tracking-wider mt-0.5">
                  INH000023791
                </h2>
              </div>

              {/* Mobile Brand Name */}
              <div className="sm:hidden">
                <h1 className="text-xs font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
                  Tredify Research
                </h1>
                <h2 className="text-[10px] text-blue-700 font-semibold tracking-wider">
                  INH000023791
                </h2>
              </div>
            </div> 

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link 
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeLink === item.name 
                        ? 'text-white'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => handleNavClick(item.name)}
                  >
                    {activeLink === item.name && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg"></div>
                    )}
                    <span className="relative z-10 font-medium text-sm">
                      {item.name}
                    </span>
                    {activeLink === item.name && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
              <button
                onClick={toggleMobileMenu}
                className='p-2 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 hover:from-blue-100 hover:to-green-100 transition-all duration-300'
                aria-label='Toggle menu'
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-5 h-5 text-gray-700" />
                ) : (
                  <FiMenu className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Fixed overlay */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop - Closes menu when clicked */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Panel - Slides from right */}
        <div className={`mobile-menu-panel absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600">
                  <Image 
                    src={"/uplogo.png"}
                    width={32}
                    height={32}
                    alt="Logo"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">Tredify Research</h2>
                  <p className="text-sm text-blue-700 font-medium">INH000023791</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block mb-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeLink === item.name
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => handleNavClick(item.name)}
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 px-4">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-800 text-sm mb-3">Contact Info</h3>
                <div className="space-y-2">
                  <a 
                    href="mailto:Aayushtak116@gmail.com" 
                    className="flex items-center gap-2 text-blue-600 text-xs hover:text-blue-700"
                  >
                    <span>📧</span>
                    <span className="truncate">Aayushtak116@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+918770588941" 
                    className="flex items-center gap-2 text-green-600 text-xs hover:text-green-700"
                  >
                    <span>📞</span>
                    <span>+91 8770588941</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: inline-flex;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Prevent body scroll when mobile menu is open */
        body:has(.lg\\:hidden.fixed.inset-0.z-50.opacity-100) {
          overflow: hidden;
        }
      `}</style>
    </>
  )
}

export default Navbar;