import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Category } from '../types';
import { X, Plus, Sparkles, Building2, MapPin, DollarSign, Clock, ShieldCheck } from 'lucide-react';

const CATEGORIES: Category[] = [
  'Graphic Design',
  'Video Editing',
  'Web Development',
  'Content Writing',
  'Social Media Management',
  'Photography',
  'Presentation Design',
  'Data Entry',
  'Tutoring'
];

export const PostJobModal: React.FC = () => {
  const { 
    isPostJobModalOpen, 
    setIsPostJobModalOpen, 
    createJob, 
    language 
  } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Category>('Graphic Design');
  const [clientName, setClientName] = useState('');
  const [clientType, setClientType] = useState<'Small Business' | 'Restaurant' | 'Startup' | 'Online Seller' | 'Teacher / Individual'>('Small Business');
  const [clientCity, setClientCity] = useState('Lahore');
  const [budgetPKR, setBudgetPKR] = useState(2500);
  const [deliveryDays, setDeliveryDays] = useState(2);
  const [description, setDescription] = useState('');

  if (!isPostJobModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !clientName.trim() || !description.trim()) return;

    createJob({
      title,
      titleUrdu: title,
      category,
      clientName,
      clientType,
      clientCity,
      budgetPKR,
      deliveryDays,
      description,
      descriptionUrdu: description
    });

    setIsPostJobModalOpen(false);
    // Reset form
    setTitle('');
    setDescription('');
    setClientName('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
              {language === 'ur' ? 'پاکستانی کاروباروں کیلئے' : 'For Pakistani Small Businesses & Clients'}
            </span>
            <h2 className="font-display font-bold text-lg text-white">
              {language === 'ur' ? 'نیا مائیکرو جاب یا پراجیکٹ پوسٹ کریں' : 'Post a Student Micro-Job'}
            </h2>
          </div>
          <button
            onClick={() => setIsPostJobModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., 30s Instagram Reel for Cafe, Food Menu Redesign, or Shopify Landing"
              className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Skill Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your City *
              </label>
              <select
                value={clientCity}
                onChange={(e) => setClientCity(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Multan">Multan</option>
                <option value="Peshawar">Peshawar</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Business / Client Name *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Khaas Attire or Coffee Roastery"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
              </input>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Business Sector
              </label>
              <select
                value={clientType}
                onChange={(e) => setClientType(e.target.value as any)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="Small Business">Small Business</option>
                <option value="Restaurant">Restaurant / Cafe</option>
                <option value="Startup">Startup / Tech</option>
                <option value="Online Seller">Daraz / Instagram Seller</option>
                <option value="Teacher / Individual">Teacher / Individual</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project Budget (PKR) *
              </label>
              <input
                type="number"
                required
                min={500}
                step={250}
                value={budgetPKR}
                onChange={(e) => setBudgetPKR(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <span className="text-[10px] text-slate-500">
                Micro-jobs typically range from Rs. 1,000 to Rs. 8,000
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Turnaround Needed (Days) *
              </label>
              <input
                type="number"
                required
                min={1}
                max={30}
                value={deliveryDays}
                onChange={(e) => setDeliveryDays(Number(e.target.value))}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Project Description & Requirements *
            </label>
            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you need delivered, any assets you have (photos/logos), and style preferences..."
              className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-[11px] text-emerald-900 leading-relaxed">
              Posting is completely free! You only fund the project via JazzCash, EasyPaisa, or SadaPay once you select your student freelancer.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsPostJobModalOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Post Project Now
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
