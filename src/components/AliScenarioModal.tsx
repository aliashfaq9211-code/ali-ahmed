import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Wallet, 
  Video, 
  Building2, 
  X,
  CreditCard,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

export const AliScenarioModal: React.FC = () => {
  const { 
    isAliScenarioModalOpen, 
    setIsAliScenarioModalOpen, 
    language,
    approveDeliveryAndReleasePayment,
    orders,
    setSelectedStudent,
    students
  } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 6;

  if (!isAliScenarioModalOpen) return null;

  const aliProfile = students.find(s => s.id === 'student-ali');

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-display font-bold text-lg">
              {language === 'ur' ? 'علی کا انٹرایکٹو ڈیمو کیس' : 'Interactive Case Study: Ali & Khaas Attire'}
            </span>
          </div>
          <button
            onClick={() => setIsAliScenarioModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-semibold text-emerald-800">
              Step {currentStep} of {totalSteps}: {
                currentStep === 1 ? 'Ali joins & builds portfolio' :
                currentStep === 2 ? 'Khaas Attire posts Rs. 3,000 project' :
                currentStep === 3 ? 'Ali applies with proposal' :
                currentStep === 4 ? 'Business selects Ali & funds Escrow' :
                currentStep === 5 ? 'Ali submits 30s video deliverable' :
                'Approval, payout (Rs. 2,700) & dual ratings'
              }
            </span>
            <span className="tabular-nums font-mono">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src="/src/assets/images/ali_student_creator_1791379117153.jpg" 
                  alt="Ali Raza" 
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">Ali Raza</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-md">
                      FAST-NUCES Lahore
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">BS Computer Science · Year 3</p>
                  <p className="text-sm text-slate-700 mt-1">
                    Ali knows video editing (Premiere Pro & After Effects) but had no international freelance clients on Fiverr.
                    He joins <strong>Skill2Earn</strong>, verifies his skill with a 5-minute quiz, and uploads a 30s sample reel to his digital portfolio.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Ali’s Digital Portfolio Asset</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-video">
                    <img 
                      src="/src/assets/images/clothing_promo_reel_1791379153783.jpg" 
                      alt="Sample reel" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="px-2.5 py-1 text-xs bg-white/90 text-slate-900 rounded font-medium flex items-center gap-1">
                        <Video className="w-3.5 h-3.5 text-emerald-600" />
                        Sample Festive Reel (30s)
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p><strong>Verified Badge:</strong> Video Editing (Score: 100%)</p>
                    <p><strong>Target Rate:</strong> Rs. 1,500 – Rs. 3,500 / micro-job</p>
                    <p><strong>Status:</strong> Ready to receive local client orders</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">Khaas Attire Lahore</h3>
                    <span className="text-xs bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md">
                      Local Apparel Business
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Gulberg III, Lahore · Women’s Festive Pret</p>
                  <p className="text-sm text-slate-700 mt-2">
                    Khaas Attire needs an energetic 30-second promotional Instagram Reel for their upcoming festive launch.
                    Agencies quoted Rs. 35,000+ which is beyond their budget. They post on <strong>Skill2Earn</strong> for <strong>Rs. 3,000</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-900">Project Posting Summary:</span>
                  <span className="font-bold text-emerald-800 font-mono text-sm">Budget: Rs. 3,000 PKR</span>
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p><strong>Title:</strong> 30-Second Promotional Video for Eastern Wear Brand</p>
                  <p><strong>Turnaround Needed:</strong> 48 Hours</p>
                  <p><strong>Raw Footage Provided:</strong> Google Drive folder with 6 clips + background sound</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">Ali’s Tailored Proposal</span>
                  <span className="text-xs font-mono font-bold text-slate-900">Bid: Rs. 3,000 · 2 Days</span>
                </div>
                <p className="text-sm text-slate-700 italic border-l-2 border-emerald-500 pl-3 py-1">
                  “Assalam-o-Alaikum! I saw your requirement for Khaas Attire. As a FAST CS student passionate about fashion reels, I have already edited 15+ Eastern reels with snappy cuts and beat-synced transitions. I can deliver a 9:16 high-conversion video in 48 hours!”
                </p>
                <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Includes 1 revision + color correction for Pakistani silk textiles</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-900 font-bold mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Khaas Attire Selects Ali & Locks Payment in Escrow</span>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  The client pays Rs. 3,000 using <strong>EasyPaisa / JazzCash</strong>. Skill2Earn holds the funds safely in Escrow.
                  Ali is notified that funds are secured and begins editing!
                </p>
                
                {/* Breakdown Calculation */}
                <div className="bg-white p-3 rounded-lg border border-emerald-100 text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between text-slate-700">
                    <span>Total Client Payment (Held in Escrow):</span>
                    <span className="font-bold">Rs. 3,000</span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Student Earnings on Delivery (90%):</span>
                    <span>Rs. 2,700</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Skill2Earn Platform Fee (10%):</span>
                    <span>Rs. 300</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Deliverable Submitted by Ali (48 Hours Later)
                </div>
                <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-video mb-3">
                  <img 
                    src="/src/assets/images/clothing_promo_reel_1791379153783.jpg" 
                    alt="Finished 30s video deliverable" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-xs text-emerald-400 font-semibold">Deliverable: Khaas_Eid_Promo_Final_v1.mp4 (1080x1920)</span>
                    <p className="text-xs text-slate-200">Paced cuts, color grading tuned for sunlight, Urdu audio master synced.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  Ali notes: <em>“Finished ahead of deadline! Please review the vertical reel format and let me know if you’d like any pacing adjustment.”</em>
                </p>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-900 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Khaas Attire Approves & Escrow Funds Released!</span>
                </div>
                <p className="text-xs text-slate-700">
                  Khaas Attire loves the video! They click "Approve Work".
                  <strong> Rs. 2,700</strong> is instantly credited to Ali’s Skill2Earn Wallet (withdrawable immediately to EasyPaisa or JazzCash), and Skill2Earn keeps <strong>Rs. 300</strong>.
                </p>

                {/* Rating exchange */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                    <div className="font-semibold text-slate-900 mb-1">Khaas Attire’s Review of Ali:</div>
                    <div className="flex items-center text-amber-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-slate-600 text-[11px] ml-1">5.0</span>
                    </div>
                    <p className="text-slate-600 italic">“Exceptional work! Super fast delivery, understood the vibe of our brand perfectly. Will hire again next month!”</p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs">
                    <div className="font-semibold text-slate-900 mb-1">Ali’s Review of Client:</div>
                    <div className="flex items-center text-amber-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-slate-600 text-[11px] ml-1">5.0</span>
                    </div>
                    <p className="text-slate-600 italic">“Clear instructions and prompt feedback. Great local brand to collaborate with!”</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restart Walkthrough</span>
          </button>

          <div className="flex items-center gap-3">
            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsAliScenarioModalOpen(false);
                  if (aliProfile) setSelectedStudent(aliProfile);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View Ali’s Live Profile & Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
