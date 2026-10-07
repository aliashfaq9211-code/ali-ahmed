import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setIsAliScenarioModalOpen, setIsBusinessModelModalOpen, openSkillQuiz } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-display font-bold text-sm">
                S2E
              </span>
              <span className="font-display font-bold text-lg text-white">Skill2Earn</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {language === 'ur'
                ? 'آپ کا ہنر، آپ کی آمدنی — باصلاحیت پاکستانی طلبہ اور مقامی کاروباروں کا محفوظ پلیٹ فارم۔'
                : '“Your Skill. Your Income.” Pakistan’s premier student freelancing marketplace connecting young creators with local businesses.'
              }
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Escrow Protection Guaranteed</span>
            </div>
          </div>

          {/* Categories Col */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-200 text-xs uppercase tracking-wider">
              {language === 'ur' ? 'شعبہ جات' : 'Popular Micro-Skills'}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#micro-jobs" className="hover:text-white transition-colors">Video Editing & Reels</a></li>
              <li><a href="#micro-jobs" className="hover:text-white transition-colors">Restaurant Menu & Poster Design</a></li>
              <li><a href="#micro-jobs" className="hover:text-white transition-colors">Front-End Landing Pages</a></li>
              <li><a href="#micro-jobs" className="hover:text-white transition-colors">Social Media & Daraz Shop Setup</a></li>
              <li><a href="#micro-jobs" className="hover:text-white transition-colors">O & A Level Tutoring</a></li>
            </ul>
          </div>

          {/* Quick Features Col */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-200 text-xs uppercase tracking-wider">
              {language === 'ur' ? 'اہم فیچرز' : 'Marketplace Tools'}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#success-stories" className="hover:text-white transition-colors">
                  {language === 'ur' ? 'کامیابی کی کہانیاں اور ٹیسٹیمونیئلز' : 'Success Stories & Testimonials'}
                </a>
              </li>
              <li>
                <button onClick={() => setIsAliScenarioModalOpen(true)} className="hover:text-white transition-colors cursor-pointer text-left">
                  Ali’s 30s Video Story (Interactive Demo)
                </button>
              </li>
              <li>
                <button onClick={() => openSkillQuiz('Graphic Design')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Skill Verification Assessments
                </button>
              </li>
              <li>
                <button onClick={() => setIsBusinessModelModalOpen(true)} className="hover:text-white transition-colors cursor-pointer text-left">
                  SWOT Analysis & 10% Revenue Model
                </button>
              </li>
              <li>
                <span className="text-slate-500">JazzCash · EasyPaisa · SadaPay · Raast</span>
              </li>
            </ul>
          </div>

          {/* Universities & Cities Col */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-200 text-xs uppercase tracking-wider">
              {language === 'ur' ? 'طلبہ نیٹ ورک' : 'Campus Network'}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving students & businesses across Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and Peshawar.
            </p>
            <div className="text-[11px] text-slate-500 pt-1">
              FAST-NUCES · NUST · LUMS · IBA · Punjab University · COMSATS · GIKI · NED
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 Skill2Earn Pakistan. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built for Pakistani Students & Local Small Businesses</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
