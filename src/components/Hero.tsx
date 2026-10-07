import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  GraduationCap, 
  CheckCircle,
  Play
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { 
    language, 
    setIsPostJobModalOpen, 
    setIsAliScenarioModalOpen,
    role,
    setRole,
    t 
  } = useApp();

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-emerald-50/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Skill2Earn Pakistan</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className={language === 'ur' ? 'font-urdu text-sm' : ''}>
                {t('tagline')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-balance leading-tight">
              {language === 'ur' ? (
                <span className="font-urdu leading-relaxed">
                  آپ کا ہنر، آپ کی آمدنی — طلبہ اور پاکستانی کاروباروں کا قابل اعتماد پلیٹ فارم
                </span>
              ) : (
                <>
                  Empowering Pakistani Students to <span className="text-emerald-700 underline decoration-emerald-200 decoration-wavy">Earn From Skills</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {language === 'ur'
                ? 'فاسٹ، نسٹ، لمز اور پنجاب یونیورسٹی کے باصلاحیت طلبہ سے سستے داموں معیاری گرافک ڈیزائن، ویڈیو ایڈیٹنگ، ویب سائٹس اور سوشل میڈیا پوسٹس بنوائیں۔'
                : 'Connect talented university & college students with local restaurants, clothing brands, startups, and Daraz sellers for fast, high-quality, budget-friendly micro-jobs.'
              }
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#micro-jobs"
                className="px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{language === 'ur' ? 'مائیکرو جابز دیکھیں' : 'Browse Micro-Jobs'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsPostJobModalOpen(true)}
                className="px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {language === 'ur' ? 'کام پوسٹ کریں (بزنس)' : 'Hire a Student (Rs. 500+)'}
              </button>

              <button
                onClick={() => setIsAliScenarioModalOpen(true)}
                className="px-4 py-3 text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                <span>{language === 'ur' ? 'علی کا 30s ویڈیو ڈیمو' : 'Watch Ali’s Story Demo'}</span>
              </button>
            </div>

            {/* Unboxed Metadata Trust Bar (Zero-Pill discipline) */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Escrow Protection</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>JazzCash · EasyPaisa · SadaPay · Raast</span>
              </div>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>FAST · NUST · LUMS · IBA · PU</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Anchor with Real Pakistan Student Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
              <img
                src="/src/assets/images/hero_pakistan_students_1791379100728.jpg"
                alt="Pakistani university students collaborating on creative freelance projects"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

              {/* In-image Content Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center justify-between text-xs text-emerald-300 font-medium pb-2 border-b border-white/15">
                  <span>Student Micro-Job Spotlight</span>
                  <span className="tabular-nums">Rs. 3,000 Budget</span>
                </div>
                
                <h3 className="font-semibold text-base pt-2 text-white text-balance">
                  {language === 'ur' 
                    ? 'علی رضا (فاسٹ یونیورسٹی) نے خاص ایٹائر لاہور کیلئے 30 سیکنڈ کی پروموشنل ویڈیو تیار کی'
                    : 'Ali Raza (FAST CS) produced a 30s festive promo reel for Khaas Attire Lahore'
                  }
                </h3>
                
                <p className="text-xs text-slate-300 pt-1 line-clamp-2">
                  Customer paid Rs. 3,000 into Escrow → Ali delivered video in 48h → Payment released (Rs. 2,700 earned, Rs. 300 platform commission).
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/src/assets/images/ali_student_creator_1791379117153.jpg" 
                      alt="Ali Raza" 
                      className="w-6 h-6 rounded-full border border-emerald-400 object-cover"
                    />
                    <span className="text-xs font-medium text-slate-200">Ali Raza · FASTian</span>
                  </div>
                  <button
                    onClick={() => setIsAliScenarioModalOpen(true)}
                    className="text-xs font-semibold text-emerald-300 hover:text-emerald-200 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Simulate This Deal</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
