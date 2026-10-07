import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  BarChart3, 
  CheckCircle2, 
  DollarSign, 
  ShieldCheck, 
  Award, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

export const BusinessModelModal: React.FC = () => {
  const { isBusinessModelModalOpen, setIsBusinessModelModalOpen, language } = useApp();
  const [activeTab, setActiveTab] = useState<'revenue' | 'competitors' | 'swot' | 'marketing'>('revenue');

  if (!isBusinessModelModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Skill2Earn Business Model & Strategy Blueprint
              </h2>
              <p className="text-[11px] text-slate-400">Pakistan Student Skills Marketplace Architecture</p>
            </div>
          </div>
          <button
            onClick={() => setIsBusinessModelModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('revenue')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'revenue' ? 'bg-white text-emerald-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💰 Revenue Model
          </button>
          <button
            onClick={() => setActiveTab('competitors')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'competitors' ? 'bg-white text-emerald-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚔️ Competitor Matrix
          </button>
          <button
            onClick={() => setActiveTab('swot')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'swot' ? 'bg-white text-emerald-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📊 SWOT Analysis
          </button>
          <button
            onClick={() => setActiveTab('marketing')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeTab === 'marketing' ? 'bg-white text-emerald-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🚀 Marketing & Campus Outreach
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          
          {/* TAB 1: Revenue Model */}
          {activeTab === 'revenue' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <h4 className="font-bold text-sm text-emerald-950 mb-1">
                  1. Core Commission Model (10% Platform Fee)
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Skill2Earn keeps a small 10% fee from completed micro-projects. Beginners keep 90% of their earnings with zero bidding fees or paid connects.
                </p>
                <div className="bg-white p-3.5 rounded-lg border border-emerald-100 text-xs font-mono space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Client pays:</span>
                    <span className="font-bold text-slate-900">Rs. 5,000</span>
                  </div>
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Student receives:</span>
                    <span>Rs. 4,500 (90%)</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Skill2Earn retains:</span>
                    <span>Rs. 500 (10%)</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-1">⭐ Premium Student Profiles</h5>
                  <p className="text-slate-600">Rs. 499/mo for custom portfolio domain, video showreel embed, and boosted search placement.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-1">🏢 Small Business Subscriptions</h5>
                  <p className="text-slate-600">Monthly retainer packages for restaurants and clothing brands hiring recurring student creators.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-1">🎖️ Skill Verification Certificates</h5>
                  <p className="text-slate-600">Proctored practical tests providing verified PDF credentials for student CVs and LinkedIn.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-1">🤝 Training & Agency Partnerships</h5>
                  <p className="text-slate-600">Bootcamps with local universities and creative agencies looking to hire fresh graduates.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Competitors */}
          {activeTab === 'competitors' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                      <th className="py-2.5 px-3">Platform</th>
                      <th className="py-2.5 px-3">Main Focus</th>
                      <th className="py-2.5 px-3 text-emerald-800">Skill2Earn Key Difference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">Fiverr</td>
                      <td className="py-2.5 px-3">Global freelancing, high barrier</td>
                      <td className="py-2.5 px-3 text-emerald-900 font-medium">Pakistan-focused student marketplace, Rs. 500 micro-jobs, local language & culture</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">Upwork</td>
                      <td className="py-2.5 px-3">Senior professional contractors</td>
                      <td className="py-2.5 px-3 text-emerald-900 font-medium">Beginner-friendly, no connects fee, university identity validation</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">LinkedIn</td>
                      <td className="py-2.5 px-3">Professional networking & corporate jobs</td>
                      <td className="py-2.5 px-3 text-emerald-900 font-medium">Direct small-project transactional escrow; no corporate recruitment friction</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">Facebook Groups</td>
                      <td className="py-2.5 px-3">Informal posts, rampant payment scams</td>
                      <td className="py-2.5 px-3 text-emerald-900 font-medium">Verified student profiles + 100% Escrow Protection via JazzCash & EasyPaisa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SWOT Analysis */}
          {activeTab === 'swot' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1.5">
                <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Strengths (قوتیں)</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Large pool of 3M+ Pakistani university students</li>
                  <li>Affordable pricing accessible to local SMEs</li>
                  <li>Hyper-local cultural understanding (Urdu, Eid campaigns, local trends)</li>
                  <li>Frictionless entry for beginner creators</li>
                </ul>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 space-y-1.5">
                <div className="font-bold text-amber-950 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Weaknesses (کمزوریاں)</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>New brand requiring continuous trust-building</li>
                  <li>Students balancing coursework during exam seasons</li>
                  <li>Quality variance mitigated by Skill Verification quizzes</li>
                </ul>
              </div>

              <div className="p-3.5 bg-blue-50 rounded-xl border border-blue-200 space-y-1.5">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-blue-700" />
                  <span>Opportunities (مواقع)</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Rapid digitisation of Pakistani SMEs, cafes, and Instagram stores</li>
                  <li>Expansion of Raast P2M digital payment ecosystem</li>
                  <li>Institutional partnerships with FAST, NUST, LUMS, IBA, PU</li>
                </ul>
              </div>

              <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 space-y-1.5">
                <div className="font-bold text-rose-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-rose-700" />
                  <span>Threats & Mitigations (خطرات)</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Informal deals escaping off-platform → Solved with Escrow protection</li>
                  <li>Fake student profiles → Solved with university email verification (.edu.pk)</li>
                  <li>Global platform competition → Countered by local payment and micro-budgets</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: Marketing Strategy */}
          {activeTab === 'marketing' && (
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h5 className="font-bold text-slate-900">🎓 Campus Ambassadors Program</h5>
                <p className="text-slate-600">
                  Select 2-3 student leads at FAST, NUST, LUMS, IBA, and Punjab University to host on-campus freelancing workshops and onboard fellow students.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h5 className="font-bold text-slate-900">📱 TikTok & Instagram Creator Campaigns</h5>
                <p className="text-slate-600">
                  Short-form case studies showing real Pakistani students earning Rs. 20,000–50,000/month while studying full-time.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h5 className="font-bold text-slate-900">🎁 Peer Referral Rewards</h5>
                <p className="text-slate-600">
                  Both referring student and new registrant receive Rs. 200 wallet bonus on first completed project.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <h5 className="font-bold text-slate-900">🛍️ Local Business Starter Bundles</h5>
                <p className="text-slate-600">
                  Reach out to 500+ local clothing brands in Gulberg Lahore, Tariq Road Karachi, and Blue Area Islamabad with introductory Rs. 1,500 branding vouchers.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Skill2Earn Strategic Architecture · Pakistan 2026</span>
          <button
            onClick={() => setIsBusinessModelModalOpen(false)}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
