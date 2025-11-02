import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { Shield, Eye, Lock, Cookie, UserCheck, Mail, FileText, AlertCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: '1. Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, postal address, date of birth, and government-issued identification for booking purposes.',
        'Payment Information: Credit/debit card details, billing address, and transaction information processed securely through our payment partners.',
        'Booking Details: Check-in/check-out dates, room preferences, special requests, and guest count.',
        'Communication Data: Correspondence via email, phone, WhatsApp, or other messaging platforms.',
        'Technical Data: IP address, browser type, device information, and website usage patterns collected through cookies and analytics tools.',
      ],
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: [
        'Process and manage your reservations, bookings, and event arrangements.',
        'Communicate with you about your stay, send booking confirmations, and provide customer support.',
        'Process payments and prevent fraudulent transactions.',
        'Send promotional offers, newsletters, and updates about our properties and services (with your consent).',
        'Improve our website functionality, services, and guest experiences through analytics.',
        'Comply with legal obligations and respond to lawful requests from authorities.',
      ],
    },
    {
      icon: Lock,
      title: '3. Data Security',
      content: [
        'We implement industry-standard security measures including SSL encryption for data transmission.',
        'Access to personal information is restricted to authorized personnel only.',
        'Payment information is processed through PCI-DSS compliant payment gateways.',
        'Regular security audits and updates to protect against unauthorized access.',
        'Secure servers with firewall protection and intrusion detection systems.',
        'While we take extensive precautions, no internet transmission is completely secure. We cannot guarantee absolute security.',
      ],
    },
    {
      icon: Cookie,
      title: '4. Cookies and Tracking',
      content: [
        'Essential Cookies: Required for website functionality, booking process, and security.',
        'Analytics Cookies: Help us understand how visitors use our website to improve user experience.',
        'Marketing Cookies: Used to deliver personalized advertisements and promotional content.',
        'Third-Party Cookies: May be set by external services like Google Analytics, payment processors, or social media platforms.',
        'You can control cookie preferences through your browser settings, though disabling essential cookies may affect website functionality.',
      ],
    },
    {
      icon: UserCheck,
      title: '5. Third-Party Sharing',
      content: [
        'Payment Processors: To facilitate secure online transactions.',
        'Service Providers: Including email services, analytics platforms, and customer relationship management systems.',
        'Legal Requirements: When required by law, court order, or governmental authorities.',
        'Business Transfers: In case of merger, acquisition, or sale of assets.',
        'Marketing Partners: With your explicit consent for promotional purposes.',
        'We never sell your personal information to third parties for their marketing purposes.',
      ],
    },
    {
      icon: Shield,
      title: '6. Your Rights and Choices',
      content: [
        'Access: Request copies of personal information we hold about you.',
        'Correction: Update or correct inaccurate personal information.',
        'Deletion: Request deletion of your personal data (subject to legal retention requirements).',
        'Objection: Opt-out of marketing communications at any time.',
        'Portability: Request transfer of your data to another service provider.',
        'Restriction: Request limitation of processing under certain circumstances.',
        'To exercise these rights, contact us at info@saalthotels.com or +91 9709633313.',
      ],
    },
    {
      icon: AlertCircle,
      title: '7. Data Retention',
      content: [
        'Booking and transaction records are retained for 7 years for accounting and legal compliance.',
        'Marketing communications data is retained until you unsubscribe or request deletion.',
        'Website analytics data is typically retained for 26 months.',
        'Guest feedback and reviews may be retained indefinitely for service improvement.',
        'Data required for ongoing services or legal obligations will be retained as necessary.',
      ],
    },
    {
      icon: Mail,
      title: '8. Contact Us',
      content: [
        'If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:',
        'Email: info@saalthotels.com',
        'Phone: +91 9709633313 / +91 7909046993',
        'Address: Patliputra Colony, Patna, Bihar, India',
        'We will respond to your inquiry within 30 days of receipt.',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patliputra-properties.jpg"
        title="Privacy Policy"
        subtitle="Your Privacy is Our Priority"
        height="h-[50vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-[#d4a574]" size={32} />
              <h2 className="text-3xl font-bold text-[#1a472a]">Privacy Policy</h2>
            </div>
            <p className="text-[#2c3e50] leading-relaxed mb-4">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="text-[#2c3e50] leading-relaxed mb-4">
              <strong>Last Updated:</strong> January 1, 2025
            </p>
            <p className="text-[#2c3e50] leading-relaxed">
              Saalt Group of Hotels ("we," "us," or "our") is committed to protecting your privacy and ensuring the
              security of your personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website, make a reservation, or stay at any of our
              properties.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-3 rounded-full flex-shrink-0">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a472a] mt-1">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#2c3e50] leading-relaxed">
                      <div className="w-2 h-2 bg-[#d4a574] rounded-full flex-shrink-0 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] rounded-2xl p-8 mt-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h3>
            <p className="leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
              legal requirements, or other factors. We will notify you of any material changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="leading-relaxed">
              Your continued use of our website and services after any changes indicates your acceptance of the
              updated Privacy Policy.
            </p>
          </div>

          <div className="bg-[#f5f5f0] rounded-2xl p-8 mt-8 text-center">
            <p className="text-[#2c3e50] text-sm leading-relaxed">
              By using our website and services, you acknowledge that you have read, understood, and agree to be
              bound by this Privacy Policy. If you do not agree with this policy, please do not use our website or
              services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
