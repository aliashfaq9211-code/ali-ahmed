import { StudentProfile, MicroJob, SkillQuiz } from '../types';

export const INITIAL_STUDENTS: StudentProfile[] = [
  {
    id: 'student-ali',
    name: 'Ali Raza',
    nameUrdu: 'علی رضا',
    university: 'FAST-NUCES Lahore',
    universityUrdu: 'فاسٹ یونیورسٹی لاہور',
    degree: 'BS Computer Science (Year 3)',
    graduationYear: 2027,
    city: 'Lahore',
    cityUrdu: 'لاہور',
    avatarUrl: '/src/assets/images/ali_student_creator_1791379117153.jpg',
    headline: 'Short-Form Reel & Commercial Video Editor',
    headlineUrdu: 'ویڈیو ایڈیٹر، انسٹاگرام ریلز اور کمرشل پروموز',
    bio: 'Passionate university student editor with 3 years of Premiere Pro & After Effects experience. Helped 15+ local Pakistani brands create viral Instagram reels and promotional videos.',
    bioUrdu: 'تین سال کے تجربے کے ساتھ یونیورسٹی کا طالب علم۔ پریمیئر پرو اور آفٹر افیکٹس کا ماہر، اب تک 15 سے زائد مقامی برانڈز کیلئے کام کر چکا ہوں۔',
    skills: ['Video Editing', 'Premiere Pro', 'After Effects', 'Reels / TikTok', 'Color Grading', 'Sound Design'],
    verifiedSkills: ['Video Editing'],
    hourlyRatePKR: 1200,
    startingMicroJobPKR: 1500,
    rating: 4.9,
    reviewsCount: 23,
    completedJobsCount: 26,
    badges: ['Top Student Rated', 'Skill Verified', 'FASTian'],
    featured: true,
    portfolio: [
      {
        id: 'port-ali-1',
        title: '30s Eastern Festive Promo Reel',
        description: 'Cinematic promotional video created for Khaas Attire Eastern wear Eid campaign.',
        category: 'Video Editing',
        imageUrl: '/src/assets/images/clothing_promo_reel_1791379153783.jpg',
        deliverableType: 'video',
        clientName: 'Khaas Attire Lahore',
        budgetPKR: 3000,
      },
      {
        id: 'port-ali-2',
        title: 'Artisan Cafe Launch Teaser',
        description: 'Dynamic pacing, typography transitions, and audio sync for a rooftop cafe in Gulberg.',
        category: 'Video Editing',
        imageUrl: '/src/assets/images/restaurant_poster_sample_1791379135852.jpg',
        deliverableType: 'video',
        clientName: 'Dhabba Luxe',
        budgetPKR: 2500,
      }
    ]
  },
  {
    id: 'student-ayesha',
    name: 'Ayesha Khan',
    nameUrdu: 'عائشہ خان',
    university: 'FAST-NUCES Islamabad',
    universityUrdu: 'فاسٹ یونیورسٹی اسلام آباد',
    degree: 'BS Software Engineering (Year 4)',
    graduationYear: 2026,
    city: 'Islamabad',
    cityUrdu: 'اسلام آباد',
    avatarUrl: '/src/assets/images/ayesha_dev_avatar_1791379171367.jpg',
    headline: 'Front-End React & Tailwind Web Developer',
    headlineUrdu: 'فرنٹ اینڈ ویب ڈویلپر، ری ایکٹ اور ٹیل ونڈ',
    bio: 'Senior software engineering student building sleek, mobile-friendly landing pages and web apps for local Pakistani businesses and startups.',
    bioUrdu: 'سینئر سافٹ ویئر انجینئرنگ طالبہ۔ چھوٹے کاروباری اداروں اور اسٹارٹ اپس کیلئے موبائل فرینڈلی جدید ویب سائٹس بنانے میں ماہر۔',
    skills: ['Web Development', 'React', 'Tailwind CSS', 'Next.js', 'Landing Pages', 'Responsive Design'],
    verifiedSkills: ['Web Development'],
    hourlyRatePKR: 1500,
    startingMicroJobPKR: 3500,
    rating: 5.0,
    reviewsCount: 18,
    completedJobsCount: 20,
    badges: ['Skill Verified', 'FAST Gold Coder', 'Quick Delivery'],
    featured: true,
    portfolio: [
      {
        id: 'port-aye-1',
        title: 'Islamabad Specialty Coffee Roastery Website',
        description: 'Responsive online ordering landing page with WhatsApp cart checkout integration.',
        category: 'Web Development',
        imageUrl: '/src/assets/images/hero_pakistan_students_1791379100728.jpg',
        deliverableType: 'link',
        clientName: 'Margalla Roasters',
        budgetPKR: 7000,
      }
    ]
  },
  {
    id: 'student-hamza',
    name: 'Hamza Tariq',
    nameUrdu: 'حمزہ طارق',
    university: 'Punjab University (College of Art & Design)',
    universityUrdu: 'پنجاب یونیورسٹی (کالج آف آرٹ اینڈ ڈیزائن)',
    degree: 'BFA Graphic Design (Year 3)',
    graduationYear: 2027,
    city: 'Lahore',
    cityUrdu: 'لاہور',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    headline: 'Brand Identity & Restaurant Menu / Poster Designer',
    headlineUrdu: 'برانڈ آئیڈینٹٹی، پوسٹر اور ریسٹورنٹ مینو ڈیزائنر',
    bio: 'Art student specialized in visual storytelling, bilingual typography (Urdu Nastaliq + Latin), restaurant menus, and eye-catching marketing collateral.',
    bioUrdu: 'آرٹ اسکول کا طالب علم، نستعلیق اور انگریزی ٹائپوگرافی، فوڈ مینو اور پوسٹر ڈیزائننگ میں ماہر۔',
    skills: ['Graphic Design', 'Photoshop', 'Illustrator', 'Urdu Typography', 'Posters', 'Logo Design'],
    verifiedSkills: ['Graphic Design'],
    hourlyRatePKR: 900,
    startingMicroJobPKR: 1200,
    rating: 4.85,
    reviewsCount: 31,
    completedJobsCount: 34,
    badges: ['PU Artist', 'Bilingual Designer', 'Skill Verified'],
    featured: true,
    portfolio: [
      {
        id: 'port-ham-1',
        title: 'Chai Cafe Branding & Promotional Poster',
        description: 'Bilingual aesthetic wall poster and social launch flyer blending traditional patterns with minimal design.',
        category: 'Graphic Design',
        imageUrl: '/src/assets/images/restaurant_poster_sample_1791379135852.jpg',
        deliverableType: 'image',
        clientName: 'Karachi Chai Co.',
        budgetPKR: 2000,
      }
    ]
  },
  {
    id: 'student-fatima',
    name: 'Fatima Zahra',
    nameUrdu: 'فاطمہ زہرا',
    university: 'LUMS (Lahore University of Management Sciences)',
    universityUrdu: 'لمز یونیورسٹی لاہور',
    degree: 'BSc Economics & Social Sciences',
    graduationYear: 2026,
    city: 'Lahore',
    cityUrdu: 'لاہور',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    headline: 'B2B Copywriter & Content Strategist',
    headlineUrdu: 'انگریزی و اردو مواد نگار، ویب سائٹ اور ایس ای او کاپی',
    bio: 'Skilled researcher and wordsmith helping startups communicate their value proposition clearly. Fluent in English and Urdu technical and creative copy.',
    bioUrdu: 'اسٹارٹ اپس اور بزنسز کے لیے واضح اور پرکشش مواد کی تیاری میں ماہر۔',
    skills: ['Content Writing', 'SEO Copywriting', 'Blog Posts', 'Social Captions', 'Urdu Content'],
    verifiedSkills: ['Content Writing'],
    hourlyRatePKR: 1100,
    startingMicroJobPKR: 1000,
    rating: 4.95,
    reviewsCount: 14,
    completedJobsCount: 16,
    badges: ['LUMS Scholar', 'Skill Verified', 'Top Writer'],
    portfolio: []
  },
  {
    id: 'student-bilal',
    name: 'Bilal Siddiqui',
    nameUrdu: 'بلال صدیقی',
    university: 'IBA Karachi',
    universityUrdu: 'آئی بی اے کراچی',
    degree: 'BBA Marketing & Data',
    graduationYear: 2026,
    city: 'Karachi',
    cityUrdu: 'کراچی',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    headline: 'Social Media Growth & Instagram Shop Manager',
    headlineUrdu: 'سوشل میڈیا مینیجر اور انسٹاگرام بزنس ہینڈلر',
    bio: 'Business student helping Karachi retail boutiques and Daraz sellers grow organic reach through consistent posting, reel strategy, and customer DM management.',
    bioUrdu: 'کراچی کے ریٹیل برانڈز اور دراز سیلرز کیلئے سوشل میڈیا مینجمنٹ اور مارکیٹنگ۔',
    skills: ['Social Media Management', 'Instagram Growth', 'Meta Ads', 'Canva Pro', 'Community Management'],
    verifiedSkills: [],
    hourlyRatePKR: 1000,
    startingMicroJobPKR: 2500,
    rating: 4.8,
    reviewsCount: 11,
    completedJobsCount: 13,
    badges: ['IBA Talent', 'E-Com Specialist'],
    portfolio: []
  },
  {
    id: 'student-zainab',
    name: 'Zainab Malik',
    nameUrdu: 'زینب ملک',
    university: 'NUST Islamabad',
    universityUrdu: 'نسٹ یونیورسٹی اسلام آباد',
    degree: 'BS Electrical Engineering',
    graduationYear: 2027,
    city: 'Rawalpindi',
    cityUrdu: 'راولپنڈی',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    headline: 'O & A Level Mathematics and Physics Online Tutor',
    headlineUrdu: 'او اور اے لیول ریاضی و فزکس ٹیوٹر',
    bio: 'Straight A* student from Beaconhouse / NUST. Dedicated 1-on-1 concept building in calculus, mechanics, and school exam preparation via Zoom/Google Meet.',
    bioUrdu: 'نسٹ کی طالبہ، او اور اے لیول کے طلبہ کیلئے ریاضی اور فزکس کے آن لائن کانسیپٹس۔',
    skills: ['Tutoring', 'O Level Math', 'A Level Physics', 'Calculus', 'Exam Prep'],
    verifiedSkills: ['Tutoring'],
    hourlyRatePKR: 1200,
    startingMicroJobPKR: 3000,
    rating: 5.0,
    reviewsCount: 9,
    completedJobsCount: 12,
    badges: ['NUST Merit', 'Top Tutor'],
    portfolio: []
  }
];

