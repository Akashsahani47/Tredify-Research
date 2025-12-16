'use client'
import React from "react";
import {
  Star,
  TrendingUp,
  Target,
  Shield,
  Users,
  Award,
  CheckCircle,
  Zap,
  Crown,
  Gem,
  Building,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  FileText,
  BarChart3,
  PieChart
} from "lucide-react";
import { useRouter } from "next/navigation";

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
    {
      icon: <Crown className="w-6 h-6" />,
      title: "HNI Elite Advisory",
      price: "₹1,00,000 to ₹1,50,000 / Year",
      portfolio: "₹15 lakh – ₹2 crore",
      bestFor: "High Net Worth Individuals",
      features: [
        "Custom portfolio strategy",
        "Comprehensive wealth planning",
        "Detailed research reports",
        "Quarterly performance reviews",
        "VIP priority support"
      ],
      color: "from-purple-500 to-blue-600",
      popular: false
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Ultra HNI Bespoke Advisory",
      price: "₹2,50,000+ / Year",
      portfolio: "₹2 crore+ portfolios",
      bestFor: "Ultra High Net Worth Investors",
      features: [
        "Custom wealth roadmap",
        "Quant + Fundamental analysis",
        "Weekly portfolio tracking",
        "Macro + FII insights",
        "Dedicated analyst team support"
      ],
      color: "from-orange-500 to-red-500",
      popular: false
    }
  ];

  const compliancePoints = [
    "No guaranteed returns",
    "No profit-sharing",
    "All communication recorded & transparent"
  ];

  const tradeboxFeatures = [
    {
      title: "Client Onboarding Solution",
      description: "Streamlined digital onboarding with KYC compliance"
    },
    {
      title: "Model Portfolio Management",
      description: "Create, manage and track model portfolios with real-time analytics"
    },
    {
      title: "Research Delivery Engine",
      description: "Distribute research reports and recommendations efficiently"
    },
    {
      title: "White Label Setup",
      description: "Fully customizable platform with your brand identity"
    }
  ];

  // Function to handle Learn More button click
  const handleLearnMore = () => {
    window.open("https://tradeboxlive.com", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <h3 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Professional Research Services
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
              Registered under SEBI (Research Analysts) Regulations, 2014
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

              {/* Plan Header */}
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

        {/* Tradebox Platform Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl p-8 mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Section */}
            <div className="p-4 lg:p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Powered by Tradebox</h2>
                  <p className="text-gray-600">Modern infrastructure for smarter trading</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our research and advisory services are powered by Tradebox - a comprehensive platform 
                designed specifically for SEBI-registered professionals. This enables us to deliver 
                compliant, scalable, and efficient services to our clients.
              </p>
              
              {/* Tradebox Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {tradeboxFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Learn More Button */}
              <button 
                onClick={handleLearnMore}
                className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Learn More About Tradebox Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Platform Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">Experts Signed-up</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Customers Onboarded</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">₹0k</div>
                  <div className="text-sm text-gray-600">Transactions Value</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">0</div>
                  <div className="text-sm text-gray-600">Model Portfolios</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm text-center mt-4">
                Data from Tradebox platform infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* SEBI Compliance Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">SEBI Compliance & Disclosures</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compliancePoints.map((point, index) => (
                <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{point}</h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 && "Investment markets carry inherent risks"}
                    {index === 1 && "Transparent fee structure only"}
                    {index === 2 && "Maintaining professional standards"}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-700">
                <span className="font-semibold">Important:</span> Registration granted by SEBI and certification from NISM 
                in no way guarantee performance of the intermediary or provide any assurance of returns to investors. 
                Investment in securities market are subject to market risks.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Start Your Investment Journey with Professional Guidance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contact us for a personalized consultation to choose the right plan for your investment goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a 
              href="mailto:Aayushtak116@gmail.com"
              className="group bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">Aayushtak116@gmail.com</p>
            </a>
            
            <a 
              href="tel:+918770588941"
              className="group bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 8770588941</p>
            </a>
            
            <button 
              onClick={() => router.push('/contact')}
              className="group bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-1">Schedule Consultation</h3>
              <p className="text-blue-100/90 text-sm">Get personalized advice</p>
            </button>
          </div>
        </div>
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