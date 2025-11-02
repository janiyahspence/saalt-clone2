import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { ChevronDown, ChevronUp, HelpCircle, CreditCard, Calendar, MapPin, UtensilsCrossed, Wifi, Shield, Gift, Users, Phone, Car, ClipboardList } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const faqSections = [
    {
      icon: Calendar,
      title: 'Booking & Reservations',
      questions: [
        {
          id: 'book-1',
          question: 'How can I make a reservation?',
          answer: 'You can book directly through our website, call us at +91 9709633313, message us on WhatsApp, or email info@saalthotels.com. We recommend booking in advance, especially during peak seasons and festivals.',
        },
        {
          id: 'book-2',
          question: 'How far in advance should I book?',
          answer: 'For regular stays, we recommend booking at least 1-2 weeks in advance. For weddings and large events, book 3-6 months ahead. During festival seasons (Chhath Puja, Diwali) and peak pilgrimage times, book as early as possible.',
        },
        {
          id: 'book-3',
          question: 'Can I modify or cancel my reservation?',
          answer: 'Yes, you can modify or cancel up to 48 hours before check-in for a full refund. Cancellations within 48 hours incur one night\'s charge. Special promotional rates may have different cancellation policies.',
        },
        {
          id: 'book-4',
          question: 'Do you offer group booking discounts?',
          answer: 'Yes, we offer special rates for group bookings of 5+ rooms. Contact our reservations team for customized packages for corporate groups, tour groups, or wedding parties.',
        },
      ],
    },
    {
      icon: CreditCard,
      title: 'Payment & Pricing',
      questions: [
        {
          id: 'pay-1',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, Amex), debit cards, UPI payments (Google Pay, PhonePe, Paytm), net banking, and cash at the property. Online payments are processed through secure gateways.',
        },
        {
          id: 'pay-2',
          question: 'When is payment required?',
          answer: 'For online bookings, full payment or advance deposit (typically 30-50%) is required at the time of reservation. The remaining balance can be paid at check-in. Event bookings require advance payment as per the contract.',
        },
        {
          id: 'pay-3',
          question: 'Are taxes included in the room rates?',
          answer: 'Room rates quoted on our website include GST (12% on rooms below ₹7,500, 18% above). Additional service charges or tourism fees may apply. Final invoice will show complete breakdown.',
        },
        {
          id: 'pay-4',
          question: 'Do you charge a security deposit?',
          answer: 'Yes, a refundable security deposit of ₹1,000-2,000 (or credit card pre-authorization) is taken at check-in for incidentals. It\'s refunded at checkout after room inspection.',
        },
      ],
    },
    {
      icon: MapPin,
      title: 'Check-in & Check-out',
      questions: [
        {
          id: 'checkin-1',
          question: 'What are the check-in and check-out times?',
          answer: 'Standard check-in is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges (typically 50% of room rate for late checkout until 6 PM).',
        },
        {
          id: 'checkin-2',
          question: 'What documents are required at check-in?',
          answer: 'All guests must present valid government-issued photo ID (Aadhar Card, Passport, Driving License, Voter ID). Foreign nationals must provide passport and visa. Couples may be asked for proof of relationship as per local regulations.',
        },
        {
          id: 'checkin-3',
          question: 'Can I check in early or check out late?',
          answer: 'Subject to availability, early check-in before 12 PM may be arranged. Late check-out until 2 PM is usually complimentary; beyond that, charges apply. Please request at the time of booking or contact the front desk.',
        },
        {
          id: 'checkin-4',
          question: 'What is the minimum age to check in?',
          answer: 'The primary guest must be at least 18 years old with valid ID. Minors can stay when accompanied by parents or legal guardians.',
        },
      ],
    },
    {
      icon: Users,
      title: 'Room & Amenities',
      questions: [
        {
          id: 'room-1',
          question: 'What amenities are included in the rooms?',
          answer: 'All rooms include air conditioning, flat-screen TV, complimentary WiFi, attached bathroom with hot water, toiletries, tea/coffee maker, and bottled water. Room categories vary by property - Deluxe and Suite rooms have additional amenities.',
        },
        {
          id: 'room-2',
          question: 'Do you provide airport/railway station transfers?',
          answer: 'Yes, we can arrange pick-up and drop services at additional cost. Rates vary by property and distance. Complimentary transfers may be included in certain packages. Book transfer service in advance.',
        },
        {
          id: 'room-3',
          question: 'Is WiFi available and free?',
          answer: 'Yes, complimentary high-speed WiFi is available throughout all properties including rooms, lobby, restaurant, and public areas. WiFi credentials are provided at check-in.',
        },
        {
          id: 'room-4',
          question: 'Can I request extra beds or cribs?',
          answer: 'Yes, extra beds/rollaway beds can be provided at additional charge (typically ₹500-800 per night). Baby cribs are available free of charge. Please request at booking time as availability is limited.',
        },
      ],
    },
    {
      icon: UtensilsCrossed,
      title: 'Dining & Food',
      questions: [
        {
          id: 'dining-1',
          question: 'Do you have on-site restaurants?',
          answer: 'Yes, all properties have multi-cuisine restaurants serving Indian, Chinese, and Continental dishes. Patliputra Saalt and Narayana Greens have multiple dining outlets. Room service is available at all properties.',
        },
        {
          id: 'dining-2',
          question: 'Are vegetarian and Jain food options available?',
          answer: 'Absolutely! We have extensive vegetarian menus, and Jain food (without onion/garlic) can be prepared on request. Our chefs are experienced in accommodating dietary preferences and restrictions.',
        },
        {
          id: 'dining-3',
          question: 'What are the restaurant timings?',
          answer: 'Breakfast: 7:00 AM - 10:30 AM, Lunch: 12:30 PM - 3:00 PM, Dinner: 7:00 PM - 11:00 PM. Room service operates 24/7 with limited menu during late hours. Timings may vary by property.',
        },
        {
          id: 'dining-4',
          question: 'Can I bring outside food and drinks?',
          answer: 'Outside food in rooms is generally allowed, but may not be permitted in public areas or during events. Outside alcohol is not permitted. Please check property-specific policies.',
        },
      ],
    },
    {
      icon: Gift,
      title: 'Special Requests & Services',
      questions: [
        {
          id: 'special-1',
          question: 'Can you arrange special celebrations (birthdays, anniversaries)?',
          answer: 'Yes! We offer room decoration packages, cakes, flowers, and candlelight dinners. Contact us 48 hours in advance with your requirements. Packages start from ₹2,500.',
        },
        {
          id: 'special-2',
          question: 'Do you accommodate guests with disabilities?',
          answer: 'We strive to be accessible to all guests. Some properties have wheelchair-accessible rooms and ramps. Please inform us of specific requirements at booking so we can make necessary arrangements.',
        },
        {
          id: 'special-3',
          question: 'Is laundry service available?',
          answer: 'Yes, laundry and dry-cleaning services are available at all properties. Express service (4-hour) available at extra charge. Charges vary by garment type.',
        },
        {
          id: 'special-4',
          question: 'Can you assist with travel arrangements and local tours?',
          answer: 'Yes, our travel desk can help book local sightseeing tours, pilgrimage packages, car rentals, and tickets for attractions. We can recommend reliable guides and drivers.',
        },
      ],
    },
    {
      icon: Users,
      title: 'Events & Weddings',
      questions: [
        {
          id: 'event-1',
          question: 'What event facilities do you offer?',
          answer: 'Narayana Greens has a 40,000 sq.ft garden for 3,500 guests, three banquet halls, and full catering. Patliputra Saalt has conference rooms and banquet facilities. Deoghar has smaller halls for intimate gatherings.',
        },
        {
          id: 'event-2',
          question: 'Do you provide wedding planning services?',
          answer: 'Yes, we have dedicated event planners who assist with venue setup, catering, decoration coordination, entertainment arrangements, and guest accommodation. Comprehensive wedding packages available.',
        },
        {
          id: 'event-3',
          question: 'Can you accommodate corporate events and conferences?',
          answer: 'Absolutely! We offer well-equipped conference halls with AV equipment, high-speed internet, presentation facilities, and business catering. Ideal for seminars, training sessions, and corporate meetings.',
        },
        {
          id: 'event-4',
          question: 'What is included in event packages?',
          answer: 'Event packages typically include venue rental, basic setup, seating arrangements, and catering. Additional services like decoration, entertainment, photography, and special lighting can be added.',
        },
      ],
    },
    {
      icon: Shield,
      title: 'Policies & Rules',
      questions: [
        {
          id: 'policy-1',
          question: 'Are pets allowed?',
          answer: 'Generally, pets are not permitted at our properties for hygiene and other guests\' comfort. Service animals are allowed with prior notification and proper documentation.',
        },
        {
          id: 'policy-2',
          question: 'Is smoking allowed?',
          answer: 'All rooms and indoor areas are non-smoking. Designated smoking areas are available outside. Smoking in non-smoking areas incurs a cleaning charge of ₹5,000-10,000.',
        },
        {
          id: 'policy-3',
          question: 'What is your visitor policy?',
          answer: 'Visitors must register at the front desk with valid ID. Daytime visitors (10 AM - 6 PM) are generally allowed in rooms. Overnight visitors require management approval and additional charges.',
        },
        {
          id: 'policy-4',
          question: 'What happens if I damage hotel property?',
          answer: 'Guests are responsible for any damage to rooms or property. Assessment will be made at checkout and charges applied accordingly. Intentional damage may result in police action.',
        },
      ],
    },
    {
      icon: Car,
      title: 'Transportation & Location',
      questions: [
        {
          id: 'transport-1',
          question: 'Is parking available?',
          answer: 'Yes, complimentary parking is available at all properties. Patliputra Saalt and Narayana Greens have spacious parking lots. Valet parking available at select properties.',
        },
        {
          id: 'transport-2',
          question: 'How far are you from major attractions?',
          answer: 'Locations vary: Patliputra Saalt is central in Patna near business district; Buddha Saalt is 2 km from Mahabodhi Temple; Deoghar Saalt is 4 km from Baidyanath Temple. Detailed location info on property pages.',
        },
        {
          id: 'transport-3',
          question: 'Can you arrange car rentals?',
          answer: 'Yes, we can arrange self-drive and chauffeur-driven car rentals through trusted partners. Options include sedans, SUVs, and tempo travelers for groups. Book 24 hours in advance.',
        },
      ],
    },
    {
      icon: Phone,
      title: 'Contact & Support',
      questions: [
        {
          id: 'contact-1',
          question: 'How can I contact you for urgent matters?',
          answer: 'Call our 24/7 helpline at +91 9709633313 or +91 7909046993. For WhatsApp, message the same number. Email info@saalthotels.com for non-urgent queries (response within 24 hours).',
        },
        {
          id: 'contact-2',
          question: 'Do you have 24-hour front desk service?',
          answer: 'Yes, all properties have 24-hour front desk service for check-ins, assistance, emergencies, and inquiries. Night managers are available for urgent requirements.',
        },
        {
          id: 'contact-3',
          question: 'How do I provide feedback or file a complaint?',
          answer: 'We value your feedback! You can speak to the front desk manager, email us, call our customer service, or leave reviews on our website or Google. We respond to all feedback within 48 hours.',
        },
        {
          id: 'contact-4',
          question: 'What if I left something at the hotel?',
          answer: 'Contact the property immediately at +91 9709633313. We maintain a lost and found department. Items are held for 90 days. Courier shipping can be arranged at guest\'s expense.',
        },
      ],
    },
    {
      icon: ClipboardList,
      title: 'General Information',
      questions: [
        {
          id: 'general-1',
          question: 'What makes Saalt Hotels different?',
          answer: '6 years of hospitality excellence, strategic locations near pilgrimage sites and business hubs, modern amenities with traditional values, diverse properties for every need, and commitment to genuine guest satisfaction.',
        },
        {
          id: 'general-2',
          question: 'Are your properties family-friendly?',
          answer: 'Absolutely! We welcome families and offer spacious rooms, kid-friendly menus, safe swimming pools (at select properties), and activity arrangements. Staff is trained to assist families with children.',
        },
        {
          id: 'general-3',
          question: 'Do you offer loyalty programs or membership benefits?',
          answer: 'We offer special rates for repeat guests and corporate accounts. Contact us to discuss membership benefits and corporate tie-ups. Subscribe to our newsletter for exclusive offers.',
        },
        {
          id: 'general-4',
          question: 'Is travel insurance recommended?',
          answer: 'While not mandatory, we recommend travel insurance covering trip cancellation, medical emergencies, and baggage loss, especially for international travelers and during monsoon season.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patliputra-properties.jpg"
        title="Frequently Asked Questions"
        subtitle="Find Answers to Common Questions About Our Services"
        height="h-[50vh]"
      />

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto text-[#d4a574] mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">How Can We Help You?</h2>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Browse through our comprehensive FAQ sections below. Can't find what you're looking for? Contact us
              directly at +91 9709633313 or info@saalthotels.com
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-[#1a472a] mb-4">Categories</h3>
                <div className="space-y-2">
                  {faqSections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setOpenSection(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                        openSection === index
                          ? 'bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] text-white'
                          : 'bg-[#f5f5f0] text-[#2c3e50] hover:bg-[#e5e5e0]'
                      }`}
                    >
                      <section.icon size={20} />
                      <span className="font-medium text-sm">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {faqSections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`mb-8 ${openSection === sectionIndex ? 'block' : 'hidden'}`}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] p-3 rounded-full">
                        <section.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a472a]">{section.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {section.questions.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(item.id)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f5f5f0] transition-colors"
                        >
                          <span className="font-semibold text-[#1a472a] pr-4">{item.question}</span>
                          {openQuestion === item.id ? (
                            <ChevronUp className="text-[#d4a574] flex-shrink-0" size={24} />
                          ) : (
                            <ChevronDown className="text-[#d4a574] flex-shrink-0" size={24} />
                          )}
                        </button>
                        {openQuestion === item.id && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-200">
                              <p className="text-[#2c3e50] leading-relaxed">{item.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1a472a] to-[#2d6e4b] rounded-2xl p-8 mt-12 text-white text-center">
            <Phone className="mx-auto mb-4 text-[#d4a574]" size={48} />
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 text-white/90">
              Our team is here to help you 24/7. Don't hesitate to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919709633313"
                className="inline-block bg-[#d4a574] hover:bg-[#c89356] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Us: +91 9709633313
              </a>
              <a
                href="https://wa.me/919709633313"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#1a472a] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
