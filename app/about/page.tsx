"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, Users, Shield, MessageCircle } from 'lucide-react';
import { ABOUT_DATA } from '../../lib/data';
import Link from 'next/link';

const fadeUpVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const icons = [Award, MessageCircle, Users, Shield];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 bg-white overflow-hidden border-b border-[#E2E8F0]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#F4F7F9] to-transparent rounded-full blur-3xl opacity-70 -mr-72 -mt-72 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0B1221] leading-tight tracking-tight mb-6"
          >
            Commercial Cleaning Services Across Australia
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-1 bg-[#29B6F6] mx-auto rounded-full"
          />
        </div>
      </section>

      {/* FULL SCREEN HERO TEAM IMAGE FIRST */}
      <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-[1920px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[540px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group"
        >
          <img 
            src="/images/about_team_hd.jpg" 
            alt="SEQ Services Commercial Cleaning Team Queensland" 
            className="w-full h-full object-cover object-center img-enhanced transform group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Main Text Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 max-w-[1920px] mx-auto">
        <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full bg-white p-8 sm:p-12 rounded-3xl border border-[#E2E8F0] shadow-sm space-y-6 text-[#334155] text-base sm:text-lg md:text-xl font-normal leading-relaxed">
          <p className="leading-relaxed">{ABOUT_DATA.intro1}</p>
          <p className="leading-relaxed">{ABOUT_DATA.intro2}</p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="py-20 sm:py-24 px-6 bg-white border-t border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B1221] mb-4 text-center">Why Partner With SEQ Services</h2>
            <p className="text-[#334155] text-lg sm:text-xl md:text-2xl font-medium text-center mx-auto">Built on compliance, safety, operational integrity, and exceptional standards.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ABOUT_DATA.values.map((val, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div 
                  key={idx}
                  variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-[#F8FAFC] p-8 rounded-3xl border border-[#E2E8F0] hover:border-[#29B6F6]/40 hover:shadow-xl transition-all duration-300 group text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#29B6F6]/10 text-[#29B6F6] flex items-center justify-center mb-6 group-hover:bg-[#29B6F6] group-hover:text-white transition-colors duration-300 mx-auto">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1221] mb-4 text-center">{val.title}</h3>
                  <ul className="space-y-3">
                    {val.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-[#334155] text-base sm:text-lg leading-relaxed font-semibold flex items-center justify-center gap-2.5 text-center">
                        <span className="w-2 h-2 rounded-full bg-[#29B6F6] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ISO Certifications & Accreditations Section */}
      <section className="py-20 sm:py-24 px-6 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
        <div className="w-full max-w-[1920px] mx-auto lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#29B6F6] bg-[#29B6F6]/10 px-5 py-2 rounded-full border border-[#29B6F6]/20 inline-flex items-center justify-center mb-4 shadow-sm mx-auto text-center">
              Certified & Compliant
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#0B1221] mb-4 text-center">Our Industry Certifications</h2>
            <p className="text-[#334155] text-lg sm:text-xl md:text-2xl font-medium text-center mx-auto">Accredited to international standards for safety, quality management, and environmental compliance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://www.amtec.com.au/wp-content/uploads/2019/02/cm3-logo.jpg",
                code: "Cm3 Prequalified",
                title: "Safety & Contractor Prequalification",
                desc: "Cm3 Prequalified certification verifying our health and safety management systems, insurance compliance, and risk procedures."
              },
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HLx5Wvq6dlKkumKeutG4a9tE0MVX4ai0lXveGWmhDQ&s",
                code: "ISO 9001:2015 & ISO 45001",
                title: "Quality & Safety Management System",
                desc: "Certified for rigorous quality control, operational consistency, occupational safety standards, and continuous service improvement."
              },
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVnmGTFI-NXSulrh3hwLiAhE6HEjVwmVHuHkb5tlg-w&s=10",
                code: "ISO Certified Compliance",
                title: "Environmental & Workplace Excellence",
                desc: "Certified for sustainable eco-friendly cleaning practices, non-toxic chemical standards, and environmental protection."
              }
            ].map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#29B6F6]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-center"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#29B6F6] to-[#00a8cc]" />
                
                <div>
                  <div className="h-32 w-full rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-4 mb-6 group-hover:scale-105 transition-transform shadow-inner mx-auto">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                  <span className="text-sm font-extrabold uppercase tracking-widest text-[#29B6F6] bg-[#29B6F6]/10 px-4 py-1.5 rounded-lg border border-[#29B6F6]/20 inline-block mb-3 text-center">
                    {cert.code}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B1221] mb-4 text-center">{cert.title}</h3>
                  <p className="text-[#334155] text-base sm:text-lg leading-relaxed font-medium text-center">{cert.desc}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-600 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> Fully Certified
                  </span>
                  <span className="text-sm text-slate-600 font-bold">Queensland Accredited</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-fluid-wave-fixed text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0B1221] mb-6 text-center">Ready to elevate your commercial facility management?</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#334155] mb-10 font-normal max-w-2xl mx-auto text-center">Get in touch with our expert team today for a tailored operational proposal and quote.</p>
          <Link href="/#quote" className="inline-block px-10 py-4.5 bg-[#29B6F6] text-white text-lg sm:text-xl font-bold rounded-2xl shadow-lg hover:bg-[#0042a3] transition-all text-center mx-auto">
            Contact SEQ Services
          </Link>
        </div>
      </section>
    </div>
  );
}
