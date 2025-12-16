'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { 
  Shield, 
  FileText, 
  AlertTriangle, 
  Lock, 
  Building, 
  TrendingUp,
  Award,
  Scale,
  CheckCircle,
  XCircle,
  Mail,
  ExternalLink
} from "lucide-react";

const Disclaime = () => {
  const router = useRouter();

  const compliancePoints = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "SEBI Registration",
      content: "Registration No. INH000023791 under SEBI (Research Analysts) Regulations, 2014"
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Clean Record",
      content: "Never suspended or barred from business by SEBI or any other authority"
    },
    {
      icon: <XCircle className="w-5 h-5" />,
      title: "Services Not Provided",
      content: "Does not provide merchant banking, investment banking, investment adviser, or brokerage services"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "No Third-Party Partnerships",
      content: "No partnerships with third-party intermediaries for execution or distribution services"
    }
  ];

  const riskDisclosures = [
    {
      title: "Market Risk Warning",
      content: "Investment in securities market are subject to market risks. Read all the related documents carefully before investing.",
      type: "critical"
    },
    {
      title: "Non-Guarantee Disclaimer",
      content: "Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.",
      type: "warning"
    },
    {
      title: "Illustrative Purposes Only",
      content: "The securities quoted are for illustration only and are not recommendatory. Information is provided solely for educational and illustrative purposes.",
      type: "info"
    },
    {
      title: "No Performance Guarantee",
      content: "Past performance is not indicative of future results, and the performance is subject to market risk.",
      type: "warning"
    }
  ];

  const importantPoints = [
    {
      content: "Tredify Research and Finance Private Limited makes research-based recommendations on various opportunities in the Indian equity market for the short and long term.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      content: "The recommendations should not be interpreted as a solicitation of an offer to purchase or sell any security in a jurisdiction where doing so would be against the law.",
      icon: <Scale className="w-5 h-5" />
    },
    {
      content: "Tredify Research and Finance Private Limited and its affiliates are not responsible for any decisions made or actions performed as a result of using the information provided here.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      content: "Access to the material on this website isn't meant to be and shouldn't be seen as an offer to purchase or sell any security.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      content: "This website's original writing, including but not limited to the design, text, and images, are protected as intellectual property and may not be used in any way by copying, reproducing, transmitting, displaying, or otherwise.",
      icon: <Lock className="w-5 h-5" />
    },
    {
      content: "Investors are accountable for their investing decisions and for validating any information used to make those decisions.",
      icon: <Award className="w-5 h-5" />
    },
    {
      content: "Before investing, investors should carefully examine all relevant papers, such as research reports, financial statements, etc., as investments in the securities market are susceptible to market risks.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      content: "Derivatives are sophisticated financial instruments. Before actually trading in derivative contracts, the investor is required to analyse all relevant risk considerations.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      content: "In no way does Tredify Research and Finance Private Limited promise or guarantee a favourable outlook for a particular industry, sector, or business group.",
      icon: <XCircle className="w-5 h-5" />
    },
    {
      content: "The analysts/representatives certify that all information/material therein accurately reflects their personal opinions and that no portion of their compensation has been related to the company(ies) they recommend.",
      icon: <CheckCircle className="w-5 h-5" />
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
              Legal Disclosure
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Disclosure & Legal Notice
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Tredify Research and Finance Private Limited - SEBI Registered Research Analyst
          </p>
        </div>

        {/* Compliance Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SEBI Registered Research Analyst</h3>
                <p className="text-blue-100/90">Registration No. INH000023791</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm opacity-90">Registered under</div>
              <div className="font-bold">SEBI (Research Analysts) Regulations, 2014</div>
            </div>
          </div>
        </div>

        {/* Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {compliancePoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                  <div className="text-blue-600">
                    {point.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{point.title}</h4>
              </div>
              <p className="text-gray-600 text-xs">{point.content}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Risk Disclosures */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Risk Disclosures</h2>
                <p className="text-gray-600">Important warnings for investors</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {riskDisclosures.map((disclosure, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border-l-4 ${
                    disclosure.type === 'critical' ? 'border-red-500 bg-red-50' :
                    disclosure.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    'border-blue-500 bg-blue-50'
                  }`}
                >
                  <h4 className="font-bold text-gray-900 mb-2">{disclosure.title}</h4>
                  <p className="text-gray-700 text-sm">{disclosure.content}</p>
                </div>
              ))}
            </div>

            {/* Critical Warning Box */}
            <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Critical Investor Notice</h4>
                  <p className="text-gray-700 text-sm">
                    "Registration granted by SEBI, enlistment as RA with Exchange and certification from NISM 
                    in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Legal Information</h2>
                <p className="text-gray-600">Terms and limitations of use</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Website Ownership */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-gray-900">Website Ownership</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Tredify Research and Finance Private Limited owns the website and makes research-based 
                  recommendations on various opportunities in the Indian equity market.
                </p>
              </div>

              {/* No Liability Clause */}
              <div className="border-l-4 border-red-400 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">No Liability Disclaimer</h4>
                <p className="text-gray-700 text-sm">
                  Tredify Research and Finance Private Limited makes no representation, warranty, or guarantee 
                  regarding the accuracy, timeliness, or completeness of the information offered through our website.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="border-l-4 border-purple-400 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Intellectual Property</h4>
                <p className="text-gray-700 text-sm">
                  All content including design, text, and images are protected as intellectual property and may 
                  not be used without prior written approval.
                </p>
              </div>

              {/* Investor Responsibility */}
              <div className="border-l-4 border-green-400 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Investor Responsibility</h4>
                <p className="text-gray-700 text-sm">
                  Before investing, the investor must assess all risk variables, including their financial 
                  position. Investors are accountable for their own investing decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Points */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Important Disclosures</h2>
              <p className="text-gray-600">Additional terms and conditions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {importantPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="text-blue-600">
                    {point.icon}
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{point.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Website & Data Notice */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Website & Data Information</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  The information and data on the website, including but not limited to recommendations, 
                  past performance, stock ratings, and research rationale, are provided solely for educational 
                  and illustrative purposes.
                </p>
                <p className="text-gray-700">
                  Tredify Research and Finance Private Limited has not audited or validated the data used 
                  to calculate historical returns and other information, which is provided by exchange-approved 
                  third-party data vendors.
                </p>
                <p className="text-gray-700">
                  Despite all reasonable precautions taken by Tredify Research and Finance Private Limited 
                  to prevent hacking and other interference, this website is not immune to these risks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Footer */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Contact Information</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="mailto:Aayushtak116@gmail.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Aayushtak116@gmail.com</span>
              </a>
              <div className="hidden sm:block text-gray-400">•</div>
              <a 
                href="/compliance"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>View Full Compliance Details</span>
              </a>
            </div>
          </div>

          ]
        </div>

       
      </div>
    </section>
  );
};

export default Disclaime;