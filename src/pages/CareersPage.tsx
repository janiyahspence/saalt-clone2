import React, { useState } from 'react';
import { VideoHero } from '../components/VideoHero';
import { Button } from '../components/Button';
import { jobOpenings, companyBenefits, employeeTestimonials } from '../data/careers';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import * as Icons from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const handleApply = (jobId: string) => {
    const job = jobOpenings.find(j => j.id === jobId);
    if (job) {
      const message = `I want to apply for the position of ${job.title} at ${job.location}. Please find my details:\n\nName: [Your Name]\nEmail: [Your Email]\nPhone: [Your Phone]\nExperience: [Years]\n\nI look forward to hearing from you.`;
      window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleGeneralApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `General Job Application\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition Interested: ${formData.position}\nExperience: ${formData.experience} years\n\nCover Letter:\n${formData.coverLetter}`;
    window.open(`https://wa.me/919709633313?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <VideoHero
        videoPlaceholder="/saalt-patna.jpg"
        title="Join Our Team"
        subtitle="Build your career with Bihar's premier hospitality group"
        height="h-[60vh]"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Why Work With Saalt Hotels</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
              Join a growing hospitality brand with 6 years of excellence, offering career growth,
              competitive benefits, and a supportive work environment across Bihar and Jharkhand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, idx) => {
              const IconComponent = (Icons as any)[benefit.icon];
              return (
                <div key={idx} className="bg-gradient-to-br from-[#f5f5f0] to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1a472a] rounded-full mb-4">
                    {IconComponent && <IconComponent className="text-white" size={28} />}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a472a] mb-3">{benefit.title}</h3>
                  <p className="text-[#2c3e50]">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1a472a] to-[#2d6e4b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Culture & Values</h2>
            <div className="w-24 h-1 bg-[#d4a574] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6+</div>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-lg">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <p className="text-lg">Properties</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100K+</div>
              <p className="text-lg">Happy Guests Served</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Guest-Centric Approach</h3>
              <p className="text-white/90">
                We believe in putting our guests first, and that starts with empowering our team members
                to deliver exceptional service. Your ideas and initiatives are valued and encouraged.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Growth & Learning</h3>
              <p className="text-white/90">
                We invest in our people through continuous training, skill development programs, and
                clear career progression paths. Many of our managers started in entry-level positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Hear From Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {employeeTestimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <p className="text-[#2c3e50] italic mb-4">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-[#1a472a]">{testimonial.name}</p>
                    <p className="text-sm text-[#2c3e50]">{testimonial.position}</p>
                    <p className="text-xs text-[#d4a574] mt-1">{testimonial.tenure} with Saalt Hotels</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a472a] mb-4">Current Job Openings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a574] to-[#c89356] mx-auto mb-6"></div>
            <p className="text-lg text-[#2c3e50]">
              Explore exciting opportunities across our properties in Bihar and Jharkhand
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white border-2 border-[#f5f5f0] rounded-2xl overflow-hidden hover:border-[#d4a574] transition-colors"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1a472a] mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-[#2c3e50]">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} className="text-[#d4a574]" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} className="text-[#d4a574]" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} className="text-[#d4a574]" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleApply(job.id)}
                      >
                        Apply Now
                      </Button>
                      <button
                        onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                        className="flex items-center gap-2 text-[#1a472a] hover:text-[#2d6e4b] font-medium"
                      >
                        {expandedJob === job.id ? (
                          <>
                            Less Details <ChevronUp size={18} />
                          </>
                        ) : (
                          <>
                            View Details <ChevronDown size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#f5f5f0] px-4 py-2 rounded-lg inline-block mb-4">
                    <span className="text-sm font-medium text-[#1a472a]">
                      Experience Required: {job.experience}
                    </span>
                  </div>

                  <p className="text-[#2c3e50] mb-4">{job.description}</p>

                  {expandedJob === job.id && (
                    <div className="border-t border-gray-200 pt-6 mt-6 space-y-6">
                      <div>
                        <h4 className="font-bold text-[#1a472a] mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#2c3e50]">
                              <span className="text-[#d4a574] mt-1">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#1a472a] mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#2c3e50]">
                              <span className="text-[#d4a574] mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#1a472a] mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#2c3e50]">
                              <span className="text-[#2d6e4b] mt-1">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#f5f5f0] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a472a] mb-4">Don't See Your Role?</h2>
            <p className="text-lg text-[#2c3e50]">
              Send us your resume and we'll keep you in mind for future opportunities
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleGeneralApplication} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2c3e50] mb-2">Years of Experience *</label>
                  <input
                    type="text"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Position Interested In *</label>
                <input
                  type="text"
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="e.g. Front Desk Executive, Chef, Manager"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2c3e50] mb-2">Cover Letter *</label>
                <textarea
                  required
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  rows={5}
                  placeholder="Tell us about yourself, your experience, and why you want to join Saalt Hotels"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a472a] focus:border-transparent"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a472a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Application Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Submit Application</h4>
                    <p className="text-white/80 text-sm">Apply online or send your resume via WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Initial Screening</h4>
                    <p className="text-white/80 text-sm">Our HR team reviews all applications within 5-7 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Interview</h4>
                    <p className="text-white/80 text-sm">Selected candidates are invited for in-person or video interviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Offer & Onboarding</h4>
                    <p className="text-white/80 text-sm">Successful candidates receive offer letters and join our team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Mail className="mb-4 text-[#d4a574]" size={48} />
              <h3 className="text-2xl font-bold mb-4">Contact HR Department</h3>
              <p className="text-white/90 mb-6">
                Have questions about careers at Saalt Hotels? Our HR team is here to help.
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <Mail size={18} className="text-[#d4a574]" />
                  <a href="mailto:hr@saalthotels.com" className="hover:text-[#d4a574] transition-colors">
                    hr@saalthotels.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Briefcase size={18} className="text-[#d4a574]" />
                  <span>Monday - Saturday: 10:00 AM - 6:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
