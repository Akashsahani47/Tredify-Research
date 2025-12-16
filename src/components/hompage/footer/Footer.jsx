'use client'
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Users,
  FileText,
  Scale,
  Building
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contactUS" },
    { name: "Compliance", href: "/compliance" }
  ];

  const legalLinks = [
    { 
      name: "Grievance Redressal.", 
      href: "/compliance",
      icon: <FileText className="w-4 h-4" />,
      details: "Submit your complaints and feedback"
    },
    { 
      name: "Investor Charter", 
      href: "/important/investercharter",
      icon: <Scale className="w-4 h-4" />
    },
    { 
      name: "Disclosure", 
      href: "/important/discloser",
      icon: <Shield className="w-4 h-4" />
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Aayushtak116@gmail.com",
      href: "mailto:Aayushtak116@gmail.com",
      type: "General Queries"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: "Akshrivastava8770@gmail.com",
      href: "mailto:Akshrivastava8770@gmail.com",
      type: "Principal Officer"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 8770588941",
      href: "tel:+918770588941",
      type: "Customer Care"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Block A, 3rd Floor, Ratlam Plaza, Ratlam, MP - 457001",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      name: "Twitter"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      name: "Facebook"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      name: "LinkedIn"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      name: "YouTube"
    }
  ];

  const companyStats = [
    { label: "SEBI Registered", value: "2022", icon: <Award className="w-4 h-4" /> },
    { label: "Years Experience", value: "75+", icon: <Users className="w-4 h-4" /> },
    { label: "Research Category", value: "Research", icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              <div 
                onClick={() => router.push('/')} 
                className='w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
              >
                <Image 
                  src={"/uplogo.png"}
                  width={48}
                  height={48}
                  alt="Tredify Logo"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Tredify Research & Finance
                </h3>
                <p className="text-green-400 text-sm font-semibold">Pvt. Ltd.</p>
                <p className="text-gray-300 text-xs mt-1">SEBI Registration: INH000023791</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              An India-based investment research firm focused on delivering research-driven, 
              disciplined and transparent market insights to help investors make informed decisions.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {companyStats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {stat.icon}
                    <span className="text-green-400 font-bold text-sm">{stat.value}</span>
                  </div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center gap-2 group py-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:w-4 group-hover:bg-green-400 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Compliance
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center gap-2 group py-2"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="group-hover:translate-x-2 transition-transform duration-300 block">
                        {item.name}
                      </span>
                      {item.details && (
                        <span className="text-gray-400 text-xs block">{item.details}</span>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 group p-2 rounded-lg hover:bg-gray-800/30"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <span className="text-sm block">{contact.text}</span>
                    {contact.type && (
                      <span className="text-gray-400 text-xs">{contact.type}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm order-2 md:order-1">
              © {currentYear} Tredify Research and Finance Pvt. Ltd. All rights reserved.
              <p className="text-xs text-gray-500 mt-1">
                SEBI Registration No. INH000023791 | Category: Research
              </p>
            </div>

            {/* Risk Disclosure */}
            <div className="order-1 md:order-2 text-center">
              <p className="text-gray-400 text-sm">
                <span className="text-yellow-400 font-bold">⚠️</span> Market investments are subject to risk. 
                <span className="text-xs text-gray-500 block mt-1">Past performance does not guarantee future results.</span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 order-3">
              <a href="/ptD/refundP" className="hover:text-green-400 transition-colors duration-300">
                Refund Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="/ptD/disclaimer" className="hover:text-green-400 transition-colors duration-300">
                Disclaimer
              </a>
              <span className="text-gray-600">•</span>
              <a href="ptD/privacy" className="hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;