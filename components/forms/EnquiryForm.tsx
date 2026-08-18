'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { enquirySchema, EnquirySchemaValues } from '../../lib/validations';
import { GROUPED_SERVICES } from '../../lib/data';
import { searchSuburbs, findLocalSuburb, SuburbData } from '../../lib/locations';
import dynamic from 'next/dynamic';
import { MapPin, User, Mail, Briefcase, Maximize, MessageSquare, ArrowRight, Loader2 } from 'lucide-react';

const LocationMapSelector = dynamic(() => import('./LocationMapSelector'), { ssr: false });

type EnquiryFormValues = EnquirySchemaValues;

export function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState<SuburbData[]>([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
  });

  const selectedCategory = watch('serviceCategory');

  async function onSubmit(values: EnquiryFormValues) {
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Unable to send enquiry.');
      }

      setStatus('success');
      setMessage('Your enquiry has been sent. We will contact you shortly.');
      reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-[2rem] bg-white/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 relative overflow-hidden"
      noValidate
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand via-[#00a8cc] to-brand" />
      
      <div className="space-y-2 mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight text-slate-900">Get in touch</h3>
        <p className="text-base sm:text-lg text-slate-600 font-medium">Fill out the form below and our team will get back to you.</p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group relative">
          <span>Name *</span>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={20} />
            <input
              {...register('name')}
              className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 pl-12 pr-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 focus:outline-none shadow-sm"
              placeholder="Your full name"
            />
          </div>
          {errors.name && <span className="text-xs sm:text-sm font-medium text-rose-500 mt-1 block">{errors.name.message}</span>}
        </label>

        <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group relative">
          <span>Company Name</span>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={20} />
            <input
              {...register('companyName')}
              className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 pl-12 pr-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 focus:outline-none shadow-sm"
              placeholder="Company / Business name (optional)"
            />
          </div>
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group">
          <span>Phone *</span>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry="AU"
                international
                withCountryCallingCode
                placeholder="0400 000 000"
                className="phone-input-wrapper w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 focus-within:border-brand focus-within:bg-white focus-within:ring-4 focus-within:ring-brand/10 focus-within:outline-none shadow-sm [&_.PhoneInputCountry]:mr-3 [&_.PhoneInputCountryIcon]:rounded-sm [&_.PhoneInputCountryIcon]:shadow-sm"
              />
            )}
          />
          {errors.phone && <span className="text-xs sm:text-sm font-medium text-rose-500 mt-1 block">{errors.phone.message}</span>}
        </label>

        <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group">
          <span>Email *</span>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={20} />
            <input
              {...register('email')}
              className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 pl-12 pr-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 focus:outline-none shadow-sm"
              placeholder="email@example.com"
              type="email"
            />
          </div>
          {errors.email && <span className="text-xs sm:text-sm font-medium text-rose-500 mt-1 block">{errors.email.message}</span>}
        </label>
      </div>

      <div className="mb-6 relative z-30">
        <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
          <span>Location / Suburb *</span>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={20} />
            <input
              {...register('location', {
                onChange: (e) => {
                  const val = e.target.value;
                  const matches = searchSuburbs(val, 6);
                  setLocationSuggestions(matches);
                  setShowLocationDropdown(matches.length > 0);
                },
                onBlur: (e) => {
                  const val = e.target.value;
                  setTimeout(() => {
                    setShowLocationDropdown(false);
                    if (val && !/\d{4}/.test(val)) {
                      const match = findLocalSuburb(val);
                      if (match) {
                        setValue('location', `${match.suburb}, ${match.state} ${match.postcode}`, { shouldValidate: true });
                      }
                    }
                  }, 250);
                }
              })}
              onFocus={(e) => {
                if (e.target.value) {
                  const matches = searchSuburbs(e.target.value, 6);
                  setLocationSuggestions(matches);
                  setShowLocationDropdown(matches.length > 0);
                }
              }}
              autoComplete="off"
              className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 pl-12 pr-12 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 focus:outline-none shadow-sm"
              placeholder="Start typing Suburb (e.g. Archerfield, Southport, Chermside...)"
            />
            <button 
              type="button" 
              onClick={() => setIsMapOpen(true)} 
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand hover:bg-brand/5 transition-colors bg-white p-2 rounded-xl shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand/20 z-10 group/btn"
              title="Select on map"
            >
              <MapPin size={20} className="text-brand transition-transform group-hover/btn:scale-110" />
            </button>

            {/* Live Suburb & Postcode Autocomplete Dropdown */}
            {showLocationDropdown && locationSuggestions.length > 0 && (
              <div className="absolute left-0 top-full mt-1.5 w-full bg-white rounded-2xl border border-slate-200 shadow-2xl py-2 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-600 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between">
                  <span>Matching Suburbs</span>
                  <span>Postal Code</span>
                </div>
                {locationSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onMouseDown={() => {
                      setValue('location', `${item.suburb}, ${item.state} ${item.postcode}`, { shouldValidate: true });
                      setShowLocationDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-blue-50/80 transition-colors border-b border-slate-50 last:border-none group/item"
                  >
                    <div className="flex items-center gap-2.5">
                      <MapPin size={16} className="text-brand shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {item.suburb}, <span className="text-slate-500 font-semibold">{item.state}</span>
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 group-hover/item:bg-brand group-hover/item:text-white font-mono text-xs sm:text-sm font-extrabold transition-colors">
                      {item.postcode}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {errors.location && <span className="text-xs sm:text-sm font-medium text-rose-500 mt-1 block">{errors.location.message}</span>}
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
          <span>Service Category *</span>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={20} />
            <select
              {...register('serviceCategory', {
                onChange: () => setValue('serviceRequired', '')
              })}
              defaultValue=""
              className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 pl-12 pr-10 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 focus:outline-none shadow-sm appearance-none cursor-pointer"
            >
              <option value="" disabled>Select a category...</option>
              {GROUPED_SERVICES.map((group, idx) => (
                <option key={idx} value={group.category} className="font-semibold text-slate-900">
                  {group.category}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-brand transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          {errors.serviceCategory && <span className="text-xs sm:text-sm font-medium text-rose-500 mt-1 block">{errors.serviceCategory.message}</span>}
        </label>

        <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
          <span>Service Required *</span>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={20} />
            <select
              {...register('serviceRequired')}
              defaultValue=""
              disabled={!selectedCategory}
              className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 pl-12 pr-10 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 focus:outline-none shadow-sm appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {!selectedCategory ? (
                <option value="" disabled>Please select a category first...</option>
              ) : (
                <>
                  <option value="" disabled>Select a service...</option>
                  {GROUPED_SERVICES.find(g => g.category === selectedCategory)?.items.map((item, itemIdx) => (
                    <option key={itemIdx} value={item.name} className="font-semibold text-slate-900">
                      {item.name}
                    </option>
                  ))}
                </>
              )}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-brand transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          {errors.serviceRequired && <span className="text-xs sm:text-sm font-medium text-rose-500 mt-1 block">{errors.serviceRequired.message}</span>}
        </label>
      </div>

      <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group flex flex-col">
        <span>Message *</span>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4.5 text-slate-400 group-focus-within:text-brand transition-colors" size={20} />
          <textarea
            {...register('message')}
            rows={4}
            className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 pl-12 pr-4 py-4 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10 focus:outline-none shadow-sm block resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>
        {errors.message && <span className="text-xs sm:text-sm font-medium text-rose-500 mt-1 block">{errors.message.message}</span>}
      </label>

      {message ? (
        <div className={`rounded-2xl px-5 py-4 text-sm font-medium flex items-center gap-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${status === 'success' ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-rose-50 text-rose-900 border border-rose-100'}`}>
          {status === 'success' ? (
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          ) : (
            <div className="h-2 w-2 rounded-full bg-rose-500" />
          )}
          {message}
        </div>
      ) : null}

      <button
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden rounded-2xl bg-brand py-5 sm:py-6 text-lg sm:text-xl md:text-2xl font-extrabold text-white transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,82,204,0.4)] focus:outline-none focus:ring-4 focus:ring-brand/20 active:scale-[0.98] disabled:opacity-75 disabled:hover:shadow-none disabled:active:scale-100 mt-4"
        type="submit"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700 to-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10 flex items-center justify-center gap-2.5">
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={24} />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Request</span>
              <ArrowRight size={24} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </>
          )}
        </span>
      </button>

      {isMapOpen && (
        <LocationMapSelector 
          onClose={() => setIsMapOpen(false)}
          onSelectLocation={(loc) => {
            setValue('location', loc, { shouldValidate: true });
            setIsMapOpen(false);
          }}
        />
      )}
    </form>
  );
}
