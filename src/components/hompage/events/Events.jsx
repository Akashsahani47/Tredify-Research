'use client'
import React from "react";
import { Calendar, Clock, Users, Sparkles, ArrowRight, Trophy, Award, Star, Zap, Target, TrendingUp, MessageSquare, Mail } from "lucide-react";

const Events = () => {
  const eventTypes = [
    {
      title: "Market Mastery Workshops",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Advanced technical analysis and trading strategies",
      color: "from-blue-500 to-green-500",
      comingSoon: true
    },
    {
      title: "Investor Education Summits",
      icon: <Target className="w-6 h-6" />,
      description: "Comprehensive portfolio management and risk assessment",
      color: "from-green-500 to-blue-600",
      comingSoon: true
    },
    {
      title: "Elite Investor Networking",
      icon: <Users className="w-6 h-6" />,
      description: "Connect with industry experts and fellow investors",
      color: "from-blue-600 to-green-600",
      comingSoon: true
    }
  ];

  const whyAttend = [
    {
      title: "SEBI Certified Experts",
      description: "Learn from registered research analysts with proven track records"
    },
    {
      title: "75+ Years Experience",
      description: "Combined expertise from market veterans"
    },
    {
      title: "Practical Learning",
      description: "Hands-on sessions with real market examples"
    },
    {
      title: "Exclusive Content",
      description: "Access to proprietary research and analysis tools"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-12 px-4 sm:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-green-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <h3 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Events & Workshops
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Exciting Events
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Coming Soon!
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We're currently preparing a lineup of exclusive workshops, seminars, and networking events 
            designed to enhance your investment knowledge with insights from SEBI certified research analysts.
          </p>
        </div>

        {/* Main Coming Soon Card */}
        <div className="relative bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 sm:p-12 text-white mb-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold">Launching Soon</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Get Ready for Transformative Learning Experiences
                </h2>
                
                <p className="text-blue-100 text-lg mb-6 max-w-2xl">
                  Our team is curating exclusive events that combine expert knowledge with practical 
                  market insights. Be the first to know when registration opens!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Notify Me When Live
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button className="group border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Suggest Event Topics
                  </button>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Calendar className="w-24 h-24 sm:w-32 sm:h-32 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Types Preview */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">What to Expect</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's a preview of the types of events we're preparing for our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:border-blue-200 relative overflow-hidden"
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Coming Soon
                </div>
                
                <div className={`w-14 h-14 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {event.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Duration: 3-4 hours</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 rounded-3xl p-8 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-blue-200 shadow-sm mb-4">
              <Trophy className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Why Join Our Events?</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our events are designed to provide maximum value to participants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyAttend.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats and Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Stats Card */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Our Track Record
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-3 border-b border-blue-500/30">
                <div>
                  <div className="text-sm text-blue-200">Events Conducted</div>
                  <div className="text-2xl font-bold">12+</div>
                </div>
                <Sparkles className="w-8 h-8 text-blue-300" />
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-blue-500/30">
                <div>
                  <div className="text-sm text-blue-200">Total Participants</div>
                  <div className="text-2xl font-bold">850+</div>
                </div>
                <Users className="w-8 h-8 text-blue-300" />
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                  <div className="text-2xl font-bold">98%</div>
                </div>
                <Trophy className="w-8 h-8 text-blue-300" />
              </div>
            </div>
          </div>
          
          {/* Testimonials Preview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              What Participants Say
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-5">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">
                  "The insights gained from previous workshops completely transformed my approach to market analysis."
                </p>
                <div className="text-sm text-gray-600 font-medium">- Rohan Sharma, Mumbai</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-5">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">
                  "Practical examples and expert guidance made complex concepts easy to understand."
                </p>
                <div className="text-sm text-gray-600 font-medium">- Priya Patel, Delhi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stay Updated CTA */}
       
      </div>
    </section>
  );
};

export default Events;