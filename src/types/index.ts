export type Language = 'en' | 'ur';

export type UserRole = 'student' | 'client';

export type Category = 
  | 'Graphic Design'
  | 'Video Editing'
  | 'Web Development'
  | 'Content Writing'
  | 'Social Media Management'
  | 'Photography'
  | 'Presentation Design'
  | 'Data Entry'
  | 'Tutoring';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  imageUrl?: string;
  deliverableType: 'image' | 'video' | 'link' | 'document';
  clientName?: string;
  budgetPKR?: number;
}

export interface StudentProfile {
  id: string;
  name: string;
  nameUrdu: string;
  university: string;
  universityUrdu: string;
  degree: string;
  graduationYear: number;
  city: string;
  cityUrdu: string;
  avatarUrl: string;
  headline: string;
  headlineUrdu: string;
  bio: string;
  bioUrdu: string;
  skills: string[];
  verifiedSkills: string[];
  hourlyRatePKR: number;
  startingMicroJobPKR: number;
  rating: number;
  reviewsCount: number;
  completedJobsCount: number;
  portfolio: PortfolioItem[];
  badges: string[];
  featured?: boolean;
}

export interface MicroJob {
  id: string;
  title: string;
  titleUrdu: string;
  category: Category;
  description: string;
  descriptionUrdu: string;
  budgetPKR: number;
  clientName: string;
  clientType: 'Small Business' | 'Restaurant' | 'Startup' | 'Online Seller' | 'Teacher / Individual';
  clientCity: string;
  deliveryDays: number;
  postedAt: string;
  status: 'open' | 'assigned' | 'in_review' | 'completed';
  proposalsCount: number;
  assignedStudentId?: string;
  assignedStudentName?: string;
}

export interface JobProposal {
  id: string;
  jobId: string;
  studentId: string;
  studentName: string;
  studentUniversity: string;
  studentAvatar: string;
  bidAmountPKR: number;
  deliveryDays: number;
  coverLetter: string;
  sampleLinks: string[];
  status: 'pending' | 'accepted' | 'declined';
  submittedAt: string;
}

export interface ActiveOrder {
  id: string;
  jobId: string;
  jobTitle: string;
  clientName: string;
  studentName: string;
  studentAvatar: string;
  amountPKR: number;
  studentEarningsPKR: number; // 90% (e.g. Rs 2,700 for Rs 3,000)
  platformFeePKR: number;     // 10% (e.g. Rs 300)
  status: 'funded_in_escrow' | 'in_progress' | 'work_submitted' | 'approved_released';
  paymentMethod: 'EasyPaisa' | 'JazzCash' | 'SadaPay' | 'NayaPay' | 'Raast' | 'Bank';
  deliveryNote?: string;
  deliveryAttachment?: string;
  clientRating?: number;
  clientFeedback?: string;
  studentRating?: number;
  studentFeedback?: string;
  createdAt: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SkillQuiz {
  category: Category;
  title: string;
  description: string;
  timeLimitMinutes: number;
  passingScorePercent: number;
  questions: QuizQuestion[];
}
