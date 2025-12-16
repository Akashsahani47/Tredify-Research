'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

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
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 py-2">
        <div className="flex animate-marquee">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-sm font-medium text-white whitespace-nowrap">
                {announcement}
              </span>
              {index < announcements.length - 1 && (
                <div className="w-1 h-1 bg-white/50 rounded-full mx-8"></div>
              )}
            </div>
          ))}
        </div>
        {/* Gradient fade effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-green-600 to-transparent"></div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 max-h-20 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between ">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2">
              <div 
                onClick={() => router.push('/')} 
                className="group cursor-pointer"
              >
                <div className=" w-21 h-21 flex items-center justify-center rounded-xl  ">
                  <div className=" inset-0 rounded-xl "></div>
                  <Image 
                    src={"/uplogo.png"}
                    width={90}
                    height={90}
                    alt="Logo"
                    className=" z-10 object-contain"
                  />
                </div>
              </div>
              
              <div className="hidden md:block h-12 w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>
              
              <div className="hidden md:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
                  Tredify Research & Finance PVT LTD
                </h1>
                <h2 className="text-sm font-semibold text-blue-700 tracking-wider mt-0.5">
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
                    className={`relative px-4 py-2.5 rounded-lg transition-all duration-300 ${
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
            <div className='lg:hidden flex items-center'>
              <button
                onClick={toggleMobileMenu}
                className='p-2.5 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 hover:from-blue-100 hover:to-green-100 transition-all duration-300'
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

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600">
                  <Image 
                    src={"/INlogo2.png"}
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
                  className={`block mb-1 px-4 py-3.5 rounded-lg transition-all duration-200 ${
                    activeLink === item.name
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg transform scale-[1.02]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    handleNavClick(item.name);
                    toggleMobileMenu();
                  }}
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
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
      `}</style>
    </>
  )
}

export default Navbar;