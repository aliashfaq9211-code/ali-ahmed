import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Star, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  ExternalLink,
  ShieldCheck,
  Send,
  Calendar
} from 'lucide-react';

export const StudentProfileModal: React.FC = () => {
  const { 
    selectedStudent, 
    setSelectedStudent, 
    language,
    setIsPostJobModalOpen,
    openSkillQuiz
  } = useApp();

  if (!selectedStudent) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Top Banner / Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button
            onClick={() => setSelectedStudent(null)}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative">
              <img
                src={selectedStudent.avatarUrl}
                alt={selectedStudent.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
                referrerPolicy="no-referrer"
              />
              {selectedStudent.verifiedSkills.length > 0 && (
                <div 
                  className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow-xs"
                  title="Verified Student Talent"
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display font-bold text-2xl text-white">
                  {language === 'ur' ? selectedStudent.nameUrdu : selectedStudent.name}
                </h2>
                <span className="text-xs bg-emerald-950/80 text-emerald-300 border border-emerald-800 px-2.5 py-0.5 rounded-md font-medium">
                  {language === 'ur' ? selectedStudent.universityUrdu : selectedStudent.university}
                </span>
              </div>

              <p className="text-sm text-slate-300">
                {language === 'ur' ? selectedStudent.headlineUrdu : selectedStudent.headline}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 pt-1">
                <span>{selectedStudent.degree}</span>
                <span aria-hidden="true">·</span>
                <span>Class of {selectedStudent.graduationYear}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedStudent.city}, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Client Rating</div>
              <div className="text-lg font-bold text-slate-900 flex items-center gap-1 mt-0.5 tabular-nums">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span>{selectedStudent.rating}</span>
                <span className="text-xs font-normal text-slate-500">({selectedStudent.reviewsCount})</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Micro-Jobs Done</div>
              <div className="text-lg font-bold text-slate-900 mt-0.5 tabular-nums">
                {selectedStudent.completedJobsCount} gigs
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Starting Micro-Rate</div>
              <div className="text-lg font-bold text-emerald-800 mt-0.5 font-mono tabular-nums">
                Rs. {selectedStudent.startingMicroJobPKR.toLocaleString()}
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Hourly Rate</div>
              <div className="text-lg font-bold text-slate-900 mt-0.5 font-mono tabular-nums">
                Rs. {selectedStudent.hourlyRatePKR.toLocaleString()}/hr
              </div>
            </div>
          </div>

          {/* About Bio */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              {language === 'ur' ? 'میرے بارے میں' : 'About the Creator'}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {language === 'ur' ? selectedStudent.bioUrdu : selectedStudent.bio}
            </p>
          </div>

          {/* Verified Skills & Badges */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {language === 'ur' ? 'مہارتیں اور تصدیق' : 'Skills & Platform Verification'}
              </h4>
              <button
                onClick={() => openSkillQuiz('Video Editing')}
                className="text-xs text-emerald-700 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Test your own skills</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedStudent.skills.map(skill => {
                const isVerified = selectedStudent.verifiedSkills.includes(skill);
                return (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-lg font-medium ${
                      isVerified
                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                    <span>{skill}</span>
                    {isVerified && <span className="text-[10px] text-emerald-700 uppercase font-bold tracking-wider">Verified</span>}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Digital Portfolio Showcase */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              {language === 'ur' ? 'پورٹ فولیو پراجیکٹس' : 'Digital Portfolio & Recent Work'}
            </h4>

            {selectedStudent.portfolio.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No public portfolio items uploaded yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedStudent.portfolio.map(item => (
                  <div 
                    key={item.id}
                    className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between"
                  >
                    {item.imageUrl && (
                      <div className="aspect-video relative bg-slate-900 overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {item.budgetPKR && (
                          <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/75 text-emerald-300 font-mono text-[11px] rounded font-bold">
                            Rs. {item.budgetPKR.toLocaleString()}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-3">
                      <div className="text-[11px] text-emerald-800 font-medium">{item.category}</div>
                      <h5 className="font-semibold text-sm text-slate-900 mt-0.5">{item.title}</h5>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{item.description}</p>
                      {item.clientName && (
                        <div className="text-[11px] text-slate-400 mt-2">
                          Delivered for: <strong>{item.clientName}</strong>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Escrow Guarantee Callout */}
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 space-y-0.5">
              <span className="font-bold text-emerald-900">Skill2Earn 100% Escrow Protection</span>
              <p>
                When you hire {selectedStudent.name}, your payment is deposited into secure escrow.
                Funds are only released to the student after you review and approve the completed deliverable.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Pakistan Verified Student ID: <strong>PK-{selectedStudent.id.toUpperCase()}</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedStudent(null)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                setSelectedStudent(null);
                setIsPostJobModalOpen(true);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire {selectedStudent.name.split(' ')[0]} for Micro-Job</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
