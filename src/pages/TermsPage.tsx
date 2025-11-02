import React from 'react';
import { VideoHero } from '../components/VideoHero';
import { FileText, CreditCard, XCircle, AlertTriangle, Scale, UserCheck, Clock, Phone } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: [
        'By accessing our website, making a reservation, or staying at any Saalt Group property, you agree to be bound by these Terms and Conditions.',
        'If you do not agree with any part of these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.',
        'Your continued use of our services after changes constitutes acceptance of the modified terms.',
      ],
    },
    {
      icon: UserCheck,
      title: '2. Booking and Reservations',
      content: [
        'All bookings are subject to availability and confirmation from Saalt Group of Hotels.',
        'You must be at least 18 years old to make a reservation.',
        'Valid government-issued photo identification is required at check-in for all guests.',
        'Reservation confirmations will be sent via email or SMS. Please verify all details upon receipt.',
        'Special requests (room location, bed type, etc.) are subject to availability and cannot be guaranteed.',
        'Group bookings (5+ rooms) may be subject to different terms and require advance payment.',
      ],
    },
    {
      icon: CreditCard,
      title: '3. Payment Terms',
      content: [
        'Full payment or advance deposit is required at the time of booking as specified during reservation.',
        'We accept major credit cards, debit cards, UPI, net banking, and cash payments at the property.',
        'All prices are quoted in Indian Rupees (INR) and include applicable taxes unless stated otherwise.',
        'Promotional rates and special offers are subject to specific terms and blackout dates.',
        'Currency exchange rates (for international bookings) are determined at the time of payment processing.',
        'Additional charges for extra services, minibar, room service, or damages will be billed separately.',
        'Invoices will be provided upon request for business travelers requiring documentation.',
      ],
    },
    {
      icon: XCircle,
      title: '4. Cancellation and Refund Policy',
      content: [
        'Standard Cancellation: Free cancellation up to 48 hours before check-in date for full refund.',
        'Late Cancellation: Cancellations within 48 hours of check-in will incur a charge of one night\'s accommodation.',
        'No-Show: Failure to check-in without prior cancellation will result in full booking amount forfeiture.',
        'Non-Refundable Rates: Bookings made at special promotional or non-refundable rates cannot be cancelled or modified.',
        'Event Bookings: Wedding and event cancellations are subject to separate terms outlined in the event contract.',
        'Peak Season: Different cancellation policies may apply during festivals, holidays, and peak tourist seasons.',
        'Refunds will be processed within 7-10 business days to the original payment method.',
        'Force Majeure: In cases of natural disasters or government restrictions, flexible cancellation policies may apply.',
      ],
    },
    {
      icon: Clock,
      title: '5. Check-in and Check-out',
      content: [
        'Standard check-in time: 2:00 PM | Standard check-out time: 11:00 AM',
        'Early check-in and late check-out are subject to availability and may incur additional charges.',
        'Valid photo identification (Aadhar Card, Passport, Driving License) is mandatory for all guests.',
        'International guests must present passport and valid visa documents.',
        'Local police registration may be required for certain categories of guests as per local regulations.',
        'Maximum occupancy limits per room must be strictly observed for safety and comfort.',
      ],
    },
    {
      icon: AlertTriangle,
      title: '6. Guest Conduct and Responsibilities',
      content: [
        'Guests must conduct themselves in a respectful manner and not disturb other guests.',
        'Smoking is prohibited in all rooms and indoor areas. Designated smoking zones are available.',
        'Pets are not permitted unless explicitly stated and prior approval obtained.',
        'Illegal activities, including possession of prohibited substances, will result in immediate eviction and legal action.',
        'Guests are liable for any damage to hotel property, including rooms, furniture, and equipment.',
        'Outside food and alcohol may not be permitted in certain areas; please check property-specific policies.',
        'Visitors to guest rooms must be registered at the front desk and may have time restrictions.',
        'Guests must comply with all safety protocols, including fire safety and emergency evacuation procedures.',
      ],
    },
    {
      icon: Scale,
      title: '7. Liability and Disclaimer',
      content: [
        'Saalt Group is not liable for loss, theft, or damage to personal belongings. Use in-room safes for valuables.',
        'We are not responsible for disruptions due to natural disasters, power outages, or circumstances beyond our control.',
        'Medical emergencies: While we provide first aid, we are not responsible for medical conditions or treatment.',
        'Swimming pools, fitness facilities, and recreational areas are used at guest\'s own risk.',
        'We do not guarantee uninterrupted internet connectivity or specific bandwidth speeds.',
        'Information about local attractions is provided as a courtesy; we are not liable for third-party services.',
        'Maximum liability for any claim shall not exceed the total amount paid for your reservation.',
      ],
    },
    {
      icon: UserCheck,
      title: '8. Privacy and Data Protection',
      content: [
        'Personal information is collected and used in accordance with our Privacy Policy.',
        'Guest data may be shared with government authorities as required by law.',
        'We use cookies and tracking technologies to improve website functionality and user experience.',
        'Marketing communications will only be sent to guests who have opted in to receive them.',
        'You have the right to access, correct, or delete your personal information by contacting us.',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patliputra-properties.jpg"
        title="Terms and Conditions"
        subtitle="Please Read Carefully Before Booking"
        height="h-[50vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-[#d4a574]" size={32} />
              <h2 className="text-3xl font-bold text-[#1a472a]">Terms and Conditions</h2>
            </div>
            <p className="text-[#2c3e50] leading-relaxed mb-4">
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <p className="text-[#2c3e50] leading-relaxed mb-4">
              <strong>Last Updated:</strong> January 1, 2025
            </p>
            <p className="text-[#2c3e50] leading-relaxed">
              Welcome to Saalt Group of Hotels. These Terms and Conditions govern your use of our website and
              services. Please read them carefully before making a reservation or using our facilities.
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

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Dispute Resolution</h3>
              <p className="leading-relaxed mb-4">
                Any disputes arising from these terms shall be resolved through good-faith negotiation. If a
                resolution cannot be reached, disputes shall be subject to arbitration in Patna, Bihar, India.
              </p>
              <p className="leading-relaxed">
                These terms are governed by the laws of India, and courts in Patna shall have exclusive
                jurisdiction.
              </p>
            </div>

            <div className="bg-[#f5f5f0] rounded-2xl p-8">
              <Phone className="text-[#d4a574] mb-4" size={32} />
              <h3 className="text-2xl font-bold text-[#1a472a] mb-4">Questions?</h3>
              <p className="text-[#2c3e50] leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-[#2c3e50]">
                <p>Email: info@saalthotels.com</p>
                <p>Phone: +91 9709633313</p>
                <p>Address: Patliputra Colony, Patna, Bihar</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mt-8 border-2 border-[#d4a574]">
            <p className="text-[#2c3e50] text-center leading-relaxed">
              <strong>Acknowledgment:</strong> By proceeding with a reservation or using our services, you
              acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as
              well as our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
