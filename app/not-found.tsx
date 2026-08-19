import React from 'react';
import Link from 'next/link';
import { Home, Briefcase, FileText, Phone, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../lib/data';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-[#FAFAFA]">
      <div className="w-full max-w-2xl bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-[#E2E8F0] shadow-xl text-center flex flex-col items-center">
        
        {/* 404 Badge */}
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#29B6F6] bg-[#29B6F6]/10 px-4 py-1.5 rounded-full border border-[#29B6F6]/20 mb-6">
          Error 404
        </span>

        {/* Heading & Message */}
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#0B1221] mb-4 tracking-tight text-center">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-[#334155] font-normal max-w-lg mb-8 leading-relaxed text-center">
          The page you are looking for might have been moved, deleted, or does not exist. Please use the links below to navigate back.
        </p>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-10">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B1221] font-bold text-sm hover:bg-[#29B6F6] hover:text-white hover:border-[#29B6F6] transition-all shadow-sm group"
          >
            <Home size={18} className="group-hover:text-white text-[#29B6F6] shrink-0" />
            <span>Homepage</span>
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B1221] font-bold text-sm hover:bg-[#29B6F6] hover:text-white hover:border-[#29B6F6] transition-all shadow-sm group"
          >
            <Briefcase size={18} className="group-hover:text-white text-[#29B6F6] shrink-0" />
            <span>Our Services</span>
          </Link>

          <Link
            href="/#quote"
            className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B1221] font-bold text-sm hover:bg-[#29B6F6] hover:text-white hover:border-[#29B6F6] transition-all shadow-sm group"
          >
            <FileText size={18} className="group-hover:text-white text-[#29B6F6] shrink-0" />
            <span>Get a Quote</span>
          </Link>
        </div>

        {/* Contact Phone & Back Action */}
        <div className="pt-8 border-t border-slate-100 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-600 font-semibold text-sm">
            <Phone size={16} className="text-[#29B6F6]" />
            <span>Need assistance? Call <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="text-[#0B1221] font-bold hover:underline">{CONTACT_INFO.phone}</a></span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0B1221] transition-colors"
          >
            <ArrowLeft size={14} /> Back to main site
          </Link>
        </div>

      </div>
    </div>
  );
}
