'use client'
import React from "react";
import { 
  Target, 
  Eye, 
  Users, 
  Shield, 
  FileText, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  BookOpen,
  Lock,
  Scale,
  Heart,
  Star,
  TrendingUp,
  Award,
  Building
} from "lucide-react";

const InvestorCharter = () => {
  const visionMission = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vision",
      content: "Invest with knowledge & safety.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Mission",
      content: "Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.",
      color: "from-blue-500 to-green-500"
    }
  ];

  const businessDetails = [
    "To publish research report based on the research activities of the RA",
    "To provide an independent unbiased view on securities.",
    "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
    "To provide research recommendation, based on analysis of publicly available information and known observations.",
    "To conduct audit annually",
    "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.",
    "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place."
  ];

  const services = [
    {
      category: "Onboarding of Clients",
      items: [
        "Sharing of terms and conditions of research services",
        "Completing KYC of fee paying clients"
      ]
    },
    {
      category: "Disclosure to Clients",
      items: [
        "To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any",
        "To disclose the extent of use of Artificial Intelligence tools in providing research services",
        "To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures",
        "To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst."
      ]
    },
    {
      category: "Service Standards",
      items: [
        "To distribute research reports and recommendations to the clients without discrimination.",
        "To maintain confidentiality w.r.t publication of the research report until made available in the public domain.",
        "To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information",
        "To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines",
        "To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services",
        "To treat all clients with honesty and integrity",
        "To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information."
      ]
    }
  ];

  const grievanceMechanism = [
    {
      title: "Direct Complaint to Research Analyst",
      description: "In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "SCORES 2.0 Portal",
      description: "A web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner.",
      link: "https://scores.sebi.gov.in",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Email to RAASB",
      description: "Email to designated email ID of Research Analyst Administration and Supervisory Body (RAASB)",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "SMARTODR Platform",
      description: "If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.",
      icon: <Scale className="w-6 h-6" />
    }
  ];

  const reviewProcess = [
    {
      step: "First review done by designated body (RAASB)",
      icon: <Users className="w-5 h-5" />
    },
    {
      step: "Second review done by SEBI",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  const investorRights = [
    { icon: <Lock className="w-5 h-5" />, text: "Right to Privacy and Confidentiality" },
    { icon: <Eye className="w-5 h-5" />, text: "Right to Transparent Practices" },
    { icon: <Scale className="w-5 h-5" />, text: "Right to fair and Equitable Treatment" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Right to Adequate Information" },
    { icon: <FileText className="w-5 h-5" />, text: "Right to Initial and Continuing Disclosure" },
    { icon: <FileText className="w-5 h-5" />, text: "Right to receive information about all the statutory and regulatory disclosures" },
    { icon: <Shield className="w-5 h-5" />, text: "Right to Fair & True Advertisement" },
    { icon: <Clock className="w-5 h-5" />, text: "Right to Awareness about Service Parameters and Turnaround Times" },
    { icon: <Clock className="w-5 h-5" />, text: "Right to be informed of the timelines for each service" },
    { icon: <Users className="w-5 h-5" />, text: "Right to be Heard and Satisfactory Grievance Redressal" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Right to have timely redressal" },
    { icon: <ArrowRight className="w-5 h-5" />, text: "Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst" },
    { icon: <AlertCircle className="w-5 h-5" />, text: "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services" },
    { icon: <Heart className="w-5 h-5" />, text: "Additional Rights to vulnerable consumers" },
    { icon: <Heart className="w-5 h-5" />, text: "Right to get access to services in a suitable manner even if differently abled" },
    { icon: <Users className="w-5 h-5" />, text: "Right to provide feedback on the financial products and services used" },
    { icon: <Scale className="w-5 h-5" />, text: "Right against coercive, unfair, and one-sided clauses in financial agreements" }
  ];

  const investorDos = [
    "Always deal with SEBI registered Research Analyst.",
    "Ensure that the Research Analyst has a valid registration certificate.",
    "Check for SEBI registration number.",
    "Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14",
    "Always pay attention towards disclosures made in the research reports before investing.",
    "Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)",
    "Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.",
    "Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.",
    "Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.",
    "Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.",
    "Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.",
    "Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.",
    "Inform SEBI about Research Analyst offering assured or guaranteed returns."
  ];

  const investorDonts = [
    "Do not provide funds for investment to the Research Analyst.",
    "Don't fall prey to luring advertisements or market rumors.",
    "Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.",
    "Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst."
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Investor Protection
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Investor Charter in respect of Research Analysts
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* A. Vision & Mission */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Vision and Mission Statements for investors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visionMission.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* B. Business Details */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              B
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Details of business transacted by the Research Analyst with respect to the investors</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {businessDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-3 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* C. Services Provided */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              C
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Details of services provided to investors (No Indicative Timelines)</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.category}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* D. Grievance Redressal */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              D
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Details of grievance redressal mechanism and how to access it</h2>
          </div>
          
          {/* Two-level Review */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Two level review for complaint/grievance against Research Analyst</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviewProcess.map((review, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    {review.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{review.step}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {grievanceMechanism.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-sm inline-flex items-center gap-1"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {item.link}
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* Physical Complaint Address */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 max-w-4xl mx-auto mt-8">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">With regard to physical complaints, investors may send their complaints to</h3>
            </div>
            <div className="text-gray-600 space-y-1 pl-4">
              <p>Office of Investor Assistance and Education,</p>
              <p>Securities and Exchange Board of India,</p>
              <p>SEBI Bhavan, Plot No. C4-A, 'G' Block,</p>
              <p>Bandra-Kurla Complex, Bandra (E),</p>
              <p>Mumbai - 400 051</p>
            </div>
          </div>
        </section>

        {/* E. Investor Rights */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              E
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Rights of investors</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {investorRights.map((right, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600">
                      {right.icon}
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm">{right.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* F. Investor Responsibilities */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              F
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Expectations from the investors (Responsibilities of investors)</h2>
          </div>
          
          {/* Do's */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Do's</h3>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investorDos.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-green-50 rounded-lg transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Don'ts */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Don'ts</h3>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {investorDonts.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-red-50 rounded-lg transition-colors duration-200">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEBI Notice */}
        <div className="max-w-4xl mx-auto mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SEBI Compliance Notice</h3>
              <p className="text-gray-700">
                This Investor Charter is in compliance with SEBI regulations. Investors are advised to verify 
                the registration status of the Research Analyst on SEBI's official website. Investment in 
                securities market are subject to market risks. Please read all related documents carefully 
                before investing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorCharter;