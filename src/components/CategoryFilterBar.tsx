import React from 'react';
import { useApp } from '../context/AppContext';
import { Category } from '../types';
import { Search, MapPin, Filter, X } from 'lucide-react';

const CATEGORIES: { label: Category; labelUrdu: string }[] = [
  { label: 'Graphic Design', labelUrdu: 'گرافک ڈیزائن' },
  { label: 'Video Editing', labelUrdu: 'ویڈیو ایڈیٹنگ' },
  { label: 'Web Development', labelUrdu: 'ویب ڈویلپمنٹ' },
  { label: 'Content Writing', labelUrdu: 'کنٹینٹ رائٹنگ' },
  { label: 'Social Media Management', labelUrdu: 'سوشل میڈیا' },
  { label: 'Photography', labelUrdu: 'فوٹوگرافی' },
  { label: 'Presentation Design', labelUrdu: 'پریزنٹیشن ڈیزائن' },
  { label: 'Data Entry', labelUrdu: 'ڈیٹا انٹری' },
  { label: 'Tutoring', labelUrdu: 'ٹیوشن / اکیڈمک' }
];

const CITIES = [
  { value: 'All', label: 'All Pakistan', labelUrdu: 'پورا پاکستان' },
  { value: 'Lahore', label: 'Lahore', labelUrdu: 'لاہور' },
  { value: 'Karachi', label: 'Karachi', labelUrdu: 'کراچی' },
  { value: 'Islamabad', label: 'Islamabad', labelUrdu: 'اسلام آباد' },
  { value: 'Rawalpindi', label: 'Rawalpindi', labelUrdu: 'راولپنڈی' },
  { value: 'Faisalabad', label: 'Faisalabad', labelUrdu: 'فیصل آباد' }
];

export const CategoryFilterBar: React.FC = () => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    selectedCity,
    setSelectedCity,
    language 
  } = useApp();

  return (
    <div className="bg-white border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        
        {/* Search and City Select Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ur'
                  ? 'ہنر، مائیکرو جاب یا یونیورسٹی تلاش کریں...'
                  : 'Search by skill, micro-job title, or university...'
              }
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* City Selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="text-xs text-slate-500 hidden md:inline">
              {language === 'ur' ? 'شہر:' : 'Location:'}
            </span>
            <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg border border-slate-200 overflow-x-auto w-full sm:w-auto scrollbar-none">
              {CITIES.map(c => (
                <button
                  key={c.value}
                  onClick={() => setSelectedCity(c.value)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCity === c.value
                      ? 'bg-white text-emerald-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {language === 'ur' ? c.labelUrdu : c.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* 9 Categories Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
            }`}
          >
            {language === 'ur' ? 'تمام شعبے' : 'All Categories'}
          </button>

          {CATEGORIES.map(cat => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.label
                  ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {language === 'ur' ? cat.labelUrdu : cat.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
