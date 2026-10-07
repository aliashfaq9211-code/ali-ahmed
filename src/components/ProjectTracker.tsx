import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ActiveOrder } from '../types';
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  FileCheck, 
  Upload, 
  Star, 
  ExternalLink,
  MessageSquare,
  Lock,
  ArrowRight
} from 'lucide-react';

export const ProjectTracker: React.FC = () => {
  const { 
    orders, 
    submitWorkDelivery, 
    approveDeliveryAndReleasePayment,
    language 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'in_progress' | 'review' | 'completed'>('all');
  const [submittingOrderId, setSubmittingOrderId] = useState<string | null>(null);
  const [deliveryNote, setDeliveryNote] = useState<string>('');
  
  // Rating modal state
  const [ratingOrderId, setRatingOrderId] = useState<string | null>(null);
  const [ratingStars, setRatingStars] = useState<number>(5);
  const [ratingComment, setRatingComment] = useState<string>('Great work! High quality output and fast turnaround.');

  const filteredOrders = orders.filter(o => {
    if (activeTab === 'in_progress') return o.status === 'in_progress';
    if (activeTab === 'review') return o.status === 'work_submitted';
    if (activeTab === 'completed') return o.status === 'approved_released';
    return true;
  });

  const handleDeliver = (orderId: string) => {
    if (!deliveryNote.trim()) return;
    submitWorkDelivery(
      orderId, 
      deliveryNote, 
      '/src/assets/images/clothing_promo_reel_1791379153783.jpg'
    );
    setSubmittingOrderId(null);
    setDeliveryNote('');
  };

  const handleConfirmApproval = (orderId: string) => {
    approveDeliveryAndReleasePayment(orderId, ratingStars, ratingComment);
    setRatingOrderId(null);
  };

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              {language === 'ur' ? 'جاری کام اور ادائیگی ٹریکر' : 'Live Escrow & Project Tracker'}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {language === 'ur' ? 'آرڈرز کی پیشرفت اور ادائیگی کی منظوری' : 'Deliverables & Payment Milestones'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {language === 'ur'
                ? 'پروجیکٹ کی تکمیل پر گاہک کام چیک کرتا ہے اور ادائیگی کی منظوری کے بعد رقم براہ راست طالب علم کے والیٹ میں منتقل ہوتی ہے۔'
                : 'Follow the prompt’s exact escrow lifecycle: Funds held safely → Deliverable uploaded → Client reviews & approves → Payout released → Dual ratings.'
              }
            </p>
          </div>

          {/* Segmented Filter */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All ({orders.length})
            </button>
            <button
              onClick={() => setActiveTab('in_progress')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'in_progress' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'review' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ready for Review
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'completed' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500">
              No orders currently in this status tab.
            </div>
          ) : (
            filteredOrders.map(order => (
              <div 
                key={order.id}
                className="bg-slate-50/70 rounded-xl border border-slate-200 p-5 space-y-4 hover:border-slate-300 transition-colors"
              >
                {/* Top Status & Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono text-slate-400">Order #{order.id}</span>
                      <span aria-hidden="true">·</span>
                      <span>Client: <strong>{order.clientName}</strong></span>
                      <span aria-hidden="true">·</span>
                      <span>Student: <strong>{order.studentName}</strong></span>
                    </div>
                    <h3 className="font-semibold text-base text-slate-900 mt-1">
                      {order.jobTitle}
                    </h3>
                  </div>

                  {/* Escrow badge & Amount */}
                  <div className="text-right">
                    <div className="text-xs font-mono font-bold text-slate-900">
                      Rs. {order.amountPKR.toLocaleString()} PKR
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center justify-end gap-1 mt-0.5">
                      <Lock className="w-3 h-3 text-emerald-600" />
                      <span>Student Receives: <strong>Rs. {order.studentEarningsPKR.toLocaleString()}</strong> (90%)</span>
                    </div>
                  </div>
                </div>

                {/* Status Indicator & Delivery Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  
                  {/* Status description */}
                  <div className="md:col-span-7 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        order.status === 'in_progress' ? 'bg-amber-500 animate-pulse' :
                        order.status === 'work_submitted' ? 'bg-blue-600 animate-bounce' :
                        'bg-emerald-600'
                      }`} />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {order.status === 'in_progress' && 'Student Working on Deliverable'}
                        {order.status === 'work_submitted' && 'Deliverable Submitted — Awaiting Client Approval'}
                        {order.status === 'approved_released' && 'Work Approved & Payment Released to Student'}
                      </span>
                    </div>

                    {order.deliveryNote && (
                      <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                        <span className="font-semibold text-slate-900 block mb-0.5">Student Delivery Note:</span>
                        <p className="italic">"{order.deliveryNote}"</p>
                        {order.deliveryAttachment && (
                          <div className="mt-2 flex items-center gap-2 text-emerald-700 font-medium">
                            <FileCheck className="w-4 h-4" />
                            <span>Attachment: Deliverable_Final_Render.mp4 / .pdf (Available)</span>
                          </div>
                        )}
                      </div>
                    )}

                    {order.clientRating && (
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs">
                        <div className="flex items-center gap-1 text-amber-500 font-semibold mb-1">
                          {[...Array(order.clientRating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-slate-700 ml-1">Client Approved ({order.clientRating}.0★)</span>
                        </div>
                        <p className="text-slate-600 italic">"{order.clientFeedback}"</p>
                      </div>
                    )}
                  </div>

                  {/* Actions Column */}
                  <div className="md:col-span-5 flex flex-col gap-2 items-start md:items-end">
                    
                    {/* If in progress, student can submit delivery */}
                    {order.status === 'in_progress' && (
                      <div>
                        {submittingOrderId === order.id ? (
                          <div className="w-full sm:w-80 bg-white p-3 rounded-xl border border-slate-300 shadow-sm space-y-2">
                            <label className="block text-[11px] font-semibold text-slate-700">
                              Upload Deliverable & Notes:
                            </label>
                            <textarea
                              rows={2}
                              value={deliveryNote}
                              onChange={(e) => setDeliveryNote(e.target.value)}
                              placeholder="e.g. Exported 1080x1920 reel with color grading and captions..."
                              className="w-full p-2 text-xs border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setSubmittingOrderId(null)}
                                className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-800"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleDeliver(order.id)}
                                className="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-md flex items-center gap-1 cursor-pointer"
                              >
                                <Upload className="w-3 h-3" />
                                <span>Submit Work</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={() => setSubmittingOrderId(order.id)}
                            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>Submit Finished Deliverable</span>
                          </button>
                        )}
                      </div>
                    )}

                    {/* If work submitted, client can approve & release payment */}
                    {order.status === 'work_submitted' && (
                      <button
                        onClick={() => setRatingOrderId(order.id)}
                        className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Approve Work & Release Rs. {order.studentEarningsPKR.toLocaleString()}</span>
                      </button>
                    )}

                    {/* If already completed */}
                    {order.status === 'approved_released' && (
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Payout Released via {order.paymentMethod}</span>
                        </span>
                        <div className="text-[11px] text-slate-400">
                          Skill2Earn Commission: Rs. {order.platformFeePKR} (10%)
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            ))
          )}
        </div>

        {/* Rating & Approval Modal */}
        {ratingOrderId && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-900">
                Approve Work & Rate Student
              </h3>
              <p className="text-xs text-slate-600">
                Releasing funds will immediately transfer <strong>Rs. {orders.find(o => o.id === ratingOrderId)?.studentEarningsPKR.toLocaleString()}</strong> to the student's wallet.
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRatingStars(star)}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star 
                        className={`w-6 h-6 ${
                          star <= ratingStars ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                        }`} 
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1">{ratingStars}.0 / 5.0</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Public Feedback & Review
                </label>
                <textarea
                  rows={3}
                  value={ratingComment}
                  onChange={(e) => setRatingComment(e.target.value)}
                  className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setRatingOrderId(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleConfirmApproval(ratingOrderId)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs cursor-pointer"
                >
                  Release Payment & Submit Review
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
