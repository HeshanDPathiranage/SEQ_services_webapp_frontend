"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FAQSection } from '../../components/sections/FAQSection';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Award, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../lib/data';

export function FaqClient() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Creative Page Header / Hero Section - Left-Aligned Split Layout with Side Image */}
      <section className="relative pt-32 pb-16 px-6 lg:px-16 xl:px-24 bg-white border-b border-[#E2E8F0] overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none -mr-40 -mt-40" />

        <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Left-Aligned FAQs Heading & Subtitle */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6 bg-slate-100/80 px-3.5 py-1.5 rounded-full border border-slate-200/80">
              <Link href="/" className="hover:text-[#29B6F6] transition-colors">Home</Link>
              <ChevronRight size={12} className="text-slate-400" />
              <span className="text-[#0B1221]">FAQ</span>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#29B6F6] bg-[#29B6F6]/10 px-4 py-1.5 rounded-full border border-[#29B6F6]/20 inline-block mb-4">
                Help & Knowledge Base
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0B1221] leading-tight tracking-tight mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg sm:text-xl text-[#334155] font-normal leading-relaxed mb-8 max-w-xl">
                Have questions about our commercial cleaning, biohazard remediation, compliance certifications, or quote process? Find detailed answers below.
              </p>
            </motion.div>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                <ShieldCheck size={16} className="text-[#29B6F6]" />
                ISO 9001, 14001, 45001 Certified
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700">
                <Award size={16} className="text-emerald-500" />
                Fully Licensed & Insured
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group"
            >
              <img 
                src="/images/contact_side_image.png" 
                alt="SEQ Services Professional Cleaning Support" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-[#0B1221]/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#29B6F6] mb-2">24/7 Operations Support</span>
                <p className="text-lg sm:text-xl font-bold font-serif leading-snug">Need immediate help with a specialized project?</p>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-sm font-bold text-[#29B6F6] hover:text-white transition-colors">
                    <Phone size={16} /> Call {CONTACT_INFO.phone}
                  </a>
                  <Link href="/#quote" className="text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-[#29B6F6]">
                    Get Quote &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Main FAQ Accordion Component */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-[1920px] mx-auto">
        <FAQSection />
      </section>

      {/* Still Have Questions Banner */}
      <section className="pb-20 px-6 bg-fluid-wave-fixed text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0B1221] mb-6 text-center">Still Have Questions?</h2>
          <p className="text-lg sm:text-xl text-[#334155] mb-10 font-normal max-w-xl mx-auto text-center">Our friendly team is here to help. Reach out to discuss your specific facility requirements or request a custom proposal.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#quote" className="inline-block px-10 py-4 bg-[#29B6F6] text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-[#0042a3] transition-all text-center">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