export const INITIAL_MICRO_JOBS: MicroJob[] = [
  {
    id: 'job-khaas-attire',
    title: '30-Second Promotional Video for Eastern Wear Brand',
    titleUrdu: 'کپڑوں کے برانڈ کے لیے 30 سیکنڈ کی پروموشنل ویڈیو',
    category: 'Video Editing',
    description: 'We run a women’s festive clothing brand in Lahore. We have raw smartphone & mirrorless footage of our latest Eid collection. Need an energetic 30-second reel with trendy cuts, smooth transitions, beat syncing, and Urdu text overlay.',
    descriptionUrdu: 'ہمارا لاہور میں خواتین کے مشرقی ملبوسات کا برانڈ ہے۔ عید کلیکشن کی خام فوٹیج موجود ہے، ٹرینڈی کٹس اور اردو ٹیکسٹ کے ساتھ 30 سیکنڈ کی ریل درکار ہے۔',
    budgetPKR: 3000,
    clientName: 'Khaas Attire',
    clientType: 'Small Business',
    clientCity: 'Lahore',
    deliveryDays: 2,
    postedAt: '2 hours ago',
    status: 'open',
    proposalsCount: 3,
  },
  {
    id: 'job-chai-poster',
    title: 'Food Festival Poster & Social Media Launch Graphics',
    titleUrdu: 'فوڈ فیسٹیول پوسٹر اور سوشل میڈیا گرافکس',
    category: 'Graphic Design',
    description: 'Aesthetic poster design needed for our upcoming monsoon weekend chai festival in Clifton. Needs to look modern yet traditional with vintage Pakistani truck art / calligraphy influences. High resolution for print and Instagram.',
    descriptionUrdu: 'کلفٹن میں مانسون چائے فیسٹیول کیلئے جدید اور روایتی پوسٹر ڈیزائن درکار ہے۔ پرنٹ اور انسٹاگرام کے ہائی ریزولیوشن فارمیٹس چاہیے۔',
    budgetPKR: 2000,
    clientName: 'Karachi Chai Co.',
    clientType: 'Restaurant',
    clientCity: 'Karachi',
    deliveryDays: 1,
    postedAt: '4 hours ago',
    status: 'open',
    proposalsCount: 5,
  },
  {
    id: 'job-dev-landing',
    title: 'Single-Page Landing Page for Solar Energy Consultant',
    titleUrdu: 'سولر انرجی کنسلٹنٹ کیلئے سنگل پیج لینڈنگ ویب سائٹ',
    category: 'Web Development',
    description: 'We need a responsive 1-page modern website built with React / HTML showcasing our commercial solar installation services, customer savings calculator, and a WhatsApp consultation button.',
    descriptionUrdu: 'سولر پینل انسٹالیشن کیلئے موبائل فرینڈلی لینڈنگ پیج، کیلکولیٹر اور واٹس ایپ بٹن کے ساتھ درکار ہے۔',
    budgetPKR: 6500,
    clientName: 'Shams Energy Solutions',
    clientType: 'Startup',
    clientCity: 'Islamabad',
    deliveryDays: 3,
    postedAt: 'Yesterday',
    status: 'open',
    proposalsCount: 2,
  },
  {
    id: 'job-insta-posts',
    title: '7 Engaging Instagram Carousel Posts & Stories for Daraz Seller',
    titleUrdu: 'دراز سیلر کیلئے 7 انسٹاگرام کیروسل پوسٹس اور اسٹوریز',
    category: 'Social Media Management',
    description: 'Selling kitchen organizers and homeware on Daraz. Need 7 aesthetic square graphics and stories highlighting product benefits, discount offers, and customer reviews using Canva or Photoshop.',
    descriptionUrdu: 'کچن سامان کے دراز اسٹور کیلئے 7 دلکش انسٹاگرام گرافکس اور اسٹوریز درکار ہیں۔',
    budgetPKR: 2500,
    clientName: 'HomeEase Pakistan',
    clientType: 'Online Seller',
    clientCity: 'Faisalabad',
    deliveryDays: 2,
    postedAt: '1 day ago',
    status: 'open',
    proposalsCount: 4,
  },
  {
    id: 'job-content-blog',
    title: '3 SEO Articles on Pakistani Tech Startups & Freelancing',
    titleUrdu: 'پاکستانی ٹیک اور فری لانسنگ پر 3 معلوماتی بلاگز',
    category: 'Content Writing',
    description: 'Looking for a student writer to produce three 800-word engaging articles in English covering student freelancing tips, local payment methods (JazzCash/EasyPaisa/Raast), and startup growth in Pakistan.',
    descriptionUrdu: 'طلبہ کی فری لانسنگ اور مقامی ادائیگیوں پر 800 الفاظ کے 3 تحقیقی مضامین درکار ہیں۔',
    budgetPKR: 3500,
    clientName: 'PakTech Insights',
    clientType: 'Startup',
    clientCity: 'Lahore',
    deliveryDays: 3,
    postedAt: '2 days ago',
    status: 'open',
    proposalsCount: 6,
  },
  {
    id: 'job-math-tutor',
    title: 'O-Level Mathematics Exam Revision (4 Sessions)',
    titleUrdu: 'او لیول میتھس امتحان کی تیاری (4 آن لائن کلاسز)',
    category: 'Tutoring',
    description: 'Need a patient, top-scoring university student to guide my 10th-grade daughter through past paper questions in Algebra and Trigonometry for 1 hour per session over this weekend.',
    descriptionUrdu: 'او لیول ریاضی کے پرانے پرچوں کی تیاری کیلئے 4 آن لائن سیشنز درکار ہیں۔',
    budgetPKR: 4000,
    clientName: 'Dr. Tariq Mahmood',
    clientType: 'Teacher / Individual',
    clientCity: 'Rawalpindi',
    deliveryDays: 4,
    postedAt: '2 days ago',
    status: 'open',
    proposalsCount: 3,
  }
];

