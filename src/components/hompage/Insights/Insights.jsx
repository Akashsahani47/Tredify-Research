import React from 'react'

const Insights = () => {
  const stats = [
    { number: "75+", title: "Years Experience", badge: "SEBI Certified" },
    { number: "20k+", title: "Trading Community", badge: "Research Analyst" },
    { number: "300+", title: "Customer Reviews", badge: "Expert Analyst" }
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600  ">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-500 px-4 py-1 rounded-full mb-3">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <h5 className="text-green-300 font-semibold text-sm">Insights</h5>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-3">Company Insights</h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-white/80 text-sm">
            <p className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              Tredify Research & Finance PVT LTD
            </p>
            <p className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
              INH000023791
            </p>
          </div>
        </div>
       
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-white/90 font-medium mb-3">
                {stat.title}
              </div>
              <div className="text-xs text-green-700 font-bold bg-green-200 px-3 py-4  rounded-full">
                {stat.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insights