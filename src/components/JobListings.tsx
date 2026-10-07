import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MicroJob } from '../types';
import { 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle, 
  Briefcase, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export const JobListings: React.FC = () => {
  const { 
    jobs, 
    selectedCategory, 
    searchQuery, 
    selectedCity, 
    language, 
    setSelectedJob,
    openEscrowModal,
    role
  } = useApp();

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesCity = selectedCity === 'All' || job.clientCity.toLowerCase() === selectedCity.toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesQuery = !query || 
      job.title.toLowerCase().includes(query) ||
      job.description.toLowerCase().includes(query) ||
      job.clientName.toLowerCase().includes(query) ||
      job.category.toLowerCase().includes(query);

    return matchesCategory && matchesCity && matchesQuery;
  });

  return (
    <section id="micro-jobs" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              {language === 'ur' ? 'کھلی پیشکشیں' : 'Micro-Jobs for Students'}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {language === 'ur' ? 'حالیہ پروجیکٹس اور کام' : 'Available Micro-Projects in Pakistan'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {language === 'ur' 
                ? 'چھوٹے بجٹ (500 سے 10,000 روپے) کے آسان پروجیکٹس جہاں آپ اپنا پہلا گاہک بنا سکتے ہیں۔'
                : 'Accessible starter gigs (Rs. 500 – 10,000) where young creators land their first paying clients.'
              }
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-800 tabular-nums">{filteredJobs.length}</span>
            <span>{language === 'ur' ? 'پروجیکٹس دستیاب ہیں' : 'active gigs available'}</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">
              {language === 'ur' ? 'کوئی پروجیکٹ نہیں ملا' : 'No micro-jobs found for this filter'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'ur' 
                ? 'براہ کرم دوسرے شہر یا شعبے کا انتخاب کریں یا سرچ کا لفظ تبدیل کریں۔'
                : 'Try selecting All Categories or All Cities to see more projects.'
              }
            </p>
          </div>
        ) : (
          /* Jobs Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              <div 
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between p-5 relative group"
              >
                <div>
                  {/* Clean unboxed metadata kicker */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <div className="flex items-center gap-1.5 font-medium text-emerald-800">
                      <span>{job.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-500">{job.clientCity}</span>
                    </div>
                    <span className="text-[11px] text-slate-400">{job.postedAt}</span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedJob(job)}
                    className="font-semibold text-base text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 cursor-pointer mb-2"
                  >
                    {language === 'ur' ? job.titleUrdu : job.title}
                  </h3>

                  {/* Description preview */}
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {language === 'ur' ? job.descriptionUrdu : job.description}
                  </p>
                </div>

                {/* Bottom Information & CTA */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Client Budget</div>
                      <div className="text-lg font-bold text-slate-900 font-mono tabular-nums">
                        Rs. {job.budgetPKR.toLocaleString()}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Turnaround</div>
                      <div className="text-xs font-semibold text-slate-700 flex items-center justify-end gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{job.deliveryDays} {job.deliveryDays === 1 ? 'day' : 'days'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Client Info & Status */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <span className="truncate max-w-[150px]">
                      By <strong>{job.clientName}</strong>
                    </span>
                    <span className="tabular-nums">
                      {job.proposalsCount} {job.proposalsCount === 1 ? 'proposal' : 'proposals'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="flex-1 py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{language === 'ur' ? 'تفصیلات اور درخواست' : 'Apply / View Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    {role === 'client' && job.status === 'open' && (
                      <button
                        onClick={() => openEscrowModal(job)}
                        className="py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                        title="Simulate client funding escrow"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
