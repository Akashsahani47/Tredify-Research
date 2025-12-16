'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Shield,
  Lock,
  FileText,
  AlertTriangle,
  Phone,
  Mail,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

const PrivacyPolicy = () => {
  const router = useRouter();

  const privacyPoints = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Respect for Privacy',
      content:
        'We understand and respect your privacy and are committed to protecting your personal information at all times.',
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: 'Data Security',
      content:
        'We take reasonable technical and organizational measures to protect your data, though no system can guarantee 100% security.',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Purpose Limitation',
      content:
        'Personal information is used only for the purposes you have consented to, including service delivery and communication.',
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: 'Risk Acknowledgement',
      content:
        'Any information shared online is done at your own risk despite our best efforts to ensure protection.',
    },
  ];

  const policySections = [
    {
      title: 'Information Collection & Use',
      content:
        'We may collect personal information such as name, email address, and mobile number when you interact with our website, submit inquiry forms, or subscribe to our services.',
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      title: 'Communication Consent',
      content:
        'By submitting an inquiry form or subscribing to our services, you consent to receive communication via phone call, SMS, WhatsApp, or email, even if registered under DND.',
      icon: <Phone className="w-5 h-5" />,
    },
    {
      title: 'Marketing & Updates',
      content:
        'We may use your email address or mobile number to send newsletters, surveys, contest updates, or information about new services that may benefit you.',
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: 'Data Sharing',
      content:
        'Your information may be shared with regulatory authorities or related organizations where legally required or necessary for compliance.',
      icon: <ExternalLink className="w-5 h-5" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <h3 className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Privacy Policy
            </h3>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy & Data Protection
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Tredify Research and Finance Private Limited is committed to safeguarding your privacy and personal data.
          </p>
        </div>

        {/* Key Privacy Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {privacyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center text-blue-600">
                  {point.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm">
                  {point.title}
                </h4>
              </div>
              <p className="text-gray-600 text-xs">{point.content}</p>
            </div>
          ))}
        </div>

        {/* Policy Details */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Detailed Privacy Policy
              </h2>
              <p className="text-gray-600">
                How we collect, use, and protect your information
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {policySections.map((section, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50"
              >
                <div className="text-blue-600 mt-1">{section.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    {section.title}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        
      </div>
    </section>
  );
};

export default PrivacyPolicy;
