'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Shield,
  Building,
  FileText,
  BarChart3,
  CheckCircle
} from "lucide-react";

const About = () => {
  const router = useRouter();
  
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "75+ Years Combined Experience",
      description: "Collective market expertise from our team"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "SEBI Certified Research Analysts",
      description: "Registration: INH000023791 | Category: Research"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Equity & Index Research",
      description: "Specialized market analysis and strategies"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Risk-Managed Strategies",
      description: "Disciplined investment approaches"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Investor Education",
      description: "Transformative learning experiences"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ethical & Transparent",
      description: "Client-first, research-driven practices"
    }
  ];

  const companyInfo = [
    {
      label: "Company",
      value: "Tredify Research and Finance Pvt. Ltd."
    },
    {
      label: "SEBI Registration",
      value: "INH000023791"
    },
    {
      label: "Category",
      value: "Research Analyst"
    },
    {
      label: "Address",
      value: "Block A, 3rd Floor, Ratlam Plaza, Ratlam, MP - 457001"
    }
  ];

  const services = [
    "Equity Research and Market Analysis",
    "Index Research and Strategy Development",
    "Risk-Managed Investment Strategies",
    "Technical and Fundamental Analysis",
    "Portfolio Review and Advisory",
    "Investor Education Programs"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-green-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              About Tredify
            </h3>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Research-Driven
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-xl sm:text-4xl md:text-5xl lg:text-6xl">
              Investment Insights
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            An India-based investment research firm focused on delivering disciplined, 
            transparent market insights to help investors make informed decisions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <span className="font-bold text-blue-600">Tredify Research and Finance Pvt. Ltd.</span> is dedicated to providing research-driven, disciplined and transparent market insights to investors. We specialize in equity and index research, market analysis and risk-managed strategies.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-gray-800 italic">
                  "At Tredify, we believe that consistent wealth creation comes from research, discipline and risk control — not speculation or tips. Our mission is to empower investors with clear analysis, ethical practices and long-term market understanding."
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-blue-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Info & Services */}
          <div className="space-y-6">
            {/* Company Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Building className="w-8 h-8" />
                  <div>
                    <div className="text-3xl font-bold">Tredify</div>
                    <div className="text-sm opacity-90">Research & Finance Pvt. Ltd.</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {companyInfo.map((info, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="font-semibold text-green-300 text-sm mb-1">{info.label}</div>
                    <div className="text-sm opacity-90">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Our Expertise
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk Disclosure */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-600 font-bold text-sm">!</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Market investments are subject to risk.</span> 
                  Past performance does not guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                Research Excellence
              </h3>
              <p className="text-gray-600">
                Data-driven analysis and disciplined research methodologies for informed investment decisions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                SEBI certified practices ensuring transparency, ethical standards, and client protection.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-purple-600" />
                </div>
                Risk Discipline
              </h3>
              <p className="text-gray-600">
                Structured risk-managed strategies prioritizing capital protection and sustainable growth.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;