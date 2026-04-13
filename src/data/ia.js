export const IA = [
  {
    id: 'patient',
    title: "I'm a Patient",
    description: 'Find services, prepare for your visit, and access hospital information',
    icon: 'UserOutlined',
    children: [
      {
        id: 'find-service',
        title: 'Find a Service',
        description: 'Search for departments, consultants, and services across our hospitals',
        icon: 'SearchOutlined',
        children: [
          { id: 'department-directory', title: 'Department Directory', description: 'Search for and contact specific hospital departments across all our sites' },
          { id: 'staff-directory', title: 'Staff & Consultant Directory', description: 'Find information about consultants and staff members including their specialties and locations' },
          { id: 'search-az', title: 'Search A-Z', description: 'Browse all services and departments alphabetically' },
          { id: 'by-specialty', title: 'By Specialty', description: 'Find the right department by browsing our list of medical specialties' },
          {
            id: 'health-information',
            title: 'Health Information & Symptoms',
            description: 'For health information, symptom guidance, and conditions advice, NHS England provides comprehensive authoritative resources',
            handoff: true,
            handoffCards: [
              { title: 'NHS 111 Online — Symptom Checker', description: 'Answer questions about your symptoms to get advice on what to do next', url: 'https://111.nhs.uk' },
              { title: 'Conditions A–Z — NHS England', description: 'Find information about hundreds of health conditions, treatments, and medications', url: 'https://www.nhs.uk/conditions' },
              { title: 'When to Get Help', description: 'Guidance on when to call 999, 111, visit A&E, or see your GP', url: 'https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services' },
            ],
          },
        ],
      },
      {
        id: 'preparing-visit',
        title: 'Preparing for Your Visit',
        description: 'Everything you need to know before you arrive at hospital',
        icon: 'CalendarOutlined',
        children: [
          { id: 'visitor-info', title: 'Information for Your Visitors', description: 'Let your family and friends know what to expect when they come to see you' },
          { id: 'getting-here', title: 'Getting Here', description: 'Plan your journey with directions, parking, and public transport information' },
          { id: 'what-to-bring', title: 'What to Bring', description: 'A checklist of essential items to pack for your hospital visit or stay' },
          { id: 'on-the-day', title: 'On the Day', description: 'Find out what happens when you arrive and what to expect during your appointment' },
          { id: 'after-appointment', title: 'After Your Appointment', description: 'Understand your next steps, follow-up care, and how to access your records' },
        ],
      },
      {
        id: 'hospital-stay',
        title: 'Your Hospital Stay',
        description: 'Support and guidance for patients staying with us overnight or longer',
        icon: 'HomeOutlined',
        children: [
          { id: 'before-arrive', title: 'Before You Arrive', description: 'Prepare for your admission with our pre-arrival checklist and guidance' },
          { id: 'during-stay', title: 'During Your Stay', description: 'Find out about ward routines, meals, and how to stay connected with loved ones' },
          { id: 'going-home', title: 'Going Home', description: 'Information about discharge planning, follow-up care, and support at home' },
        ],
      },
      {
        id: 'hospital-info',
        title: 'Hospital-Level Information',
        description: 'Find specific information for each of our hospital sites',
        icon: 'BankOutlined',
        children: [
          { id: 'bri', title: 'Bristol Royal Infirmary (BRI)', description: 'Services, departments, and patient information for the Bristol Royal Infirmary' },
          { id: 'nbt', title: 'Southmead Hospital (NBT)', description: 'Services, departments, and patient information for Southmead Hospital' },
          { id: 'weston', title: 'Weston General Hospital', description: 'Services, departments, and patient information for Weston General Hospital' },
          { id: 'other-sites', title: 'Other Sites', description: 'Information for our other hospital locations and community sites across the region' },
        ],
      },
    ],
  },
  {
    id: 'visiting',
    title: "I'm Visiting",
    description: 'Plan your visit, find parking, and access facilities for visitors',
    icon: 'TeamOutlined',
    children: [
      {
        id: 'planning',
        title: 'Planning Your Visit',
        description: 'Everything you need to plan your visit to a patient',
        icon: 'CompassOutlined',
        children: [
          { id: 'need-to-know', title: 'What You Need to Know', description: 'An overview of visiting rules, procedures, and what to expect on arrival' },
          { id: 'find-department', title: 'Find a Department', description: 'Locate the ward or department you need to visit across our hospital sites' },
          {
            id: 'by-hospital',
            title: 'Visiting by Hospital',
            description: 'Get site-specific visiting information for each of our hospitals',
            children: [
              { id: 'bri-visiting', title: 'BRI Visiting Information', description: 'Visiting times, ward locations, and visitor guidance for Bristol Royal Infirmary' },
              { id: 'southmead-visiting', title: 'Southmead Visiting Information', description: 'Visiting times, ward locations, and visitor guidance for Southmead Hospital' },
              { id: 'weston-visiting', title: 'Weston Visiting Information', description: 'Visiting times, ward locations, and visitor guidance for Weston General Hospital' },
            ],
          },
        ],
      },
      {
        id: 'general-info',
        title: 'General Visiting Information',
        description: 'Policies, rules, and guidance for all hospital visitors',
        icon: 'InfoCircleOutlined',
        children: [
          { id: 'visiting-times', title: 'Visiting Times & Rules', description: 'Check visiting hours and current policies for wards and departments' },
          { id: 'what-to-bring', title: 'What to Bring', description: 'Guidance on appropriate items to bring and what is not permitted on wards' },
          { id: 'restrictions', title: 'Visiting Restrictions', description: 'Current restrictions including infection control and safeguarding policies' },
        ],
      },
      {
        id: 'getting-here',
        title: 'Getting Here & Parking',
        description: 'Directions, parking, and transport options for all our sites',
        icon: 'CarOutlined',
        children: [
          { id: 'parking', title: 'Parking for Visitors', description: 'Find parking options, costs, and accessibility information for each hospital site' },
          { id: 'public-transport', title: 'Public Transport', description: 'Bus, train, and cycle routes to reach our hospitals without a car' },
          { id: 'accessible', title: 'Accessible Routes & Parking', description: 'Blue badge parking, accessible drop-off points, and wheelchair-friendly routes' },
        ],
      },
      {
        id: 'facilities',
        title: 'Facilities for Visitors',
        description: 'Cafés, accommodation, and support facilities available to visitors',
        icon: 'CoffeeOutlined',
        children: [
          { id: 'family-rooms', title: 'Family Rooms', description: 'Dedicated family rooms and spaces available to relatives of patients' },
          { id: 'food-drink', title: 'Food & Drink', description: 'Cafés, restaurants, and vending machines available across our hospital sites' },
          { id: 'accommodation', title: 'Accommodation Nearby', description: 'Hotels, Ronald McDonald House, and other accommodation options for families' },
          { id: 'prayer', title: 'Prayer & Quiet Spaces', description: 'Chapel, prayer rooms, and quiet reflection spaces available at all our sites' },
        ],
      },
      {
        id: 'visiting-child',
        title: 'Visiting a Child',
        description: 'Specific guidance for visiting children and young patients',
        icon: 'HeartOutlined',
        children: [
          { id: 'parents-carers', title: 'Parents & Carers', description: 'Information for parents staying with a child in hospital, including overnight facilities' },
          { id: 'siblings', title: 'Siblings Visiting', description: 'Guidance on siblings visiting a child patient, including age restrictions and preparation' },
        ],
      },
      {
        id: 'seriously-ill',
        title: 'Visiting Someone Seriously Ill',
        description: 'Support and guidance for families of seriously ill patients',
        icon: 'MedicineBoxOutlined',
        children: [
          { id: 'icu', title: 'Intensive Care Visiting', description: 'What to expect when visiting a patient in our intensive care or critical care units' },
          { id: 'end-of-life', title: 'End of Life Care', description: 'Compassionate support and guidance for families during end of life care' },
        ],
      },
    ],
  },
  {
    id: 'concerned',
    title: "I'm Concerned About Care",
    description: 'Share feedback, make a complaint, or raise a patient safety concern',
    icon: 'ExclamationCircleOutlined',
    children: [
      {
        id: 'complaint',
        title: 'Making a Complaint',
        description: 'Find out how to formally raise a concern about your care or treatment',
        icon: 'MessageOutlined',
        children: [
          { id: 'how-to-complain', title: 'How to Complain', description: 'A step-by-step guide to making a formal complaint about your care or treatment' },
          { id: 'pals', title: 'Patient Advice & Liaison Service (PALS)', description: 'Get informal support and advice from our PALS team before making a formal complaint' },
          { id: 'escalation', title: 'External Escalation', description: 'Information about escalating your complaint to the Parliamentary and Health Service Ombudsman' },
        ],
      },
      {
        id: 'patient-safety',
        title: 'Patient Safety',
        description: 'Report a safety concern or find out about our patient safety work',
        icon: 'SafetyOutlined',
        children: [
          { id: 'reporting', title: 'Reporting a Concern', description: 'How to report a patient safety concern, whether you are a patient, visitor, or staff member' },
          { id: 'incidents', title: 'Patient Safety Incidents', description: 'Information about how we investigate and learn from patient safety incidents' },
          { id: 'never-events', title: 'Never Events', description: 'Our reporting and response to serious incidents that should never happen in healthcare' },
        ],
      },
      {
        id: 'feedback',
        title: 'Feedback & Compliments',
        description: 'Share your positive experiences or general feedback with us',
        icon: 'StarOutlined',
        children: [
          { id: 'share-experience', title: 'Share Your Experience', description: 'Tell us about your care experience to help us improve our services' },
          { id: 'friends-family', title: 'Friends & Family Test', description: 'Complete the NHS Friends and Family Test to rate your experience with us' },
        ],
      },
      {
        id: 'your-rights',
        title: 'Your Rights',
        description: 'Understand your rights as an NHS patient',
        icon: 'FileProtectOutlined',
        children: [
          { id: 'nhs-constitution', title: 'NHS Constitution', description: 'Your legal rights and the pledges the NHS makes to you as a patient' },
          { id: 'patient-rights', title: 'Patient Rights', description: 'Your rights regarding consent, confidentiality, and access to your health records' },
          { id: 'privacy', title: 'Privacy & Confidentiality', description: 'How we use, store, and protect your personal health information' },
        ],
      },
    ],
  },
  {
    id: 'private',
    title: 'Private Patients',
    description: 'Access world-class NHS expertise with private patient services',
    icon: 'CrownOutlined',
    children: [
      {
        id: 'services',
        title: 'Private Patient Services',
        description: 'Find out what private patient options are available at Bristol NHS Group',
        icon: 'MedicineBoxOutlined',
        children: [
          { id: 'what-we-offer', title: 'What We Offer', description: 'A range of private patient services and treatments available through our hospitals' },
          { id: 'pricing', title: 'Pricing & Estimates', description: 'Transparent pricing information and how to request a cost estimate for your treatment' },
          { id: 'insurance', title: 'Insurance & Self-Pay', description: 'Information for insured patients and self-paying patients about covering your costs' },
        ],
      },
      {
        id: 'book-consultation',
        title: 'Book a Consultation',
        description: 'Find a consultant and book your private appointment',
        icon: 'CalendarOutlined',
        children: [
          { id: 'find-consultant', title: 'Finding a Consultant', description: 'Search for consultants by specialty and find out about their private practice' },
          { id: 'appointment', title: 'Making an Appointment', description: 'How to book a private consultation or procedure at one of our hospitals' },
          { id: 'referral', title: 'Referral Information', description: 'Whether you need a GP referral and what to bring to your first appointment' },
        ],
      },
      {
        id: 'private-facilities',
        title: 'Private Patient Facilities',
        description: 'Comfortable private rooms and enhanced amenities for private patients',
        icon: 'HomeOutlined',
        children: [
          { id: 'private-rooms', title: 'Private Rooms', description: 'En-suite private rooms with enhanced comfort and privacy across our hospital sites' },
          { id: 'amenities', title: 'Amenities & Services', description: 'Enhanced meals, guest services, and additional amenities available to private patients' },
          { id: 'concierge', title: 'Concierge Support', description: 'Personal concierge support to help manage your stay and any additional requirements' },
        ],
      },
      {
        id: 'international',
        title: 'International Patients',
        description: 'Specialist support for patients travelling from abroad',
        icon: 'GlobalOutlined',
        children: [
          { id: 'international-services', title: 'Services for International Patients', description: 'Specialist care pathways and services designed for patients from outside the UK' },
          { id: 'travel', title: 'Travel & Accommodation', description: 'Guidance on travelling to Bristol and accommodation options for international patients' },
          { id: 'visa', title: 'Visa & Administrative Support', description: 'Help with medical visa applications and administrative requirements for international patients' },
        ],
      },
    ],
  },
  {
    id: 'research',
    title: 'Research',
    description: 'Clinical trials, innovation, and research at Bristol NHS Group',
    icon: 'ExperimentOutlined',
    children: [
      {
        id: 'clinical',
        title: 'Clinical Research',
        description: 'Find out about clinical trials and research studies you can participate in',
        icon: 'FileSearchOutlined',
        children: [
          { id: 'clinical-trials', title: 'Clinical Trials', description: 'Current clinical trials open to patients and how to find out if you are eligible' },
          { id: 'studies', title: 'Research Studies', description: 'Observational studies and other research projects underway at our hospitals' },
          { id: 'participate', title: 'Participate in Research', description: 'How to get involved in research and what participation means for you as a patient' },
        ],
      },
      {
        id: 'innovation',
        title: 'Research & Innovation',
        description: 'Our research themes, partnerships, and innovation programmes',
        icon: 'BulbOutlined',
        children: [
          { id: 'themes', title: 'Research Themes', description: 'Our key research priority areas and the clinical questions we are working to answer' },
          { id: 'partnerships', title: 'Innovation Partnerships', description: 'Collaborations with industry, universities, and NHS partners driving healthcare innovation' },
          { id: 'digital', title: 'Technology & Digital', description: 'How we use technology, data, and digital innovation to improve patient care' },
        ],
      },
      {
        id: 'for-researchers',
        title: 'For Researchers',
        description: 'Resources and support for researchers working with Bristol NHS Group',
        icon: 'ReadOutlined',
        children: [
          { id: 'governance', title: 'Research Governance', description: 'Governance frameworks, sponsorship, and oversight for research at our hospitals' },
          { id: 'ethics', title: 'Ethics & Approvals', description: 'Ethical approval processes and how to apply to conduct research at our sites' },
          { id: 'resources', title: 'Facilities & Resources', description: 'Research facilities, biobanks, and resources available to researchers at our hospitals' },
        ],
      },
      {
        id: 'research-news',
        title: 'Research News & Publications',
        description: 'Latest research news, published papers, and annual reports',
        icon: 'ReadOutlined',
        children: [
          { id: 'latest-research', title: 'Latest Research News', description: 'News and updates from our research teams across all specialties' },
          { id: 'papers', title: 'Published Papers', description: 'Links to peer-reviewed research papers produced by our clinical and academic teams' },
          { id: 'annual-report', title: 'Annual Research Report', description: 'Our annual summary of research activity, outputs, and highlights' },
        ],
      },
    ],
  },
  {
    id: 'work',
    title: 'Work With Us',
    description: 'Explore careers, volunteering, and student opportunities at Bristol NHS Group',
    icon: 'SolutionOutlined',
    children: [
      {
        id: 'vacancies',
        title: 'Current Vacancies',
        description: 'Search for jobs and find your next career opportunity with us',
        icon: 'SearchOutlined',
        children: [
          { id: 'search-jobs', title: 'Search All Jobs', description: 'Browse every current vacancy across all our hospital sites and departments' },
          { id: 'nursing', title: 'Nursing & Midwifery', description: 'Nursing, midwifery, and nursing associate roles across our hospitals' },
          { id: 'medical', title: 'Medical & Dental', description: 'Doctor, consultant, and dental roles at Bristol NHS Group' },
          { id: 'ahp', title: 'Allied Health Professionals', description: 'Physiotherapy, occupational therapy, radiography, and other AHP roles' },
          { id: 'corporate', title: 'Corporate & Support', description: 'Finance, HR, IT, facilities, and other corporate and support roles' },
        ],
      },
      {
        id: 'working-here',
        title: 'Working Here',
        description: 'Find out what it is like to work at Bristol NHS Group',
        icon: 'SmileOutlined',
        children: [
          { id: 'benefits', title: 'Benefits & Rewards', description: 'NHS pension, annual leave, staff discounts, and other benefits of working with us' },
          { id: 'culture', title: 'Our Culture & Values', description: 'The values that guide how we work and what makes Bristol NHS Group a great place to work' },
          { id: 'development', title: 'Career Development', description: 'Learning, development, and career progression opportunities for all our staff' },
          { id: 'flexible', title: 'Flexible Working', description: 'How we support flexible and agile working arrangements across our organisation' },
        ],
      },
      {
        id: 'volunteers',
        title: 'Volunteers',
        description: 'Make a difference by volunteering at one of our hospitals',
        icon: 'HeartOutlined',
        children: [
          { id: 'how-to-volunteer', title: 'How to Volunteer', description: 'Find out about the application process and what volunteering involves' },
          { id: 'opportunities', title: 'Current Volunteer Opportunities', description: 'Browse available volunteering roles across our hospital sites' },
          { id: 'stories', title: 'Volunteer Stories', description: 'Hear from our current volunteers about their experiences and the difference they make' },
        ],
      },
      {
        id: 'students',
        title: 'Students & Trainees',
        description: 'Placements, training, and education opportunities for students',
        icon: 'BookOutlined',
        children: [
          { id: 'placements', title: 'Placements', description: 'Clinical and non-clinical placement opportunities for students at all our sites' },
          { id: 'training', title: 'Education & Training Programmes', description: 'Postgraduate, continuing education, and professional development programmes' },
          { id: 'apprenticeships', title: 'Apprenticeships', description: 'Earn while you learn with NHS apprenticeship programmes across a range of roles' },
          { id: 'work-experience', title: 'Work Experience', description: 'Structured work experience programmes for school and college students' },
        ],
      },
    ],
  },
  {
    id: 'young-people',
    title: 'Young People',
    description: 'Health information, hospital guidance, and support for young people',
    icon: 'SmileOutlined',
    children: [
      {
        id: 'your-health',
        title: 'Your Health',
        description: 'Health information and advice written for young people',
        icon: 'HeartOutlined',
        children: [
          { id: 'info', title: 'Information for Young People', description: 'Health information written specifically for young people, in plain English' },
          { id: 'conditions', title: 'Conditions & Symptoms', description: 'Find information about common conditions and what your symptoms might mean' },
          { id: 'sexual-health', title: 'Sexual Health', description: 'Confidential information and services for young people about sexual health' },
          { id: 'mental-health', title: 'Mental Health & Wellbeing', description: 'Support, information, and services for young people experiencing mental health difficulties' },
        ],
      },
      {
        id: 'coming-to-hospital',
        title: 'Coming to Hospital',
        description: 'What to expect when you come to hospital as a young person',
        icon: 'MedicineBoxOutlined',
        children: [
          { id: 'what-to-expect', title: 'What to Expect', description: 'A friendly guide to what happens when you visit or stay in hospital' },
          { id: 'your-rights', title: 'Your Rights as a Young Person', description: 'Your rights around consent, confidentiality, and being involved in your care' },
          { id: 'bringing-carer', title: 'Bringing a Parent or Carer', description: 'Information about bringing someone with you and when you can be seen alone' },
        ],
      },
      {
        id: 'support',
        title: 'Support & Services',
        description: 'Specialist services and support available for young people',
        icon: 'TeamOutlined',
        children: [
          { id: 'young-carers', title: 'Young Carer Support', description: 'Support and services for young people who care for a family member' },
          { id: 'camhs', title: 'CAMHS', description: 'Child and Adolescent Mental Health Services — what they are and how to access them' },
          { id: 'support-groups', title: 'Support Groups', description: 'Peer support groups and community services for young people and their families' },
        ],
      },
      {
        id: 'parents',
        title: 'For Parents & Carers',
        description: 'Guidance and information for parents and carers of young patients',
        icon: 'UsergroupAddOutlined',
        children: [
          { id: 'child-health', title: 'Child Health Information', description: 'Health information to help you support your child through illness and hospital care' },
          { id: 'neonatal', title: 'Neonatal Care', description: 'Support and information for parents of premature or sick newborn babies' },
          { id: 'guides', title: 'Guides for Parents', description: 'Practical guides to help you navigate the healthcare system on behalf of your child' },
        ],
      },
    ],
  },
  {
    id: 'about',
    title: 'About Us',
    description: 'Who we are, our strategy, latest news, and how we work',
    icon: 'InfoCircleOutlined',
    children: [
      {
        id: 'who-we-are',
        title: 'Who We Are',
        description: 'Our hospitals, leadership, and organisational governance',
        icon: 'BankOutlined',
        children: [
          { id: 'our-hospitals', title: 'Our Hospitals & Sites', description: 'An overview of all Bristol NHS Group hospital sites and what each one specialises in' },
          { id: 'leadership', title: 'Leadership & Board', description: 'Meet our executive leadership team and non-executive board members' },
          { id: 'governance', title: 'Governance & Accountability', description: 'How we are structured, regulated, and accountable to patients and the public' },
          { id: 'vision', title: 'Our Vision & Values', description: 'The vision, mission, and values that guide everything we do at Bristol NHS Group' },
        ],
      },
      {
        id: 'news',
        title: 'News & Media',
        description: 'Latest news, press information, and media resources',
        icon: 'NotificationOutlined',
        children: [
          {
            id: 'latest-news',
            title: 'Latest News',
            description: 'News and announcements from across Bristol NHS Group',
            children: [
              { id: 'trust-news', title: 'Trust-Wide News', description: 'News and announcements affecting all Bristol NHS Group hospitals and services' },
              { id: 'bri-news', title: 'BRI News', description: 'Latest news and updates from Bristol Royal Infirmary' },
              { id: 'southmead-news', title: 'Southmead News', description: 'Latest news and updates from Southmead Hospital' },
              { id: 'weston-news', title: 'Weston News', description: 'Latest news and updates from Weston General Hospital' },
            ],
          },
          { id: 'press', title: 'Press Office', description: 'Contact our media team and access press releases and resources' },
          { id: 'social', title: 'Social Media', description: 'Follow Bristol NHS Group on social media for updates and stories' },
          { id: 'campaigns', title: 'Campaigns', description: 'Current health campaigns and public health initiatives from Bristol NHS Group' },
        ],
      },
      {
        id: 'strategy',
        title: 'Our Strategy',
        description: 'Plans, reports, and strategic priorities for Bristol NHS Group',
        icon: 'FileTextOutlined',
        children: [
          { id: 'annual-reports', title: 'Annual Reports', description: 'Download our annual reports, including financial statements and performance data' },
          { id: 'quality', title: 'Quality Accounts', description: 'Our annual Quality Account report on the quality of care we provide' },
          { id: 'long-term-plan', title: 'NHS Long Term Plan', description: 'How we are implementing the NHS Long Term Plan at Bristol NHS Group' },
          { id: 'edi', title: 'Equality, Diversity & Inclusion', description: 'Our EDI strategy, workforce race equality data, and inclusion initiatives' },
        ],
      },
      {
        id: 'sustainability',
        title: 'Sustainability',
        description: 'Our commitment to environmental sustainability and net zero',
        icon: 'GlobalOutlined',
        children: [
          { id: 'green-plans', title: 'Our Green Plans', description: 'Our NHS Green Plan and how we are reducing our environmental impact' },
          { id: 'environmental', title: 'Environmental Policy', description: 'Our policies and commitments to environmental sustainability' },
          { id: 'carbon', title: 'Carbon Net Zero', description: 'Our pathway to achieving NHS carbon net zero targets by 2040 and 2045' },
        ],
      },
      {
        id: 'partners',
        title: 'Working With Partners',
        description: 'Our collaborations with the NHS, universities, and other organisations',
        icon: 'ApartmentOutlined',
        children: [
          { id: 'icb', title: 'Integrated Care Board', description: 'How we work with the Bristol, North Somerset & South Gloucestershire ICB' },
          { id: 'ahsn', title: 'Academic Health Science Network', description: 'Our partnership with the West of England AHSN to accelerate innovation' },
          { id: 'university', title: 'University Partnerships', description: 'Our academic partnerships with the University of Bristol and UWE Bristol' },
        ],
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with us — find the right contact for your query',
    icon: 'PhoneOutlined',
    children: [
      {
        id: 'general',
        title: 'General Enquiries',
        description: 'Contact us for general queries about our hospitals and services',
        icon: 'MailOutlined',
        children: [
          { id: 'form', title: 'Contact Form', description: 'Send us a message using our secure online contact form' },
          { id: 'phone', title: 'Phone Numbers', description: 'Main switchboard and key phone numbers for each of our hospital sites' },
          { id: 'chat', title: 'Live Chat', description: 'Chat online with a member of our team for quick answers to common queries' },
        ],
      },
      {
        id: 'department-contact',
        title: 'Find a Department',
        description: 'Find direct contact details for a specific department or ward',
        icon: 'SearchOutlined',
        children: [
          { id: 'directory', title: 'Department Contact Directory', description: 'A complete directory of department phone numbers and email addresses' },
          { id: 'by-hospital-contact', title: 'By Hospital', description: 'Find department contacts filtered by hospital site' },
        ],
      },
      {
        id: 'pals-contact',
        title: 'PALS',
        description: 'Patient Advice and Liaison Service — informal support with your concerns',
        icon: 'CustomerServiceOutlined',
        children: [
          { id: 'what-is-pals', title: 'What is PALS?', description: 'Find out how PALS can help you resolve concerns informally before making a formal complaint' },
          { id: 'contact-pals', title: 'Contact PALS', description: 'Get in touch with our PALS team by phone, email, or in person' },
        ],
      },
      {
        id: 'media',
        title: 'Media & Press',
        description: 'Contact our communications team for media enquiries',
        icon: 'CameraOutlined',
        children: [
          { id: 'press-enquiries', title: 'Press Enquiries', description: 'Contact our press office for statements, interviews, and media information' },
          { id: 'interviews', title: 'Interview Requests', description: 'How to request an interview with a clinician, spokesperson, or patient story' },
          { id: 'photography', title: 'Photography & Filming', description: 'Our policy on photography and filming in our hospitals' },
        ],
      },
      {
        id: 'emergency',
        title: 'Emergency Contacts',
        description: 'What to do and who to contact in a medical emergency',
        icon: 'AlertOutlined',
        children: [
          { id: 'call-999', title: 'When to Call 999', description: 'Life-threatening emergencies — call 999 for an ambulance immediately' },
          { id: 'call-111', title: 'When to Call 111', description: 'Urgent but not life-threatening situations — call 111 or visit 111.nhs.uk' },
          { id: 'ae-locations', title: 'A&E Locations', description: 'Find your nearest Accident & Emergency department and check current waiting times' },
        ],
      },
    ],
  },
  {
    id: 'search',
    title: 'Search',
    description: 'Search across the entire Bristol NHS Group website',
    icon: 'SearchOutlined',
    isSearch: true,
  },
]

// Flatten the IA tree into a map by path for quick lookup
export function findNode(pathSegments) {
  if (!pathSegments || pathSegments.length === 0) return null
  let nodes = IA
  let node = null
  for (const seg of pathSegments) {
    node = nodes.find(n => n.id === seg)
    if (!node) return null
    nodes = node.children || []
  }
  return node
}

// Build breadcrumb items from path segments
export function buildBreadcrumbs(pathSegments) {
  const crumbs = [{ title: 'Home', path: '/' }]
  let nodes = IA
  for (let i = 0; i < pathSegments.length; i++) {
    const seg = pathSegments[i]
    const node = nodes.find(n => n.id === seg)
    if (!node) break
    crumbs.push({
      title: node.title,
      path: '/' + pathSegments.slice(0, i + 1).join('/'),
    })
    nodes = node.children || []
  }
  return crumbs
}