export const SKILL_QUIZZES: Record<string, SkillQuiz> = {
  'Video Editing': {
    category: 'Video Editing',
    title: 'Video Editing & Social Reels Assessment',
    description: 'Test your understanding of pacing, aspect ratios, frame rates, color correction, and audio mastering.',
    timeLimitMinutes: 5,
    passingScorePercent: 75,
    questions: [
      {
        id: 'vq1',
        question: 'What is the standard aspect ratio and resolution for vertical TikTok & Instagram Reels?',
        options: ['16:9 at 1920x1080', '9:16 at 1080x1920', '1:1 at 1080x1080', '4:5 at 1080x1350'],
        correctIndex: 1,
        explanation: '9:16 (1080x1920 px) is the vertical fullscreen standard for Reels, TikTok, and YouTube Shorts.'
      },
      {
        id: 'vq2',
        question: 'When editing voiceover dialogue with background music, what is the best practice for audio levels?',
        options: [
          'Keep dialogue and background music at identical volume',
          'Duck music by 15-20dB below voice dialogue so speech stays clear',
          'Turn dialogue down so music beats stand out',
          'Never normalize audio tracks'
        ],
        correctIndex: 1,
        explanation: 'Audio ducking lowers music so speech sits comfortably around -6dB to -12dB while remaining crisp and audible.'
      },
      {
        id: 'vq3',
        question: 'What frame rate is generally used for a cinematic narrative feel versus crisp slow-motion capture?',
        options: [
          '24 fps for cinematic; 60/120 fps for slow-motion conform',
          '60 fps for cinematic; 15 fps for slow-motion',
          '12 fps for cinematic; 30 fps for slow-motion',
          'Frame rate does not impact video motion feel'
        ],
        correctIndex: 0,
        explanation: '24fps gives standard cinematic motion blur; high frame rates (60/120fps) allow smooth slow-motion conform.'
      },
      {
        id: 'vq4',
        question: 'In Adobe Premiere Pro or DaVinci Resolve, what does a "J-Cut" refer to?',
        options: [
          'Cutting video and audio at the exact same frame',
          'The audio of the next clip begins before the video changes',
          'The video of the next clip changes before the audio begins',
          'Deleting all silent frames in a clip'
        ],
        correctIndex: 1,
        explanation: 'In a J-cut, the incoming audio starts playing before the video cut occurs, creating natural flow.'
      }
    ]
  },
  'Graphic Design': {
    category: 'Graphic Design',
    title: 'Graphic Design & Print Ready Fundamentals',
    description: 'Assess your knowledge of color spaces (RGB vs CMYK), vector vs raster, typography hierarchy, and composition.',
    timeLimitMinutes: 5,
    passingScorePercent: 75,
    questions: [
      {
        id: 'gq1',
        question: 'Which color mode and resolution standard are required when preparing a restaurant flyer for physical offset printing?',
        options: ['RGB at 72 DPI', 'CMYK at 300 DPI', 'Indexed Color at 150 DPI', 'Grayscale at 96 DPI'],
        correctIndex: 1,
        explanation: 'Print presses use CMYK ink separation and minimum 300 DPI for crisp photographic detail.'
      },
      {
        id: 'gq2',
        question: 'What is the main benefit of designing logos in vector format (.ai, .svg) rather than raster (.jpg, .png)?',
        options: [
          'Vectors have smaller color palettes',
          'Vectors can scale infinitely without pixelation or quality loss',
          'Raster formats print faster',
          'Vector files can only be opened on iPhones'
        ],
        correctIndex: 1,
        explanation: 'Vectors use mathematical coordinates, allowing loss-free scaling from a visiting card to a stadium billboard.'
      },
      {
        id: 'gq3',
        question: 'What is "Kerning" in typographic design?',
        options: [
          'The vertical spacing between lines of text',
          'The adjustment of space between individual letter pairs',
          'The thickness of bold strokes',
          'The slant angle in italics'
        ],
        correctIndex: 1,
        explanation: 'Kerning adjusts spacing between specific letter pairs (like AV or To) for optical balance.'
      },
      {
        id: 'gq4',
        question: 'What is the "Bleed" area in a print layout?',
        options: [
          'The area where ink is prohibited',
          'Extra 3mm margin beyond the trim edge to prevent white borders after cutting',
          'The digital watermark on drafts',
          'The inner binding margin of a book'
        ],
        correctIndex: 1,
        explanation: 'Bleed extends artwork past the final cut line so slight paper shifting does not leave unprinted white edges.'
      }
    ]
  },
  'Web Development': {
    category: 'Web Development',
    title: 'Front-End Web Development Core Skills',
    description: 'Test your grasp of responsive web design, semantic HTML, modern CSS flexbox/grid, and React state flow.',
    timeLimitMinutes: 5,
    passingScorePercent: 75,
    questions: [
      {
        id: 'wq1',
        question: 'In modern CSS, which property creates a responsive grid without writing explicit media queries?',
        options: [
          'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))',
          'display: inline-block',
          'position: relative',
          'float: left'
        ],
        correctIndex: 0,
        explanation: 'repeat(auto-fit, minmax(280px, 1fr)) dynamically wraps columns when the screen width tightens.'
      },
      {
        id: 'wq2',
        question: 'Why should image tags in modern web apps always have width, height, and descriptive alt attributes?',
        options: [
          'They look prettier in the code editor',
          'Prevents Layout Shifts (CLS) and provides accessibility for screen readers and SEO',
          'It is required by JavaScript syntax',
          'To decrease server RAM usage'
        ],
        correctIndex: 1,
        explanation: 'Dimensions prevent Cumulative Layout Shift (CLS) and alt text is vital for accessibility and search indexing.'
      },
      {
        id: 'wq3',
        question: 'In React, what occurs when state changes via a setter function?',
        options: [
          'The entire browser tab reloads',
          'The component schedules a re-render with the updated state value',
          'The CSS file is deleted',
          'Local storage is cleared'
        ],
        correctIndex: 1,
        explanation: 'State setters trigger a component re-render so the DOM reflects updated data.'
      },
      {
        id: 'wq4',
        question: 'Which HTTP method should be used for retrieving data without mutating server state?',
        options: ['POST', 'DELETE', 'GET', 'PUT'],
        correctIndex: 2,
        explanation: 'GET requests are idempotent and designed strictly for safe data retrieval.'
      }
    ]
  }
};
