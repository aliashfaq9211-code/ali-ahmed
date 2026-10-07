import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  Lock, 
  ArrowRight,
  Info
} from 'lucide-react';

const PAYMENT_METHODS = [
  { id: 'EasyPaisa', name: 'EasyPaisa', icon: '🟢', note: 'Instant Mobile Account (Telenor)' },
  { id: 'JazzCash', name: 'JazzCash', icon: '🔴', note: 'Instant Mobile Account (Jazz)' },
  { id: 'SadaPay', name: 'SadaPay', icon: '🔵', note: 'Mastercard / SadaBiz' },
  { id: 'NayaPay', name: 'NayaPay', icon: '🟣', note: 'Visa Digital Wallet' },
  { id: 'Raast', name: 'Raast P2M', icon: '⚡', note: 'State Bank Instant Payment ID' },
  { id: 'Bank', name: 'Bank Transfer', icon: '🏦', note: 'Meezan, HBL, Bank Alfalah' }
];

export const EscrowPaymentModal: React.FC = () => {
  const { 
    isEscrowModalOpen, 
    setIsEscrowModalOpen, 
    escrowTargetJob, 
    students,
    acceptProposalAndFundEscrow,
    language 
  } = useApp();

  const [selectedMethod, setSelectedMethod] = useState<string>('EasyPaisa');
  const [mobileNumber, setMobileNumber] = useState<string>('0300-1234567');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isEscrowModalOpen || !escrowTargetJob) return null;

  // Selected student to assign (defaults to Ali if video or first student)
  const assignedStudent = students.find(s => s.id === 'student-ali') || students[0];
  const totalAmount = escrowTargetJob.budgetPKR;
  const platformFee = Math.round(totalAmount * 0.10); // 10%
  const studentReceives = totalAmount - platformFee;   // 90%

  const handlePayAndSecure = () => {
    setIsProcessing(true);
    setTimeout(() => {
      acceptProposalAndFundEscrow(
        escrowTargetJob.id,
        assignedStudent,
        totalAmount,
        selectedMethod as any
      );
      setIsProcessing(false);
      setIsSuccess(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Skill2Earn Escrow Checkout
              </h2>
              <p className="text-[11px] text-slate-400">100% Buyer Protection & Local Payment</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsEscrowModalOpen(false);
              setIsSuccess(false);
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isSuccess ? (
            <div className="space-y-5">
              
              {/* Project & Student summary */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Project to Fund</div>
                <div className="font-semibold text-slate-900 text-sm mt-0.5">{escrowTargetJob.title}</div>
                <div className="text-slate-500 mt-1 flex items-center justify-between">
                  <span>Student: <strong>{assignedStudent.name}</strong> ({assignedStudent.university})</span>
                  <span>Turnaround: {escrowTargetJob.deliveryDays}d</span>
                </div>
              </div>

              {/* Commission & Escrow Breakdown (as specified in Prompt Item 8) */}
              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs space-y-2 font-mono">
                <div className="flex justify-between text-slate-700">
                  <span>Total Amount Paid by Client:</span>
                  <span className="font-bold text-slate-900">Rs. {totalAmount.toLocaleString()} PKR</span>
                </div>
                <div className="flex justify-between text-emerald-800 font-semibold border-t border-emerald-200/60 pt-1.5">
                  <span>Student Payout upon Approval (90%):</span>
                  <span>Rs. {studentReceives.toLocaleString()} PKR</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Skill2Earn Platform Commission (10%):</span>
                  <span>Rs. {platformFee.toLocaleString()} PKR</span>
                </div>
              </div>

              {/* Pakistani Payment Methods Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Pakistani Payment Gateway
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PAYMENT_METHODS.map(m => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setSelectedMethod(m.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${
                        selectedMethod === m.id
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className="text-base">{m.icon}</span>
                      <div className="truncate">
                        <div className="font-semibold">{m.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{m.note}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile / Account input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {selectedMethod} Mobile / Account Number
                </label>
                <div className="relative">
                  <Smartphone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="0300-1234567"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  You will receive a prompt on your phone to approve the escrow hold.
                </p>
              </div>

              {/* Escrow safety notice */}
              <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg text-[11px] text-slate-600 border border-slate-200">
                <Lock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  Funds remain safely held in Skill2Earn Escrow. The student only receives payout after you confirm satisfaction with the deliverable.
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                disabled={isProcessing}
                onClick={handlePayAndSecure}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Securing Escrow with {selectedMethod}...</span>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Pay Rs. {totalAmount.toLocaleString()} & Lock in Escrow</span>
                  </>
                )}
              </button>

            </div>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Payment Secured in Escrow!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Rs. {totalAmount.toLocaleString()} has been securely locked via <strong>{selectedMethod}</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-1.5">
                <p><strong>Assigned Student:</strong> {assignedStudent.name} ({assignedStudent.university})</p>
                <p><strong>Deliverable Expected:</strong> Within {escrowTargetJob.deliveryDays} days</p>
                <p className="text-emerald-800 font-medium">
                  The student has been notified to start work immediately. You can track progress in the Project Tracker.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsEscrowModalOpen(false);
                    setIsSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold cursor-pointer"
                >
                  View in Project Tracker
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
