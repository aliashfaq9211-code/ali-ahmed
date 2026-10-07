import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  GraduationCap, 
  Pause, 
  Play,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  nameUrdu: string;
  type: 'student' | 'business';
  role: string;
  roleUrdu: string;
  entity: string;
  entityUrdu: string;
  city: string;
  avatarUrl: string;
  outcomeMetric: string;
  outcomeMetricUrdu: string;
  projectSnippet: string;
  quote: string;
  quoteUrdu: string;
  rating: number;
  paymentMethod: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-ali',
    name: 'Ali Raza',
    nameUrdu: 'علی رضا',
    type: 'student',
    role: 'BS Computer Science (Year 3)',
    roleUrdu: 'بی ایس کمپیوٹر سائنس (سال سوم)',
    entity: 'FAST-NUCES Lahore',
    entityUrdu: 'فاسٹ یونیورسٹی لاہور',
    city: 'Lahore',
    avatarUrl: '/src/assets/images/ali_student_creator_1791379117153.jpg',
    outcomeMetric: 'Earned Rs. 48,000 in 2 months',
    outcomeMetricUrdu: '2 ماہ میں 48,000 روپے کمائے',
    projectSnippet: 'Completed 16 short-form video reels for local brands',
    quote: 'Breaking into global platforms without 50 reviews felt impossible. On Skill2Earn, Khaas Attire saw my 30-second portfolio reel and booked me within hours. Getting paid directly into EasyPaisa without dollar conversion losses gave me real financial independence during university.',
    quoteUrdu: 'بین الاقوامی پلیٹ فارمز پر نئے اکاؤنٹ سے کام ملنا ناممکن تھا۔ اسکل ٹو ارن پر خاص ایٹائر نے میری 30 سیکنڈ کی ریل دیکھی اور فوری آرڈر دیا۔ ایزی پیسہ میں براہ راست بغیر کٹوتی ادائیگی نے مجھے خودمختار بنا دیا۔',
    rating: 5.0,
    paymentMethod: 'EasyPaisa'
  },
  {
    id: 'test-kiran',
    name: 'Kiran Fatima',
    nameUrdu: 'کرن فاطمہ',
    type: 'business',
    role: 'Founder & Creative Director',
    roleUrdu: 'بانی و کری ایٹو ڈائریکٹر',
    entity: 'Khaas Attire (Eastern Wear)',
    entityUrdu: 'خاص ایٹائر (لاہور)',
    city: 'Gulberg, Lahore',
    avatarUrl: '/src/assets/images/kiran_business_owner_1791381068151.jpg',
    outcomeMetric: '+240% social engagement · Saved Rs. 32,000',
    outcomeMetricUrdu: 'سوشل انگیجمنٹ میں 240٪ اضافہ · 32,000 کی بچت',
    projectSnippet: 'Hired Ali for Rs. 3,000 festive Eid campaign promo',
    quote: 'Commercial marketing agencies in Lahore quoted us Rs. 35,000 for a 30-second reel. On Skill2Earn, we hired Ali for Rs. 3,000. He understood local Pakistani fashion pacing, color graded the silk fabrics beautifully, and delivered in 48 hours. Escrow made it completely risk-free.',
    quoteUrdu: 'لاہور کی ایجنسیوں نے ایک ریل کے 35,000 روپے مانگے تھے۔ ہم نے اسکل ٹو ارن سے علی کو 3,000 میں ہائر کیا۔ اس نے 48 گھنٹوں میں زبردست ویڈیو دی اور ایسکرو پیمنٹ کی وجہ سے کوئی خطرہ بھی نہیں تھا۔',
    rating: 5.0,
    paymentMethod: 'JazzCash'
  },
  {
    id: 'test-ayesha',
    name: 'Ayesha Khan',
    nameUrdu: 'عائشہ خان',
    type: 'student',
    role: 'BS Software Engineering',
    roleUrdu: 'بی ایس سافٹ ویئر انجینئرنگ',
    entity: 'FAST-NUCES Islamabad',
    entityUrdu: 'فاسٹ یونیورسٹی اسلام آباد',
    city: 'Islamabad',
    avatarUrl: '/src/assets/images/ayesha_dev_avatar_1791379171367.jpg',
    outcomeMetric: 'Funded Rs. 115,000 semester tuition fee',
    outcomeMetricUrdu: '115,000 روپے کی سیمسٹر فیس خود ادا کی',
    projectSnippet: 'Delivered 8 responsive landing pages for local SMEs',
    quote: 'Local clinics, solar installers, and cafes in the twin cities need clean websites with WhatsApp ordering. Skill2Earn’s escrow means I never have to awkwardly chase clients for payments. I completely funded my 7th semester fee with micro-projects.',
    quoteUrdu: 'اسلام آباد اور پنڈی کے کلینکس اور کیفیز کو واٹس ایپ آرڈرنگ والی ویب سائٹس درکار ہوتی ہیں۔ اسکل ٹو ارن کے ایسکرو سسٹم کی بدولت ادائیگی وقت پر ملی اور میں نے اپنی سیمسٹر فیس خود ادا کی۔',
    rating: 5.0,
    paymentMethod: 'SadaPay'
  },
  {
    id: 'test-zubair',
    name: 'Zubair Ahmed',
    nameUrdu: 'زبیر احمد',
    type: 'business',
    role: 'Managing Partner',
    roleUrdu: 'مینیجنگ پارٹنر',
    entity: 'Karachi Chai Co.',
    entityUrdu: 'کراچی چائے کمپنی (کلفٹن)',
    city: 'Clifton, Karachi',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    outcomeMetric: '1,200 event tickets sold out in 48 hours',
    outcomeMetricUrdu: '48 گھنٹوں میں 1,200 ٹکٹیں فروخت ہو گئیں',
    projectSnippet: 'Commissioned Hamza (Punjab Univ) for bilingual poster',
    quote: 'Hamza designed our monsoon chai festival poster blending traditional truck art typography with modern layout. It received over 1,500 Instagram reposts. The project cost just Rs. 2,000, and funding via JazzCash was immediate.',
    quoteUrdu: 'حمزہ نے ہمارے چائے فیسٹیول کیلئے روایتی ٹرک آرٹ اور جدید ڈیزائن کا لاجواب امتزاج بنایا جس کو انسٹاگرام پر بھرپور پذیرائی ملی۔ 2,000 روپے میں اتنا شاندار کام کمال ہے۔',
    rating: 5.0,
    paymentMethod: 'JazzCash'
  },
  {
    id: 'test-fatima',
    name: 'Fatima Zahra',
    nameUrdu: 'فاطمہ زہرا',
    type: 'student',
    role: 'BSc Economics & Strategy',
    roleUrdu: 'بی ایس سی اکنامکس',
    entity: 'LUMS Lahore',
    entityUrdu: 'لمز یونیورسٹی لاہور',
    city: 'Lahore',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    outcomeMetric: 'Rs. 35,000/month recurring B2B retainer',
    outcomeMetricUrdu: '35,000 روپے ماہانہ ریٹینر آمدنی',
    projectSnippet: 'Writes SEO blog posts for Pakistani tech startups',
    quote: 'Balancing rigorous LUMS academics with full-time freelancing was overwhelming. On Skill2Earn, the micro-job structure lets me take tight weekend writing sprints. The skill verification test badge helped me double my per-article rate.',
    quoteUrdu: 'لمز کی پڑھائی کے دوران مائیکرو جابز بہترین حل ثابت ہوئیں۔ ویک اینڈ پر آرٹیکلز لکھتی ہوں اور ویریفائیڈ بیج کی وجہ سے مجھے بہترین معاوضہ ملتا ہے۔',
    rating: 4.9,
    paymentMethod: 'Raast'
  }
];

