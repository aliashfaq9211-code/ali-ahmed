import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  User, 
  Building2,
  DollarSign,
  FileText
} from 'lucide-react';

export const JobDetailModal: React.FC = () => {
  const { 
    selectedJob, 
    setSelectedJob, 
    language, 
    proposals, 
    submitProposal, 
    openEscrowModal,
    role
  } = useApp();

  const [bidAmount, setBidAmount] = useState<number>(selectedJob ? selectedJob.budgetPKR : 3000);
  const [deliveryDays, setDeliveryDays] = useState<number>(selectedJob ? selectedJob.deliveryDays : 2);
  const [coverLetter, setCoverLetter] = useState<string>('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  if (!selectedJob) return null;

  const jobProposals = proposals.filter(p => p.jobId === selectedJob.id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverLetter.trim()) return;

    submitProposal(selectedJob.id, bidAmount, deliveryDays, coverLetter);
    setHasSubmitted(true);
    setTimeout(() => {
      setHasSubmitted(false);
      setCoverLetter('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
              <span>{selectedJob.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{selectedJob.clientCity}</span>
            </div>
            <h2 className="font-display font-bold text-lg text-white">
              {language === 'ur' ? selectedJob.titleUrdu : selectedJob.title}
            </h2>
          </div>
          <button
            onClick={() => setSelectedJob(null)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Key Facts */}
          <div className="grid grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Budget (PKR)</div>
              <div className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                Rs. {selectedJob.budgetPKR.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Turnaround</div>
              <div className="text-sm font-semibold text-slate-800 mt-0.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedJob.deliveryDays} {selectedJob.deliveryDays === 1 ? 'day' : 'days'}</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Client</div>
              <div className="text-sm font-semibold text-slate-800 mt-0.5 truncate">
                {selectedJob.clientName}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Project Description & Requirements
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {language === 'ur' ? selectedJob.descriptionUrdu : selectedJob.description}
            </p>
          </div>

          {/* Existing Proposals Section */}
          {jobProposals.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Active Student Proposals ({jobProposals.length})
              </h4>
              <div className="space-y-3">
                {jobProposals.map(prop => (
                  <div key={prop.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img 
                          src={prop.studentAvatar} 
                          alt={prop.studentName} 
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="font-semibold text-slate-900">{prop.studentName}</span>
                        <span className="text-[11px] text-slate-500">({prop.studentUniversity})</span>
                      </div>
                      <span className="font-mono font-bold text-emerald-800">
                        Bid: Rs. {prop.bidAmountPKR.toLocaleString()} · {prop.deliveryDays}d
                      </span>
                    </div>
                    <p className="text-slate-600 italic">"{prop.coverLetter}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Proposal Submission Form (for Students) */}
          <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Send Your Student Pitch & Proposal
              </h4>
              <span className="text-xs text-emerald-800">No connects or bid fees required</span>
            </div>

            {hasSubmitted ? (
              <div className="p-4 bg-emerald-100 rounded-lg text-emerald-900 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Your proposal has been submitted to {selectedJob.clientName}! Check your notifications.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Your Bid Amount (PKR)
                    </label>
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(Number(e.target.value))}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg font-mono"
                      min={500}
                      step={100}
                    />
                    <span className="text-[10px] text-slate-500">
                      You receive 90% (Rs. {Math.round(bidAmount * 0.9).toLocaleString()})
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Turnaround (Days)
                    </label>
                    <input
                      type="number"
                      value={deliveryDays}
                      onChange={(e) => setDeliveryDays(Number(e.target.value))}
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg font-mono"
                      min={1}
                      max={14}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Why are you the best student for this task?
                  </label>
                  <textarea
                    rows={3}
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Mention relevant university coursework, tools you know, and link to your portfolio sample..."
                    className="w-full p-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Proposal</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Escrow payment guaranteed by Skill2Earn</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedJob(null)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                const targetJob = selectedJob;
                setSelectedJob(null);
                openEscrowModal(targetJob);
              }}
              className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
            >
              Simulate Escrow Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
