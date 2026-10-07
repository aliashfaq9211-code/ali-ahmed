import React from 'react';
import { useApp } from '../context/AppContext';
import { StudentProfile } from '../types';
import { 
  Star, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

export const StudentDirectory: React.FC = () => {
  const { 
    students, 
    selectedCategory, 
    searchQuery, 
    selectedCity, 
    language, 
    setSelectedStudent,
    openSkillQuiz
  } = useApp();

  const filteredStudents = students.filter(student => {
    const matchesCategory = selectedCategory === 'All' || 
      student.skills.includes(selectedCategory) ||
      student.portfolio.some(p => p.category === selectedCategory);

    const matchesCity = selectedCity === 'All' || 
      student.city.toLowerCase() === selectedCity.toLowerCase();

    const query = searchQuery.toLowerCase();
    const matchesQuery = !query || 
      student.name.toLowerCase().includes(query) ||
      student.university.toLowerCase().includes(query) ||
      student.headline.toLowerCase().includes(query) ||
      student.skills.some(s => s.toLowerCase().includes(query));

    return matchesCategory && matchesCity && matchesQuery;
  });

  return (
    <section id="student-talent" className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              {language === 'ur' ? 'یونیورسٹی کے باصلاحیت طلبہ' : 'Verified Student Talent Pool'}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {language === 'ur' ? 'ڈیجیٹل پورٹ فولیو اور طلبہ پروفائلز' : 'Hire Young Creators with Digital Portfolios'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {language === 'ur'
                ? 'فاسٹ، نسٹ، لمز اور پنجاب یونیورسٹی کے تصدیق شدہ ہنر مند طلبہ کی براہ راست خدمات حاصل کریں۔'
                : 'Direct access to skilled students from top Pakistani institutions. Low overhead, fast turnaround, authenticated skills.'
              }
            </p>
          </div>

          <button
            onClick={() => openSkillQuiz('Graphic Design')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer self-start md:self-auto"
          >
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'ur' ? 'اپنا ہنر تصدیق کروائیں' : 'Are you a student? Take Skill Test'}</span>
          </button>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map(student => (
            <div 
              key={student.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Card Section */}
              <div className="p-5">
                
                {/* Avatar + University + Rating */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="relative">
                    <img 
                      src={student.avatarUrl} 
                      alt={student.name} 
                      className="w-14 h-14 rounded-xl object-cover border border-slate-200 shadow-xs shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    {student.verifiedSkills.length > 0 && (
                      <div 
                        className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-0.5 shadow-xs"
                        title="Skill2Earn Verified Student"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 
                        onClick={() => setSelectedStudent(student)}
                        className="font-semibold text-base text-slate-900 truncate group-hover:text-emerald-700 cursor-pointer"
                      >
                        {language === 'ur' ? student.nameUrdu : student.name}
                      </h3>
                      
                      {/* Rating */}
                      <div className="flex items-center text-xs font-semibold text-slate-700 shrink-0 tabular-nums">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-400 mr-0.5" />
                        <span>{student.rating}</span>
                        <span className="text-slate-400 font-normal ml-0.5">({student.reviewsCount})</span>
                      </div>
                    </div>

                    {/* University unboxed line */}
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{language === 'ur' ? student.universityUrdu : student.university}</span>
                    </div>

                    <div className="text-[11px] text-slate-400 truncate">
                      {student.city} · {student.completedJobsCount} micro-jobs done
                    </div>
                  </div>
                </div>

                {/* Headline */}
                <p className="text-xs font-medium text-slate-800 line-clamp-1 mb-2">
                  {language === 'ur' ? student.headlineUrdu : student.headline}
                </p>

                {/* Bio */}
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                  {language === 'ur' ? student.bioUrdu : student.bio}
                </p>

                {/* Unboxed Skills List */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-600">
                  {student.skills.slice(0, 4).map((skill, idx) => (
                    <span key={skill} className="flex items-center">
                      <span className={student.verifiedSkills.includes(skill) ? 'font-medium text-emerald-800' : ''}>
                        {skill}
                      </span>
                      {idx < Math.min(student.skills.length, 4) - 1 && (
                        <span aria-hidden="true" className="text-slate-300 ml-2">·</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Portfolio Sample Thumbnail if available */}
                {student.portfolio.length > 0 && student.portfolio[0].imageUrl && (
                  <div className="mt-3 relative rounded-lg overflow-hidden border border-slate-200 aspect-video bg-slate-100">
                    <img 
                      src={student.portfolio[0].imageUrl} 
                      alt={student.portfolio[0].title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] text-white font-medium truncate">
                        Sample: {student.portfolio[0].title}
                      </span>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Micro-Job From</div>
                  <div className="text-sm font-bold text-slate-900 font-mono tabular-nums">
                    Rs. {student.startingMicroJobPKR.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudent(student)}
                  className="px-3 py-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{language === 'ur' ? 'پورٹ فولیو دیکھیں' : 'View Portfolio'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
