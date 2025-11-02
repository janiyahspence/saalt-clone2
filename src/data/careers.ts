export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: 'front-desk-patna',
    title: 'Front Desk Executive',
    department: 'Front Office',
    location: 'Patliputra Saalt Hotel, Patna',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'We are looking for a friendly and professional Front Desk Executive to welcome guests and manage check-in/check-out processes at our flagship property in Patna.',
    responsibilities: [
      'Greet and welcome guests upon arrival',
      'Handle check-in and check-out procedures',
      'Manage room reservations and bookings',
      'Answer phone calls and respond to inquiries',
      'Coordinate with housekeeping and other departments',
      'Handle guest complaints and resolve issues promptly',
      'Maintain accurate records of guest information',
      'Process payments and maintain cash register'
    ],
    requirements: [
      'Graduate in Hotel Management or related field',
      '1-3 years of front desk experience in hotels',
      'Excellent communication skills in English and Hindi',
      'Proficiency in hotel management software',
      'Professional appearance and demeanor',
      'Ability to work in shifts including nights and weekends',
      'Strong problem-solving skills',
      'Customer service oriented attitude'
    ],
    benefits: [
      'Competitive salary package',
      'Health insurance',
      'Performance bonuses',
      'Career growth opportunities',
      'Staff meals provided',
      'Uniform provided',
      'Paid leave',
      'Training and development programs'
    ]
  },
  {
    id: 'chef-narayana',
    title: 'Chef de Partie',
    department: 'Food & Beverage',
    location: 'Narayana Greens Resort, Bodh Gaya',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Join our fine dining restaurant at Narayana Greens Resort as Chef de Partie. We need an experienced chef specializing in multi-cuisine preparation.',
    responsibilities: [
      'Prepare high-quality dishes according to menu',
      'Manage a specific section of the kitchen',
      'Train and supervise junior kitchen staff',
      'Ensure food quality and presentation standards',
      'Maintain kitchen hygiene and safety standards',
      'Manage inventory for your section',
      'Create new dishes and menu items',
      'Coordinate with other kitchen departments'
    ],
    requirements: [
      'Culinary degree or diploma',
      '3-5 years of experience in multi-cuisine cooking',
      'Expertise in Indian, Chinese, and Continental cuisine',
      'Knowledge of food safety and hygiene practices',
      'Ability to work under pressure',
      'Creative and passionate about food',
      'Team player with leadership skills',
      'Willingness to work flexible hours'
    ],
    benefits: [
      'Attractive salary package',
      'Accommodation provided',
      'Health and accident insurance',
      'Performance incentives',
      'Annual bonus',
      'Career advancement opportunities',
      'Continuous skill development',
      'Staff meals and uniform'
    ]
  },
  {
    id: 'housekeeping-supervisor',
    title: 'Housekeeping Supervisor',
    department: 'Housekeeping',
    location: 'All Properties',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Seeking an experienced Housekeeping Supervisor to manage room attendants and ensure impeccable cleanliness standards across our properties.',
    responsibilities: [
      'Supervise housekeeping staff and daily operations',
      'Inspect guest rooms and public areas',
      'Ensure cleanliness and maintenance standards',
      'Train new housekeeping staff',
      'Manage linen and supplies inventory',
      'Coordinate with front desk for room status',
      'Handle guest requests and complaints',
      'Prepare duty rosters and schedules'
    ],
    requirements: [
      'Diploma in Hotel Management preferred',
      '2-4 years of housekeeping experience',
      'Previous supervisory experience required',
      'Knowledge of cleaning products and equipment',
      'Attention to detail and quality standards',
      'Good communication and leadership skills',
      'Physical stamina for walking and standing',
      'Flexible with working hours'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance coverage',
      'Annual performance bonus',
      'Career progression path',
      'Staff accommodation (if needed)',
      'Uniform and meals provided',
      'Training opportunities',
      'Paid time off'
    ]
  },
  {
    id: 'sales-executive',
    title: 'Sales & Marketing Executive',
    department: 'Sales & Marketing',
    location: 'Patna (covering all properties)',
    type: 'Full-time',
    experience: '2-5 years',
    description: 'Dynamic Sales & Marketing Executive needed to promote our hotels, generate leads, and build relationships with corporate clients and travel agents.',
    responsibilities: [
      'Generate leads and acquire new clients',
      'Develop relationships with corporate clients',
      'Coordinate with travel agents and tour operators',
      'Organize site visits and property tours',
      'Prepare proposals and quotations',
      'Achieve monthly and annual sales targets',
      'Attend industry events and exhibitions',
      'Maintain customer database and follow-ups'
    ],
    requirements: [
      'Graduate in any field, MBA preferred',
      '2-5 years of hotel sales experience',
      'Excellent communication and negotiation skills',
      'Knowledge of Bihar and Jharkhand market',
      'Proficiency in MS Office',
      'Own vehicle preferred',
      'Self-motivated and target-oriented',
      'Willingness to travel extensively'
    ],
    benefits: [
      'Base salary plus attractive incentives',
      'Travel allowance',
      'Mobile phone allowance',
      'Health insurance',
      'Performance bonuses',
      'Career growth opportunities',
      'Training and conferences',
      'Company vehicle (for senior positions)'
    ]
  },
  {
    id: 'event-coordinator',
    title: 'Event Coordinator',
    department: 'Events',
    location: 'Narayana Greens Resort, Bodh Gaya',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Creative and organized Event Coordinator to plan and execute weddings, conferences, and special events at our premier resort.',
    responsibilities: [
      'Meet with clients to understand event requirements',
      'Plan and coordinate all aspects of events',
      'Manage vendor relationships and contracts',
      'Oversee event setup and execution',
      'Coordinate with catering, decoration, and AV teams',
      'Manage event budgets and timelines',
      'Handle on-site event management',
      'Ensure client satisfaction and resolve issues'
    ],
    requirements: [
      'Degree in Event Management or Hospitality',
      '1-3 years of event planning experience',
      'Experience with weddings and conferences preferred',
      'Excellent organizational and multitasking skills',
      'Creative with eye for detail',
      'Strong communication and interpersonal skills',
      'Ability to work under pressure',
      'Flexible with working hours and weekends'
    ],
    benefits: [
      'Competitive salary package',
      'Performance incentives on events',
      'Health insurance',
      'Accommodation provided',
      'Professional development opportunities',
      'Networking opportunities',
      'Meals and uniform',
      'Annual bonus'
    ]
  },
  {
    id: 'accounts-manager',
    title: 'Accounts Manager',
    department: 'Finance',
    location: 'Patna (Head Office)',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Experienced Accounts Manager to oversee financial operations, reporting, and compliance for all Saalt Group properties.',
    responsibilities: [
      'Manage day-to-day accounting operations',
      'Prepare financial reports and statements',
      'Oversee accounts payable and receivable',
      'Ensure compliance with tax regulations',
      'Manage payroll and vendor payments',
      'Coordinate with auditors and tax consultants',
      'Implement financial controls and procedures',
      'Supervise accounts team members'
    ],
    requirements: [
      'CA/ICWA or M.Com with 5-8 years experience',
      'Experience in hospitality industry preferred',
      'Proficiency in Tally, MS Excel, and accounting software',
      'Knowledge of GST and tax laws',
      'Strong analytical and problem-solving skills',
      'Attention to detail and accuracy',
      'Leadership and team management skills',
      'Excellent communication skills'
    ],
    benefits: [
      'Attractive salary package',
      'Health insurance for family',
      'Performance bonuses',
      'Retirement benefits',
      'Professional certification support',
      'Career advancement opportunities',
      'Annual leave entitlement',
      'Office timings (no shift work)'
    ]
  }
];

