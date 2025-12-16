'use client'
import React from "react";
import { Shield, Scale, Eye, Target, Lock, BookOpen, CheckCircle, Users } from "lucide-react";

const CodeOfConduct = () => {
  const principles = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity and Honesty",
      description: "Maintain the highest standards of integrity and honesty in all professional dealings and research activities."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Due Diligence",
      description: "Conduct thorough analysis and exercise due diligence in preparing all research reports and market insights."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Conflict Management",
      description: "Identify, disclose, and effectively manage any potential conflicts of interest that may affect research impartiality."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Conduct",
      description: "Adhere strictly to market regulations and avoid any form of insider trading or unfair market practices."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Confidentiality",
      description: "Protect confidential information and ensure its proper handling until authorized for public release."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Professional Standards",
      description: "Uphold professional standards and continuously enhance expertise through ongoing education and development."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Comply with all applicable laws, regulations, and guidelines governing research and financial services."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Responsibility",
      description: "Senior management maintains primary responsibility for fostering a culture of compliance and ethical conduct."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Professional Standards
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Code of Conduct
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mt-2">
              For Research Analysts & Entities
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our commitment to ethical practices and professional excellence
          </p>
        </div>

        {/* Introduction Card */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Our Ethical Framework</h2>
                <p className="text-gray-700 leading-relaxed">
                  This Code of Conduct outlines the fundamental principles that guide our research activities 
                  and ensure the integrity of our analysis. As a SEBI registered research entity, we are committed 
                  to maintaining transparency, professionalism, and ethical behavior in all our operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <div className="text-white">
                    {principle.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-6 sm:p-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Our Pledge</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Commitment to Excellence
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                We are dedicated to upholding these principles in every aspect of our research and analysis. 
                Our goal is to provide clients with unbiased, thorough, and reliable market insights that 
                support informed investment decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-yellow-600 font-bold text-xl">ℹ️</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Content Notice</h3>
              <p className="text-gray-700">
                This is a temporary version of our Code of Conduct. The final version with detailed 
                policies and specific regulatory requirements will be provided by the client and 
                updated accordingly. For specific queries, please contact our compliance team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;