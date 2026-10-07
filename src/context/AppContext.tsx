import React, { createContext, useContext, useState } from 'react';
import { 
  Language, 
  UserRole, 
  MicroJob, 
  StudentProfile, 
  JobProposal, 
  ActiveOrder, 
  Category 
} from '../types';
import { INITIAL_STUDENTS, INITIAL_MICRO_JOBS } from '../data/mockData';

export interface WalletTransaction {
  id: string;
  type: 'escrow_hold' | 'payment_released' | 'withdrawal' | 'deposit';
  amountPKR: number;
  description: string;
  timestamp: string;
  method?: string;
  status: 'completed' | 'pending';
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
  jobs: MicroJob[];
  students: StudentProfile[];
  proposals: JobProposal[];
  orders: ActiveOrder[];
  selectedCategory: Category | 'All';
  setSelectedCategory: (cat: Category | 'All') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  
  // Wallet
  walletBalancePKR: number;
  pendingEscrowPKR: number;
  transactions: WalletTransaction[];
  withdrawFunds: (amount: number, method: string, accountDetails: string) => boolean;

  // Modals & Navigation
  isPostJobModalOpen: boolean;
  setIsPostJobModalOpen: (open: boolean) => void;
  isSkillQuizModalOpen: boolean;
  setIsSkillQuizModalOpen: (open: boolean) => void;
  activeQuizCategory: Category | null;
  openSkillQuiz: (category: Category) => void;
  isEscrowModalOpen: boolean;
  setIsEscrowModalOpen: (open: boolean) => void;
  escrowTargetJob: MicroJob | null;
  openEscrowModal: (job: MicroJob) => void;
  isWalletModalOpen: boolean;
  setIsWalletModalOpen: (open: boolean) => void;
  isBusinessModelModalOpen: boolean;
  setIsBusinessModelModalOpen: (open: boolean) => void;
  isAliScenarioModalOpen: boolean;
  setIsAliScenarioModalOpen: (open: boolean) => void;
  selectedStudent: StudentProfile | null;
  setSelectedStudent: (student: StudentProfile | null) => void;
  selectedJob: MicroJob | null;
  setSelectedJob: (job: MicroJob | null) => void;