export const companyBenefits = [
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance coverage for employees and their families',
    icon: 'Heart'
  },
  {
    title: 'Career Growth',
    description: 'Clear career progression paths and opportunities to grow within the organization',
    icon: 'TrendingUp'
  },
  {
    title: 'Training & Development',
    description: 'Regular training programs and workshops to enhance your skills',
    icon: 'GraduationCap'
  },
  {
    title: 'Work-Life Balance',
    description: 'Paid time off, annual leave, and flexible scheduling where possible',
    icon: 'Scale'
  },
  {
    title: 'Staff Accommodation',
    description: 'Accommodation provided for outstation employees at select properties',
    icon: 'Home'
  },
  {
    title: 'Performance Bonuses',
    description: 'Annual performance-based bonuses and incentive programs',
    icon: 'Award'
  }
];

export const employeeTestimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'Front Office Manager',
    tenure: '5 years',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    quote: 'Saalt Hotels has been an amazing place to grow my career. The management truly cares about employee development and provides excellent opportunities for advancement.'
  },
  {
    name: 'Priya Singh',
    position: 'Executive Chef',
    tenure: '4 years',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    quote: 'The creative freedom and support I receive here is incredible. Narayana Greens gave me the platform to showcase my culinary skills and innovate constantly.'
  },
  {
    name: 'Amit Sharma',
    position: 'Sales Executive',
    tenure: '3 years',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    quote: 'The incentive structure and growth opportunities are fantastic. I started as a sales executive and now lead the entire sales team for Bihar operations.'
  }
];
