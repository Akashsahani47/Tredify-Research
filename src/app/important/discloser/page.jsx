'use client'
import React from "react";
import { 
  FileText, 
  Shield, 
  Building, 
  Calendar,
  AlertCircle,
  CheckCircle,
  XCircle,
  Users,
  Award,
  TrendingUp,
  Scale,
  Mail
} from "lucide-react";

const DisclosurePage = () => {
  const researchDetails = [
    {
      icon: <Building className="w-5 h-5" />,
      title: "Registered Name",
      value: "Tredify Research and Finance Private Limited"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "SEBI Registration Number",
      value: "INH000023791"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Registration Date",
      value: "11th November, 2025"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Services Offered",
      value: "Research and Recommendation Services"
    }
  ];

  const disclosures = [
    {
      text: "The Research Analyst or any of its officer/employee does not trade in securities which are subject matter of recommendation.",
      status: "compliant"
    },
    {
      text: "There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.",
      status: "compliant"
    },
    {
      text: "Research Analyst or its employee or its associates have not received any compensation from the company which is subject matter of recommendation.",
      status: "compliant"
    },
    {
      text: "Research Analyst or its employee or its associates have not managed or co-managed the public offering of any company.",
      status: "compliant"
    },
    {
      text: "Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company.",
      status: "compliant"
    },
    {
      text: "Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company.",
      status: "compliant"
    },
    {
      text: "Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation.",
      status: "compliant"
    },
    {
      text: "The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of recommendation services provided.",
      status: "compliant"
    },
    {
      text: "Research Analysts or its employee or its associates has not served as an officer, director or employee of the subject company.",
      status: "compliant"
    },
    {
      text: "Research Analysts has not been engaged in market making activity of the subject company.",
      status: "compliant"
    }
  ];

  const legalStatus = [
    {
      title: "Disciplinary History",
      status: "No pending material litigations or legal proceedings",
      icon: <Shield className="w-6 h-6" />,
      color: "text-green-600 bg-green-100"
    },
    {
      title: "SEBI Penalties",
      status: "No penalties/directions issued by SEBI",
      icon: <Scale className="w-6 h-6" />,
      color: "text-green-600 bg-green-100"
    },
    {
      title: "Associates",
      status: "No associates",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-600 bg-blue-100"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <h3 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Regulatory Disclosure
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Disclosure Document
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Prepared in accordance with SEBI (Research Analyst) Regulations, 2014
          </p>
        </div>

        {/* Compliance Notice */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SEBI Registered Research Analyst</h3>
                <p className="text-blue-100/90 text-sm">Registration No. INH000023791</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm opacity-90">For the purpose of this Disclosure Document</div>
              <div className="text-lg font-bold">Tredify Research and Finance Private Limited</div>
            </div>
          </div>
        </div>

        {/* Research Entity Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Research Entity Information</h2>
              <p className="text-gray-600">Hereinafter referred as "Research Entity"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchDetails.map((detail, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-600">
                    {detail.icon}
                  </div>
                  <span className="font-semibold text-gray-700 text-sm">{detail.title}</span>
                </div>
                <p className="text-gray-900 font-medium">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History & Business */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* History Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">History, Present Business and Background</h2>
                <p className="text-gray-600">Registered Research Analyst since 2025</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-5">
              <p className="text-gray-700 leading-relaxed">
                Visionary Research Analyst is registered with SEBI as Research Analyst with registration no. INH000023791. 
                The Research Analyst got its registration on 11th November, 2025 and is engaged in offering research and 
                recommendation services.
              </p>
            </div>
          </div>

          {/* Legal Status */}
          <div className="space-y-4">
            {legalStatus.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-5 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color.split(' ')[1]}`}>
                    <div className={item.color.split(' ')[0]}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Terms and Conditions of Research Services</h2>
              <p className="text-gray-600">Important limitations and risk disclosures</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                The Research Services will be limited to providing independent research recommendation and shall not be involved in any advisory or portfolio allocation services.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-r-lg p-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Important Risk Disclosure</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>The Research Analyst never guarantees the returns on the recommendation provided.</p>
                    <p>Investor shall take note that Investment/trading in stocks/Index or other securities is always subject to market risk.</p>
                    <p>Past performance is never a guarantee of same future results.</p>
                    <p className="font-semibold">The Research Analyst shall not be responsible for any loss to the Investors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclosures Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Disclosures with respect to Research and Recommendations Services</h2>
              <p className="text-gray-600">Compliance with SEBI regulations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disclosures.map((disclosure, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    disclosure.status === 'compliant' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {disclosure.status === 'compliant' ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <p className="text-gray-700 text-sm">{disclosure.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">SEBI Compliance Notice</h3>
              <p className="text-gray-700 mb-4">
                The particulars given in this Disclosure Document have been prepared in accordance with 
                SEBI (Research Analyst) Regulations, 2014. This disclosure is updated as per regulatory 
                requirements and all information provided is accurate to the best of our knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Registration: INH000023791</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Effective: 11th November, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Contact: Aayushtak116@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DisclosurePage;