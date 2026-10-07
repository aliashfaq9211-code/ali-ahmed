import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Wallet, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  History,
  Lock,
  Building2,
  DollarSign
} from 'lucide-react';

export const StudentWalletModal: React.FC = () => {
  const { 
    isWalletModalOpen, 
    setIsWalletModalOpen, 
    walletBalancePKR, 
    pendingEscrowPKR, 
    transactions, 
    withdrawFunds, 
    language 
  } = useApp();

  const [withdrawAmount, setWithdrawAmount] = useState<number>(walletBalancePKR > 0 ? walletBalancePKR : 1000);
  const [withdrawMethod, setWithdrawMethod] = useState<string>('EasyPaisa');
  const [accountDetails, setAccountDetails] = useState<string>('0312-9876543');
  const [withdrawSuccess, setWithdrawSuccess] = useState<boolean>(false);
  const [withdrawError, setWithdrawError] = useState<string | null>(null);

  if (!isWalletModalOpen) return null;

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    setWithdrawError(null);

    if (withdrawAmount <= 0) {
      setWithdrawError('Please enter a valid amount');
      return;
    }
    if (withdrawAmount > walletBalancePKR) {
      setWithdrawError('Requested amount exceeds available balance');
      return;
    }

    const ok = withdrawFunds(withdrawAmount, withdrawMethod, accountDetails);
    if (ok) {
      setWithdrawSuccess(true);
      setTimeout(() => setWithdrawSuccess(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-emerald-400" />
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Student Earnings & Wallet
              </h2>
              <p className="text-[11px] text-slate-400">Direct Pakistani Bank & Mobile Wallet Payouts</p>
            </div>
          </div>
          <button
            onClick={() => setIsWalletModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Balance Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-emerald-900">
                Available for Withdrawal
              </div>
              <div className="text-2xl font-bold text-emerald-950 font-mono mt-1 tabular-nums">
                Rs. {walletBalancePKR.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-700 mt-0.5">
                Ready for instant transfer
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                Secured in Escrow
              </div>
              <div className="text-2xl font-bold text-slate-900 font-mono mt-1 tabular-nums flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Rs. {pendingEscrowPKR.toLocaleString()}</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Releases on work approval
              </div>
            </div>
          </div>

          {/* Withdrawal Form */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Request Instant Payout to Pakistani Account
            </h4>

            {withdrawSuccess ? (
              <div className="p-3 bg-emerald-100 text-emerald-900 rounded-lg text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Withdrawal of Rs. {withdrawAmount.toLocaleString()} sent to {withdrawMethod} successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleWithdraw} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Withdrawal Method
                    </label>
                    <select
                      value={withdrawMethod}
                      onChange={(e) => setWithdrawMethod(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="EasyPaisa">EasyPaisa (03xx)</option>
                      <option value="JazzCash">JazzCash (03xx)</option>
                      <option value="SadaPay">SadaPay (03xx / Account)</option>
                      <option value="NayaPay">NayaPay Wallet</option>
                      <option value="Raast">Raast Instant ID</option>
                      <option value="Meezan Bank">Meezan Bank</option>
                      <option value="HBL">Habib Bank (HBL)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Account / Mobile Number
                    </label>
                    <input
                      type="text"
                      required
                      value={accountDetails}
                      onChange={(e) => setAccountDetails(e.target.value)}
                      placeholder="0300-1234567 or IBAN"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Amount to Withdraw (PKR)
                  </label>
                  <input
                    type="number"
                    required
                    min={500}
                    max={walletBalancePKR}
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  {withdrawError && (
                    <p className="text-[11px] text-red-600 mt-1">{withdrawError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={walletBalancePKR <= 0}
                  className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white rounded-lg text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Withdraw Rs. {withdrawAmount.toLocaleString()} Now</span>
                </button>
              </form>
            )}
          </div>

          {/* Transaction Ledger */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <History className="w-3.5 h-3.5" />
              <span>Earnings & Payout Ledger</span>
            </h4>

            <div className="space-y-2">
              {transactions.map(tx => (
                <div 
                  key={tx.id}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between"
                >
                  <div className="space-y-0.5 max-w-[70%]">
                    <div className="font-semibold text-slate-900 truncate">{tx.description}</div>
                    <div className="text-[10px] text-slate-400">{tx.timestamp}</div>
                  </div>
                  <div className="text-right">
                    <span className={`font-mono font-bold ${
                      tx.type === 'withdrawal' ? 'text-slate-900' :
                      tx.type === 'escrow_hold' ? 'text-amber-600' :
                      'text-emerald-700'
                    }`}>
                      {tx.type === 'withdrawal' ? '-' : '+'}Rs. {tx.amountPKR.toLocaleString()}
                    </span>
                    <div className="text-[10px] text-slate-400 capitalize">{tx.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Platform fee: 10% already deducted on release</span>
          <button
            onClick={() => setIsWalletModalOpen(false)}
            className="px-4 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
