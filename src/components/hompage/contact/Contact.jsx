import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  FileText,
  Building,
  Shield,
  Award,
  Users,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "SEBI Registration",
      details: "INH000023791",
      description: "Research Analyst (Category: Research)",
      gradient: "from-blue-600 to-green-500",
      color: "text-blue-600"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Company Name",
      details: "Tredify Research & Finance Pvt Ltd",
      description: "Registered Research Analyst",
      href: "#",
      gradient: "from-green-600 to-blue-500",
      color: "text-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "Aayushtak116@gmail.com",
      description: "Send us your queries anytime",
      href: "mailto:Aayushtak116@gmail.com",
      gradient: "from-blue-500 to-green-600",
      color: "text-blue-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: "Block A, 3rd Floor, Ratlam Plaza",
      description: "Ratlam, Madhya Pradesh - 457001",
      href: "#",
      gradient: "from-green-500 to-blue-600",
      color: "text-green-500"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-6 py-3 rounded-full border border-blue-100 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Certified Research Analyst
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact Our
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Research Experts
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get personalized investment insights from our SEBI registered research analysts. 
            Schedule a consultation with certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.href}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className={`w-14 h-14 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {method.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {method.title}
                      </h3>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${method.gradient}`}></div>
                    </div>
                    
                    <p className="text-base font-semibold text-gray-800 mb-1">
                      {method.details}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {method.description}
                    </p>
                    
                    <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full group-hover:w-12 transition-all duration-300"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* SEBI Certification Card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 border border-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">SEBI Certified</h3>
                    <p className="text-blue-100/90">Registration: INH000023791</p>
                  </div>
                </div>
                
                <p className="text-blue-100/90 leading-relaxed mb-4">
                  As a registered research analyst under SEBI regulations, we provide 
                  compliant and transparent investment research to help you make 
                  informed decisions.
                </p>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Category: Research</span>
                  <span className="mx-2">•</span>
                  <span>Type: Research Analyst</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 overflow-hidden">
            {/* Form background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-full -translate-y-32 translate-x-32"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Schedule a Consultation
                </h2>
                <p className="text-gray-600">
                  Fill in your details and our research team will contact you for a 
                  personalized investment strategy session.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                      <User className="w-4 h-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300 shadow-sm"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <MessageCircle className="w-4 h-4" />
                    Consultation Type *
                  </label>
                  <select className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all duration-300 shadow-sm appearance-none">
                    <option value="">Select consultation type</option>
                    <option value="equity">Equity Research</option>
                    <option value="portfolio">Portfolio Review</option>
                    <option value="strategy">Investment Strategy</option>
                    <option value="technical">Technical Analysis</option>
                    <option value="other">Other Research Service</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                    <MessageCircle className="w-4 h-4" />
                    Your Investment Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm resize-none"
                    placeholder="Tell us about your investment objectives, risk tolerance, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Schedule Consultation
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By submitting, you agree to our privacy policy. All consultations are 
                  conducted by SEBI registered research analysts.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full border border-green-100 shadow-sm mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Research Expertise
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Regulatory Compliance</h4>
              <p className="text-gray-600">SEBI registered research analyst ensuring all recommendations comply with regulatory standards.</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">75+ Years Experience</h4>
              <p className="text-gray-600">Combined expertise in equity research, technical analysis, and portfolio management.</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">300+ Clients</h4>
              <p className="text-gray-600">Trusted by investors nationwide for reliable research and market insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;