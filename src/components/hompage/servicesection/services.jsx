'use client'
import React from "react";
import {
  Star,
  TrendingUp,
  Target,
  Shield,
  Users,
  Award,
  Clock,
  MessageCircle,
  FileText,
  CheckCircle,
  Zap,
  Crown,
  Gem,
  BarChart3,
  PieChart,
  LineChart,
  Building,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { useRouter }  from "next/navigation";

const Services = () => {
  const router = useRouter();
  
  const servicePlans = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Starter Research Plan",
      price: "₹7,500 / 3 Months",
      portfolio: "₹30,000 – ₹1,50,000",
      bestFor: "Beginners or small portfolios",
      features: [
        "1–2 positional ideas/month",
        "Entry, Target & Stop-Loss",
        "Portfolio check-up",
        "Weekly outlook",
        "WhatsApp support"
      ],
      color: "from-blue-500 to-green-500",
      popular: false
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Research Plan",
      price: "₹10,500 / 3 Months",
      portfolio: "₹1.5 lakh – ₹5 lakh",
      bestFor: "Growing portfolios",
      features: [
        "2–4 ideas/month",
        "Risk guidance",
        "Portfolio structuring",
        "Sector updates",
        "Priority support",
        "Community access"
      ],
      color: "from-green-500 to-blue-500",
      popular: true
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Premium Research Plan",
      price: "₹15,000 / 3 Months",
      portfolio: "₹5 lakh – ₹15 lakh",
      bestFor: "Experienced investors",
      features: [
        "4–6 high-conviction ideas",
        "Swing + positional strategies",
        "Monthly detailed report",
        "Dedicated assistant",
        "Early report access"
      ],
      color: "from-blue-600 to-green-600",
      popular: false
    },
    
    
  ];

  const features = [
    "SEBI Registered Research Analyst",
    "No guaranteed returns",
    "Transparent communication",
    "Data-backed research",
    "Portfolio optimization",
    "Risk management guidance"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <h3 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Investment Research Plans
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            TREDIFY RESEARCH & ADVISORY
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl">
              Service Plans Brochure
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-lg">
              <span className="font-bold text-blue-800">SEBI Registration No.</span>
              <span className="font-bold text-green-700 ml-2">INH000023791</span>
            </div>
            <div className="text-sm text-gray-600">
              SEBI Registered Research Analyst
            </div>
          </div>
        </div>

        {/* Services Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicePlans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg p-6 border ${
                plan.popular 
                  ? 'border-green-300 shadow-xl ring-2 ring-green-200' 
                  : 'border-gray-200'
              } hover:shadow-2xl transition-all duration-500 overflow-hidden`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-pulse">
                  MOST POPULAR
                </div>
              )}

              {/* Price Header */}
              <div className={`w-full bg-gradient-to-r ${plan.color} text-white rounded-xl p-5 mb-6 text-center`}>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                </div>
                <div className="text-2xl font-bold">{plan.price}</div>
              </div>

              {/* Portfolio Range */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <Building className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-gray-900">{plan.portfolio}</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">Best for {plan.bestFor}</p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Features & Compliance */}
        
        {/* Contact CTA */}
       
      </div>
    </section>
  );
};

// XCircle Component
const XCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Services;