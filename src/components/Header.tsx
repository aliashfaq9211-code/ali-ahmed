import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Briefcase, 
  UserCheck, 
  Wallet, 
  Sparkles, 
  Globe, 
  Plus, 
  Award,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    role, 
    setRole, 
    walletBalancePKR,
    setIsPostJobModalOpen,
    setIsWalletModalOpen,
    setIsSkillQuizModalOpen,
    setIsBusinessModelModalOpen,
    setIsAliScenarioModalOpen,
    openSkillQuiz
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Zone 1: Wordmark Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-display font-bold text-lg shadow-sm group-hover:bg-emerald-700 transition-colors">
                S2E
              </span>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                Skill2Earn
              </span>
            </a>
            <span className="hidden lg:inline text-xs text-slate-400 border-l border-slate-200 pl-3">
              {language === 'ur' ? 'طلبہ ہنر مندی مارکیٹ پلیس' : 'Pakistan Student Skills Marketplace'}
            </span>
          </div>

          {/* Zone 2: Navigation Links (Clean text links with subtle hover) */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
            <a href="#micro-jobs" className="hover:text-emerald-700 transition-colors">
              {language === 'ur' ? 'مائیکرو جابز' : 'Micro-Jobs'}
            </a>
            <a href="#student-talent" className="hover:text-emerald-700 transition-colors">
              {language === 'ur' ? 'طلبہ ٹیلنٹ' : 'Student Talent'}
            </a>
            <a href="#success-stories" className="hover:text-emerald-700 transition-colors">
              {language === 'ur' ? 'کامیابی کی کہانیاں' : 'Success Stories'}
            </a>
            <button 
              onClick={() => setIsAliScenarioModalOpen(true)}
              className="hover:text-emerald-700 transition-colors flex items-center gap-1 cursor-pointer text-emerald-800 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === 'ur' ? 'علی کا ڈیمو' : 'Ali’s Story'}</span>
            </button>
            <button 
              onClick={() => openSkillQuiz('Video Editing')}
              className="hover:text-emerald-700 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === 'ur' ? 'ہنر تصدیق' : 'Skill Tests'}</span>
            </button>
            <button 
              onClick={() => setIsBusinessModelModalOpen(true)}
              className="hover:text-emerald-700 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
              <span>{language === 'ur' ? 'بزنس ماڈل' : 'SWOT & Model'}</span>
            </button>
          </nav>

          {/* Zone 3: Primary Actions, Role Switch & Language Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-md transition-colors border border-slate-200 cursor-pointer"
              title="Toggle English / اردو"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className={language === 'ur' ? 'font-urdu font-bold text-sm' : ''}>
                {language === 'en' ? 'اردو' : 'English'}
              </span>
            </button>

            {/* Role Switcher Pill Control */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200 text-xs font-medium">
              <button
                onClick={() => setRole('student')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  role === 'student'
                    ? 'bg-white text-emerald-800 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'ur' ? 'طالب علم' : 'Student'}
              </button>
              <button
                onClick={() => setRole('client')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  role === 'client'
                    ? 'bg-white text-emerald-800 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'ur' ? 'کاروبار / گاہک' : 'Client / Biz'}
              </button>
            </div>

            {/* Wallet Quick Button */}
            <button
              onClick={() => setIsWalletModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer tabular-nums"
            >
              <Wallet className="w-3.5 h-3.5 text-emerald-600" />
              <span>Rs. {walletBalancePKR.toLocaleString()}</span>
            </button>

            {/* Post Job CTA */}
            <button
              onClick={() => setIsPostJobModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'جاب پوسٹ کریں' : 'Post a Job'}</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