  // Actions
  createJob: (job: Omit<MicroJob, 'id' | 'postedAt' | 'proposalsCount' | 'status'>) => void;
  submitProposal: (jobId: string, bidAmount: number, deliveryDays: number, coverLetter: string) => void;
  acceptProposalAndFundEscrow: (jobId: string, student: StudentProfile, amount: number, method: any) => void;
  submitWorkDelivery: (orderId: string, note: string, attachmentUrl: string) => void;
  approveDeliveryAndReleasePayment: (orderId: string, rating: number, feedback: string) => void;
  passSkillQuiz: (category: Category) => void;
  verifiedCategories: Category[];
  resetAliScenario: () => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Urdu / English Dictionary
const TRANSLATIONS: Record<string, { en: string; ur: string }> = {
  tagline: {
    en: 'Your Skill. Your Income.',
    ur: 'آپ کا ہنر، آپ کی آمدنی'
  },
  heroTitle: {
    en: 'Pakistan’s Student Freelancing & Micro-Jobs Marketplace',
    ur: 'پاکستان کی طلبہ فری لانسنگ اور مائیکرو جابز مارکیٹ پلیس'
  },
  heroSubtitle: {
    en: 'Connect talented university students with local businesses, startups, and individuals for high-quality, budget-friendly digital services.',
    ur: 'مقامی دکانوں، ریسٹورنٹس اور اسٹارٹ اپس کو باصلاحیت یونیورسٹی طلبہ سے جوڑیں اور سستے داموں معیاری کام حاصل کریں۔'
  },
  browseJobs: {
    en: 'Browse Micro-Jobs',
    ur: 'مائیکرو جابز تلاش کریں'
  },
  hireStudents: {
    en: 'Explore Student Talent',
    ur: 'طلبہ کا پورٹ فولیو دیکھیں'
  },
  postAJob: {
    en: 'Post a Micro-Job',
    ur: 'کام کی پیشکش پوسٹ کریں'
  },
  allCategories: {
    en: 'All Categories',
    ur: 'تمام شعبے'
  },
  verifiedBadge: {
    en: 'Skill Verified',
    ur: 'تصدیق شدہ ہنر'
  },
  escrowProtected: {
    en: '100% Escrow Protected',
    ur: 'محفوظ ادائیگی گارنٹی'
  },
  localPayments: {
    en: 'JazzCash · EasyPaisa · SadaPay · Raast',
    ur: 'جاز کیش · ایزی پیسہ · سادہ پے · راست'
  },
  startingAt: {
    en: 'Projects from Rs. 500',
    ur: 'صرف 500 روپے سے شروع'
  },
  clientMode: {
    en: 'Client / Business Mode',
    ur: 'گاہک / بزنس موڈ'
  },
  studentMode: {
    en: 'Student Freelancer Mode',
    ur: 'طلبہ فری لانسر موڈ'
  },
  myWallet: {
    en: 'Wallet & Earnings',
    ur: 'آمدنی اور والیٹ'
  },
  takeSkillTest: {
    en: 'Verify My Skills',
    ur: 'ہنر کا ٹیسٹ دیں'
  },
  liveAliDemo: {
    en: 'Ali’s 30s Video Story (Interactive Demo)',
    ur: 'علی اور خاص ایٹائر کی حقیقی مثال (ڈیمو)'
  },
  businessModel: {
    en: 'Business Model & SWOT',
    ur: 'بزنس ماڈل اور تجزیہ'
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>('student');
  const [jobs, setJobs] = useState<MicroJob[]>(INITIAL_MICRO_JOBS);
  const [students, setStudents] = useState<StudentProfile[]>(INITIAL_STUDENTS);
  const [proposals, setProposals] = useState<JobProposal[]>([
    {
      id: 'prop-ali-khaas',
      jobId: 'job-khaas-attire',
      studentId: 'student-ali',
      studentName: 'Ali Raza',
      studentUniversity: 'FAST-NUCES Lahore',
      studentAvatar: '/src/assets/images/ali_student_creator_1791379117153.jpg',
      bidAmountPKR: 3000,
      deliveryDays: 2,
      coverLetter: 'Assalam-o-Alaikum! I have edited over 15+ Eastern wear brand promos with snappy beat cuts and aesthetic Urdu calligraphy overlays. Can deliver a 30s high-converting reel in 48 hours!',
      sampleLinks: ['portfolio/eastern-eid-reel'],
      status: 'pending',
      submittedAt: '1 hour ago'
    }
  ]);
  const [orders, setOrders] = useState<ActiveOrder[]>([
    {
      id: 'order-101',
      jobId: 'job-chai-poster',
      jobTitle: 'Food Festival Poster & Social Media Launch Graphics',
      clientName: 'Karachi Chai Co.',
      studentName: 'Hamza Tariq',
      studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      amountPKR: 2000,
      studentEarningsPKR: 1800,
      platformFeePKR: 200,
      status: 'work_submitted',
      paymentMethod: 'EasyPaisa',
      deliveryNote: 'Final 300 DPI print-ready PDF and 1080x1920 Instagram story flyers attached with vintage typography.',
      deliveryAttachment: '/src/assets/images/restaurant_poster_sample_1791379135852.jpg',
      createdAt: 'Yesterday'
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  // Wallet
  const [walletBalancePKR, setWalletBalancePKR] = useState<number>(4500);
  const [pendingEscrowPKR, setPendingEscrowPKR] = useState<number>(2700);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([
    {
      id: 'tx-1',
      type: 'payment_released',
      amountPKR: 4500,
      description: 'Completed: Margalla Roasters Landing Page (Client paid Rs. 5,000, 10% fee deducted)',
      timestamp: '2 days ago',
      status: 'completed'
    },
    {
      id: 'tx-2',
      type: 'escrow_hold',
      amountPKR: 2700,
      description: 'Escrow Lock: 30s Promotional Video for Khaas Attire',
      timestamp: 'Today',
      status: 'pending'
    }
  ]);

  // Modals state
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
  const [isSkillQuizModalOpen, setIsSkillQuizModalOpen] = useState(false);
  const [activeQuizCategory, setActiveQuizCategory] = useState<Category | null>(null);
  const [isEscrowModalOpen, setIsEscrowModalOpen] = useState(false);
  const [escrowTargetJob, setEscrowTargetJob] = useState<MicroJob | null>(null);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isBusinessModelModalOpen, setIsBusinessModelModalOpen] = useState(false);
  const [isAliScenarioModalOpen, setIsAliScenarioModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [selectedJob, setSelectedJob] = useState<MicroJob | null>(null);

  const [verifiedCategories, setVerifiedCategories] = useState<Category[]>([
    'Video Editing',
    'Graphic Design'
  ]);

  const t = (key: string): string => {
    if (!TRANSLATIONS[key]) return key;
    return TRANSLATIONS[key][language] || TRANSLATIONS[key].en;
  };

  const openSkillQuiz = (category: Category) => {
    setActiveQuizCategory(category);
    setIsSkillQuizModalOpen(true);
  };

  const openEscrowModal = (job: MicroJob) => {
    setEscrowTargetJob(job);
    setIsEscrowModalOpen(true);
  };

  const passSkillQuiz = (category: Category) => {
    if (!verifiedCategories.includes(category)) {
      setVerifiedCategories([...verifiedCategories, category]);
    }
    // Also update Ali profile if relevant
    setStudents(prev => prev.map(s => {
      if (s.id === 'student-ali' && !s.verifiedSkills.includes(category)) {
        return {
          ...s,
          verifiedSkills: [...s.verifiedSkills, category]
        };
      }
      return s;
    }));
  };

  const createJob = (jobData: Omit<MicroJob, 'id' | 'postedAt' | 'proposalsCount' | 'status'>) => {
    const newJob: MicroJob = {
      ...jobData,
      id: `job-${Date.now()}`,
      postedAt: 'Just now',
      status: 'open',
      proposalsCount: 0
    };
    setJobs([newJob, ...jobs]);
  };

  const submitProposal = (jobId: string, bidAmount: number, deliveryDays: number, coverLetter: string) => {
    const newProp: JobProposal = {
      id: `prop-${Date.now()}`,
      jobId,
      studentId: 'student-ali',
      studentName: 'Ali Raza',
      studentUniversity: 'FAST-NUCES Lahore',
      studentAvatar: '/src/assets/images/ali_student_creator_1791379117153.jpg',
      bidAmountPKR: bidAmount,
      deliveryDays,
      coverLetter,
      sampleLinks: ['https://skill2earn.pk/ali/portfolio'],
      status: 'pending',
      submittedAt: 'Just now'
    };
    setProposals([newProp, ...proposals]);
    setJobs(prev => prev.map(j => j.id === jobId ? { ...j, proposalsCount: j.proposalsCount + 1 } : j));
  };

  const acceptProposalAndFundEscrow = (
    jobId: string, 
    student: StudentProfile, 
    amount: number, 
    method: 'EasyPaisa' | 'JazzCash' | 'SadaPay' | 'NayaPay' | 'Raast' | 'Bank'
  ) => {
    const job = jobs.find(j => j.id === jobId);
    const platformFee = Math.round(amount * 0.10); // 10% commission model as specified in prompt
    const studentEarnings = amount - platformFee;   // 90% goes to student

    const newOrder: ActiveOrder = {
      id: `order-${Date.now()}`,
      jobId,
      jobTitle: job ? job.title : 'Micro-Project',
      clientName: job ? job.clientName : 'Local Business',
      studentName: student.name,
      studentAvatar: student.avatarUrl,
      amountPKR: amount,
      studentEarningsPKR: studentEarnings,
      platformFeePKR: platformFee,
      status: 'in_progress',
      paymentMethod: method,
      createdAt: 'Just now'
    };

    setOrders([newOrder, ...orders]);
    setPendingEscrowPKR(prev => prev + studentEarnings);
    setJobs(prev => prev.map(j => j.id === jobId ? { 
      ...j, 
      status: 'assigned', 
      assignedStudentId: student.id,
      assignedStudentName: student.name 
    } : j));

    setTransactions(prev => [
      {
        id: `tx-${Date.now()}`,
        type: 'escrow_hold',
        amountPKR: amount,
        description: `Escrow Secured via ${method}: ${job?.title || 'Micro-Project'}. Held safely until deliverable approved.`,
        timestamp: 'Just now',
        method,
        status: 'pending'
      },
      ...prev
    ]);
  };

  const submitWorkDelivery = (orderId: string, note: string, attachmentUrl: string) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          status: 'work_submitted',
          deliveryNote: note,
          deliveryAttachment: attachmentUrl
        };
      }
      return o;
    }));
  };

  const approveDeliveryAndReleasePayment = (orderId: string, rating: number, feedback: string) => {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          status: 'approved_released',
          clientRating: rating,
          clientFeedback: feedback
        };
      }
      return o;
    }));

    // Release escrow to student wallet!
    setPendingEscrowPKR(prev => Math.max(0, prev - order.studentEarningsPKR));
    setWalletBalancePKR(prev => prev + order.studentEarningsPKR);

    setTransactions(prev => [
      {
        id: `tx-${Date.now()}`,
        type: 'payment_released',
        amountPKR: order.studentEarningsPKR,
        description: `Released from Escrow: ${order.jobTitle}. Client (${order.clientName}) approved work with ${rating}★! (Skill2Earn platform fee Rs. ${order.platformFeePKR})`,
        timestamp: 'Just now',
        status: 'completed'
      },
      ...prev
    ]);

    // Update job status to completed
    setJobs(prev => prev.map(j => j.id === order.jobId ? { ...j, status: 'completed' } : j));
  };

  const withdrawFunds = (amount: number, method: string, accountDetails: string): boolean => {
    if (amount <= 0 || amount > walletBalancePKR) return false;

    setWalletBalancePKR(prev => prev - amount);
    setTransactions(prev => [
      {
        id: `tx-${Date.now()}`,
        type: 'withdrawal',
        amountPKR: amount,
        description: `Instant payout sent to ${method} (${accountDetails})`,
        timestamp: 'Just now',
        method,
        status: 'completed'
      },
      ...prev
    ]);
    return true;
  };

  const resetAliScenario = () => {
    // Reset back to initial state for a fresh demonstration
    setJobs(INITIAL_MICRO_JOBS);
    setIsAliScenarioModalOpen(true);
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      role,
      setRole,
      jobs,
      students,
      proposals,
      orders,
      selectedCategory,
      setSelectedCategory,
      searchQuery,
      setSearchQuery,
      selectedCity,
      setSelectedCity,
      walletBalancePKR,
      pendingEscrowPKR,
      transactions,
      withdrawFunds,
      isPostJobModalOpen,
      setIsPostJobModalOpen,
      isSkillQuizModalOpen,
      setIsSkillQuizModalOpen,
      activeQuizCategory,
      openSkillQuiz,
      isEscrowModalOpen,
      setIsEscrowModalOpen,
      escrowTargetJob,
      openEscrowModal,
      isWalletModalOpen,
      setIsWalletModalOpen,
      isBusinessModelModalOpen,
      setIsBusinessModelModalOpen,
      isAliScenarioModalOpen,
      setIsAliScenarioModalOpen,
      selectedStudent,
      setSelectedStudent,
      selectedJob,
      setSelectedJob,
      createJob,
      submitProposal,
      acceptProposalAndFundEscrow,
      submitWorkDelivery,
      approveDeliveryAndReleasePayment,
      passSkillQuiz,
      verifiedCategories,
      resetAliScenario,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