export const SuccessStories: React.FC = () => {
  const { language, setIsAliScenarioModalOpen, setIsPostJobModalOpen } = useApp();
  const [filter, setFilter] = useState<'all' | 'student' | 'business'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const displayedStories = TESTIMONIALS_DATA.filter(
    s => filter === 'all' || s.type === filter
  );

  // Auto-play rotating carousel
  useEffect(() => {
    if (!isAutoPlaying || displayedStories.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % displayedStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, displayedStories.length]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const currentStory = displayedStories[currentIndex] || displayedStories[0];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + displayedStories.length) % displayedStories.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % displayedStories.length);
  };

  return (
    <section id="success-stories" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{language === 'ur' ? 'کامیابی کی سچی کہانیاں' : 'Social Proof & Real Outcomes'}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">{language === 'ur' ? 'طلبہ اور کاروباروں کی رائے' : 'Verified Testimonials'}</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
              {language === 'ur' ? (
                <span className="font-urdu leading-relaxed">
                  طلبہ کا اعتماد، مقامی کاروباروں کا اطمینان
                </span>
              ) : (
                'Real Stories from Pakistani Students & Local Businesses'
              )}
            </h2>
            
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {language === 'ur'
                ? 'دیکھیں کہ کس طرح طلبہ نے اپنی تعلیمی فیس خود ادا کی اور مقامی دکانوں و برانڈز نے ہزاروں روپے کی بچت کی۔'
                : 'See how university students fund their tuition through micro-jobs and small businesses scale their online presence affordably.'
              }
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filter === 'all' ? 'bg-white text-emerald-950 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'ur' ? 'تمام کہانیاں' : 'All Stories'}
            </button>
            <button
              onClick={() => setFilter('student')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filter === 'student' ? 'bg-white text-emerald-950 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'ur' ? 'طلبہ فری لانسرز' : 'Student Creators'}
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                filter === 'business' ? 'bg-white text-emerald-950 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'ur' ? 'مقامی کاروبار' : 'Local Businesses'}
            </button>
          </div>
        </div>

        {/* Main Testimonial Featured Card */}
        {currentStory && (
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden transition-all duration-300"
          >
            {/* Subtle background quote mark */}
            <Quote className="w-32 h-32 text-slate-200/50 absolute -top-4 -right-4 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
              
              {/* Left Column: Author info & verified credentials */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={currentStory.avatarUrl} 
                      alt={currentStory.name} 
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-sm shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div 
                      className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-1 shadow-xs"
                      title="Verified Platform Deal"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {language === 'ur' ? currentStory.nameUrdu : currentStory.name}
                    </h3>
                    
                    <div className="text-xs text-slate-600 mt-0.5">
                      {language === 'ur' ? currentStory.roleUrdu : currentStory.role}
                    </div>

                    <div className="flex items-center gap-1 text-xs text-emerald-800 font-semibold mt-1">
                      {currentStory.type === 'student' ? (
                        <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                      )}
                      <span>{language === 'ur' ? currentStory.entityUrdu : currentStory.entity}</span>
                    </div>

                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {currentStory.city} · Paid via {currentStory.paymentMethod}
                    </div>
                  </div>
                </div>

                {/* Quantitative Impact Card */}
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Verified Result</span>
                  </div>
                  <div className="font-display font-bold text-base text-slate-900 tabular-nums">
                    {language === 'ur' ? currentStory.outcomeMetricUrdu : currentStory.outcomeMetric}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {currentStory.projectSnippet}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5 font-mono">
                    {currentStory.rating}.0 Verified Review
                  </span>
                </div>
              </div>

              {/* Right Column: The Quote & Story Narrative */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Clean unboxed category kicker */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-emerald-800 uppercase tracking-wide">
                    {currentStory.type === 'student' ? 'Student Perspective' : 'Local Business Experience'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>100% Escrow Protected Deal</span>
                </div>

                {/* Main Quote Text */}
                <blockquote className="text-base sm:text-lg lg:text-xl text-slate-800 leading-relaxed font-normal">
                  “{language === 'ur' ? currentStory.quoteUrdu : currentStory.quote}”
                </blockquote>

                {/* Actions adjacent to testimonial */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {currentStory.id === 'test-ali' || currentStory.id === 'test-kiran' ? (
                    <button
                      onClick={() => setIsAliScenarioModalOpen(true)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Simulate Ali & Khaas Attire Deal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsPostJobModalOpen(true)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Post a Similar Micro-Job</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Validated transaction in Skill2Earn ledger</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Carousel Navigation Bar (Bottom) */}
            <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
              
              {/* Dots indicator */}
              <div className="flex items-center gap-1.5">
                {displayedStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Jump to story ${index + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === index 
                        ? 'w-6 bg-emerald-700' 
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
                <span className="text-xs text-slate-400 ml-2 font-mono tabular-nums">
                  {currentIndex + 1} / {displayedStories.length}
                </span>
              </div>

              {/* Prev / Play / Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlaying(prev => !prev)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 rounded-md transition-colors cursor-pointer"
                  title={isAutoPlaying ? 'Pause rotation' : 'Resume auto-rotation'}
                >
                  {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={handlePrev}
                  className="p-2 text-slate-700 hover:text-emerald-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-xs transition-colors cursor-pointer"
                  title="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 text-slate-700 hover:text-emerald-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-xs transition-colors cursor-pointer"
                  title="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Thumbnail Selector Strip */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {TESTIMONIALS_DATA.map((story, idx) => {
            const isSelected = currentStory?.id === story.id;
            return (
              <button
                key={story.id}
                onClick={() => {
                  const newIndex = displayedStories.findIndex(s => s.id === story.id);
                  if (newIndex !== -1) setCurrentIndex(newIndex);
                  else {
                    setFilter('all');
                    setCurrentIndex(idx);
                  }
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/60 shadow-xs ring-1 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <img 
                  src={story.avatarUrl} 
                  alt={story.name} 
                  className="w-9 h-9 rounded-lg object-cover border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">
                    {language === 'ur' ? story.nameUrdu : story.name}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {story.entity}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Claim-to-Proof Quantitative Stats Row */}
        <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-emerald-800 font-mono tabular-nums">
              Rs. 4.8M+
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {language === 'ur' ? 'طلبہ کو ادا شدہ رقم' : 'Paid Out to Pakistani Students'}
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 font-mono tabular-nums">
              1,420+
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {language === 'ur' ? 'مکمل شدہ مائیکرو پراجیکٹس' : 'Completed Micro-Jobs'}
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 font-mono tabular-nums">
              98.6%
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {language === 'ur' ? 'اطمینان کی شرح' : 'Satisfied Local Clients'}
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 font-mono tabular-nums">
              15+
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {language === 'ur' ? 'شراکت دار یونیورسٹیاں' : 'Campus Partner Networks'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
