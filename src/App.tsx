/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { JobListings } from './components/JobListings';
import { StudentDirectory } from './components/StudentDirectory';
import { SuccessStories } from './components/SuccessStories';
import { ProjectTracker } from './components/ProjectTracker';
import { Footer } from './components/Footer';
import { AliScenarioModal } from './components/AliScenarioModal';
import { StudentProfileModal } from './components/StudentProfileModal';
import { JobDetailModal } from './components/JobDetailModal';
import { PostJobModal } from './components/PostJobModal';
import { SkillVerificationModal } from './components/SkillVerificationModal';
import { EscrowPaymentModal } from './components/EscrowPaymentModal';
import { StudentWalletModal } from './components/StudentWalletModal';
import { BusinessModelModal } from './components/BusinessModelModal';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Users,
  Play
} from 'lucide-react';

const MainContent: React.FC = () => {
  const { 
    language, 
    setIsAliScenarioModalOpen, 
    setIsBusinessModelModalOpen, 
    openSkillQuiz,
    role
  } = useApp();

  return (
    <div className={`min-h-screen bg-slate-50 flex flex-col ${language === 'ur' ? 'font-urdu' : ''}`}>
      
      {/* Top Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Interactive Scenario Callout Banner (Ali & Khaas Attire Story) */}
        <section className="bg-emerald-900 text-white py-3.5 px-4 sm:px-6 lg:px-8 border-y border-emerald-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <Play className="w-3 h-3 fill-emerald-300" />
              </span>
              <p className="text-slate-200">
                <strong className="text-white">Example Scenario in Action:</strong> See how Ali (FAST CS) got hired by Khaas Attire for a Rs. 3,000 video reel, delivered in 48h, and received Rs. 2,700 payout.
              </p>
            </div>

            <button
              onClick={() => setIsAliScenarioModalOpen(true)}
              className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>{language === 'ur' ? 'انٹرایکٹو ڈیمو چلائیں' : 'Launch Interactive Scenario'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Category & City Filters */}
        <CategoryFilterBar />

        {/* Micro-Job Opportunities (The core marketplace) */}
        <JobListings />

        {/* Project Tracker & Escrow Workflow (Milestone Deliverables & Approval) */}
        <ProjectTracker />

        {/* Student Talent Directory (Digital Portfolios & Badges) */}
        <StudentDirectory />

        {/* Success Stories & Rotating Testimonials (Social Proof) */}
        <SuccessStories />

        {/* Trust & Comparison Feature Section (Why Skill2Earn vs Global Platforms) */}
        <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                {language === 'ur' ? 'روایتی پلیٹ فارمز بمقابلہ اسکل ٹو ارن' : 'Local Focus · Real Opportunity'}
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-white">
                {language === 'ur' ? 'پاکستانی طلبہ کیلئے خصوصی پلیٹ فارم' : 'Why Pakistani Students & Businesses Choose Skill2Earn'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                International freelancing platforms are fiercely competitive for beginners. Skill2Earn solves the local discovery gap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-white">Pakistani Payment Channels</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No PayPal headaches or international wire fees. Clients pay via JazzCash, EasyPaisa, SadaPay, or Raast; students withdraw instantly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-white">100% Escrow Protection</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminates Facebook group scams. Small businesses deposit project funds into Skill2Earn escrow upfront; released only when satisfied.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-white">Skill Verification Quizzes</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Students earn authenticated badges in Video Editing, Graphic Design, and Web Dev to prove competence even without years of prior experience.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => setIsBusinessModelModalOpen(true)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-colors cursor-pointer"
              >
                View Full SWOT Analysis & Strategic Business Model
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AliScenarioModal />
      <StudentProfileModal />
      <JobDetailModal />
      <PostJobModal />
      <SkillVerificationModal />
      <EscrowPaymentModal />
      <StudentWalletModal />
      <BusinessModelModal />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
