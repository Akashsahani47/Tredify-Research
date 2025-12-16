'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  RefreshCcw,
  AlertTriangle,
  Shield,
  FileText,
  Phone,
  Mail,
  XCircle,
} from 'lucide-react';

const RefundPolicy = () => {
  const router = useRouter();

  const refundPoints = [
    {
      icon: <XCircle className="w-5 h-5" />,
      title: 'All Sales Are Final',
      content:
        'All sales are final. We do not offer refunds for the paid period of services already availed by the client.',
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: 'No Performance Guarantee',
      content:
        'We do not provide any 100% guarantee on our calls or recommendations. Trading and investment are subject to market risk.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'SEBI Refund Guidelines',
      content:
        'As per SEBI guidelines, refunds are applicable only for the unused portion of the subscription period on a pro-rata basis.',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'No Refund for Used Services',
      content:
        'Refunds will not be provided for the period of services already availed, irrespective of satisfaction or trade outcomes.',
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
              Refund Policy
            </h3>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Refund & Cancellation Policy
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Transparent refund guidelines as per SEBI regulations and company policies.
          </p>
        </div>

        {/* Key Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {refundPoints.map((point, index) => (
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

        {/* Detailed Policy */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <RefreshCcw className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Detailed Refund Terms
              </h2>
              <p className="text-gray-600">
                Please read carefully before making any payment
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                If a client requests cancellation, refund (if applicable) will be calculated on a pro-rata basis after deducting charges for services already availed, including applicable taxes and administrative fees.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                Trading and investment in securities markets are subject to market risks. Past performance is not indicative of future results.
              </p>
            </div>

            <div className="border-l-4 border-gray-500 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                Kindly make the payment only after reading all terms and conditions, disclaimers, privacy policy, and refund policy. There is no refund possible in any case whatsoever for services already availed.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 bg-white rounded-2xl shadow p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-4">
            Need Assistance?
          </h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+918770588941"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 87705 88941</span>
            </a>

            <div className="hidden sm:block text-gray-400">•</div>

            <a
              href="mailto:aayushtak116@gmail.com"
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>aayushtak116@gmail.com</span>
            </a>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default RefundPolicy;
