"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FAQSection } from '../../components/sections/FAQSection';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Clock, Award, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../lib/data';

export default function FAQPage() {
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
              <ChevronRight size={13} className="text-slate-400" />
              <span className="text-[#29B6F6]">FAQs</span>
            </div>

            {/* Title: FAQs */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#0B1221] tracking-tight leading-[1.05] mb-6"
            >
              FAQs
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[#334155] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl text-left"
            >
              We understand the operational, compliance, and scheduling questions commercial clients face. Explore clear answers regarding our commercial cleaning, biohazard protocols, safety standards, and pricing across Australia.
            </motion.p>

            {/* Quick Feature Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap gap-4 text-sm font-bold text-slate-700"
            >
              <div className="flex items-center gap-2 bg-blue-50/80 text-[#29B6F6] px-4 py-2.5 rounded-xl border border-blue-100 shadow-sm">
                <ShieldCheck size={18} />
                <span>QBCC & cm3 Accredited</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50/80 text-emerald-700 px-4 py-2.5 rounded-xl border border-emerald-100 shadow-sm">
                <Clock size={18} />
                <span>24/7 Rapid Emergency Response</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
                <Award size={18} className="text-slate-600" />
                <span>Flexible Service Contracts</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Side Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-6 relative w-full"
          >
            <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/90 group">
              <img 
                src="/images/about_team_hd.jpg" 
                alt="SEQ Services Commercial Cleaning Team" 
                className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.06] transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-[#0B1221]/20 to-transparent flex flex-col justify-end p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold self-start mb-3 border border-white/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SEQ Support Specialists</span>
                </div>
                <h3 className="text-white font-serif text-2xl sm:text-3xl md:text-4xl font-bold">Have Questions About Your Facility?</h3>
                <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light mt-2 text-left">Our customer service team is on call to assist with quotes & custom cleaning plans.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Interactive Page-Wide FAQ Section */}
      <FAQSection showTitle={false} className="bg-transparent border-t-0 py-16" />
    </div>
  );
}
