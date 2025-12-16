'use client'
import React from "react";
import { 
  Shield, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Clock,
  Building,
  HeadphonesIcon,
  AlertTriangle,
  ExternalLink,
  CheckCircle,
  Users,
  ArrowRight,
  Calendar
} from "lucide-react";

const ComplianceData = () => {
  const grievanceMatrix = [
    {
      designation: "Customer Care",
      contactPerson: "Aashish",
      address: "House No. 45, Ward No. 02, Gram Bahadurpur Jagir, Tehsil Jaora, Bahadurpur, Ratlam, Madhya Pradesh, 457226",
      contactNo: "918770588941",
      email: "Aayushtak116@gmail.com",
      workingHours: "Mon-Sat, 09AM – 05 PM",
      level: "First Level"
    },
    {
      designation: "Head of Customer Care",
      contactPerson: "Aashish",
      address: "House No. 45, Ward No. 02, Gram Bahadurpur Jagir, Tehsil Jaora, Bahadurpur, Ratlam, Madhya Pradesh, 457226",
      contactNo: "918770588941",
      email: "Aayushtak116@gmail.com",
      workingHours: "Mon-Sat, 09AM – 05 PM",
      level: "Second Level"
    },
    {
      designation: "Compliance Officer",
      contactPerson: "Aashish",
      address: "House No. 45, Ward No. 02, Gram Bahadurpur Jagir, Tehsil Jaora, Bahadurpur, Ratlam, Madhya Pradesh, 457226",
      contactNo: "918770588941",
      email: "Aayushtak116@gmail.com",
      workingHours: "Mon-Sat, 09AM – 05 PM",
      level: "Third Level"
    },
    {
      designation: "Principal Officer",
      contactPerson: "Kavita Shrivastava",
      address: "28, Ward No. 15, Kashiram Colony, Jaora, Ratlam, Madhya Pradesh, 457226",
      contactNo: "918817074043",
      email: "Akshrivastava8770@gmail.com",
      workingHours: "Mon-Sat, 09AM – 05 PM",
      level: "Fourth Level"
    }
  ];

  const escalationChannels = [
    {
      title: "SEBI SCORES Portal",
      description: "Escalate unresolved grievances to SEBI's Complaints Redress System",
      link: "https://scores.sebi.gov.in",
      icon: <Shield className="w-5 h-5" />,
      color: "from-blue-600 to-green-600"
    },
    {
      title: "BSE India Notices",
      description: "View regulatory notices and circulars on BSE website",
      link: "https://www.bseindia.com/markets/MarketInfo/DispNewNoticesCirculars.aspx?page=20241209-41",
      icon: <FileText className="w-5 h-5" />,
      color: "from-green-600 to-blue-600"
    },
    {
      title: "Online Dispute Resolution",
      description: "Access ODR portal for alternative dispute resolution",
      link: "https://smartodr.in",
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "from-blue-600 to-purple-600"
    }
  ];

  const importantNotes = [
    {
      text: "We aim to resolve all grievances within 21 working days from the date of receipt",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      text: "Escalate unresolved grievances to SEBI's SCORES Platform within 30 days",
      icon: <Shield className="w-5 h-5" />
    },
    {
      text: "Access ODR Portal if unsatisfied with SCORES resolution",
      icon: <AlertTriangle className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-12 px-4 sm:py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <h3 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Grievance Redressal Portal
            </h3>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Grievance Redressal
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              & Escalation Matrix
            </span>
          </h1>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            If you have a grievance, you can reach out to our Support Team for assistance. 
            Follow our escalation matrix for timely resolution.
          </p>
        </div>

        {/* Escalation Matrix */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Grievance Redressal Matrix</h2>
            </div>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              4-Level Escalation
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 bg-gradient-to-r from-blue-50 to-green-50 p-6 border-b border-gray-200">
              <div className="md:col-span-2">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Designation & Contact</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Address</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Contact Details</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Working Hours</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Level</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {grievanceMatrix.map((item, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-1 md:grid-cols-7 gap-4 p-6 hover:bg-blue-50/30 transition-colors duration-300"
                >
                  {/* Designation & Contact Person */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        index === 0 ? 'bg-blue-100 text-blue-600' :
                        index === 1 ? 'bg-green-100 text-green-600' :
                        index === 2 ? 'bg-yellow-100 text-yellow-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.designation}</h3>
                        <p className="text-sm text-gray-600">{item.contactPerson}</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{item.address}</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div>
                    <div className="space-y-2">
                      <a 
                        href={`tel:${item.contactNo}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm font-medium group-hover:underline">{item.contactNo}</span>
                      </a>
                      <a 
                        href={`mailto:${item.email}`}
                        className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors group"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm font-medium group-hover:underline truncate">{item.email}</span>
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700">{item.workingHours}</span>
                    </div>
                  </div>

                  {/* Level */}
                  <div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      index === 0 ? 'bg-blue-100 text-blue-700' :
                      index === 1 ? 'bg-green-100 text-green-700' :
                      index === 2 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {item.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Important Notes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {importantNotes.map((note, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-blue-100 text-blue-600' :
                    index === 1 ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {note.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{note.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Channels */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">External Escalation Channels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The abovementioned details facilitate complainants to approach concerned Research Analysts before filing complaint to SEBI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {escalationChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-200 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {channel.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {channel.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {channel.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <span>Visit Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-100">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Grievance Resolution Process</h2>
            </div>
            <div className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-blue-200">
              21 Working Days
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Contact Customer Care</h4>
              <p className="text-sm text-gray-600">Reach out to our support team</p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2"></div>
              <div className="relative z-10 bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Escalate if Needed</h4>
                <p className="text-sm text-gray-600">Follow escalation matrix</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2"></div>
              <div className="relative z-10 bg-white rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">SEBI SCORES</h4>
                <p className="text-sm text-gray-600">Escalate to regulatory portal</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ODR Portal</h4>
              <p className="text-sm text-gray-600">Final dispute resolution</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-200">
            <p className="text-center text-gray-600">
              <strong>Note:</strong> We aim to resolve all grievances within 21 working days from the date of receipt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceData;