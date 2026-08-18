"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '../../../lib/data';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const fadeUpVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES_DATA.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero Header */}
      <section className="relative pt-32 pb-12 px-6 bg-white overflow-hidden border-b border-[#E2E8F0]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#29B6F6] rounded-full blur-[150px] opacity-[0.03] -mr-72 -mt-72 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#29B6F6]/10 text-[#29B6F6] text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 text-center mx-auto"
          >
            {service.categoryTitle || 'Commercial Services'}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0B1221] leading-tight tracking-tight mb-4 sm:mb-6 text-center"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-[#4A5568] font-light max-w-3xl mx-auto leading-relaxed text-center"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* FULL SCREEN HERO IMAGE FIRST */}
      {service.image && (
        <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-[1920px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[540px] rounded-3xl overflow-hidden shadow-xl relative border border-slate-200/80 group"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover object-center img-enhanced transform group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </section>
      )}

      {/* CONTENT AFTER THAT - EXACT SAME FULL WIDTH AS IMAGE ABOVE */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-[1920px] mx-auto space-y-10">
        
        {/* Full-Width Service Overview & Features */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
          <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm w-full text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1221] mb-6 text-center">Service Overview</h2>
            <div className="max-w-4xl mx-auto">
              {service.longDesc && service.longDesc.length > 0 ? (
                service.longDesc.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-[#334155] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 text-center">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-[#334155] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 text-center">
                  {service.shortDesc}
                </p>
              )}
            </div>
            
            {service.features && service.features.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-8 text-center">Key Service Inclusions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center justify-center text-center gap-3 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#29B6F6]/40 hover:shadow-sm transition-all">
                      <CheckCircle2 size={20} className="text-[#29B6F6] shrink-0" />
                      <span className="text-sm sm:text-base text-[#0B1221] font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Full-Width Request a Quote Banner Card */}
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
          <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl border border-[#E2E8F0] shadow-lg relative overflow-hidden flex flex-col items-center text-center justify-between gap-8">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#29B6F6] via-[#00a8cc] to-[#29B6F6]" />
            
            <div className="max-w-3xl text-center mx-auto">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1221] mb-3 text-center">Request a Custom Quote</h3>
              <p className="text-base sm:text-lg text-[#4A5568] font-light text-center">
                Need customized pricing for <strong>{service.title}</strong>? Speak with our operational specialists today for a tailored proposal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full shrink-0">
              <Link
                href="/#quote"
                className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#29B6F6] text-white font-bold text-sm sm:text-base hover:bg-[#2563EB] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#29B6F6]/25 text-center"
              >
                Get Custom Quote <ArrowRight size={18} />
              </Link>
              <a 
                href="tel:1300211231" 
                className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B1221] font-semibold text-sm sm:text-base hover:bg-slate-100 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone size={18} className="text-[#29B6F6]" />
                1300 211 231
              </a>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
