"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA, GROUPED_SERVICES } from '../../lib/data';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Shield, Phone, Mail, Sparkles, Building2, Briefcase, Home, HardHat } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Construction & Builders Cleaning Services": <HardHat size={18} />,
  "Commercial Cleaning Services": <Briefcase size={18} />,
  "Bio Cleaning Services": <Shield size={18} />,
  "Residential Cleaning Services": <Home size={18} />
};

export function ServicesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "construction", label: "Construction & Builders Cleaning Services" },
    { id: "commercial", label: "Commercial Cleaning Services" },
    { id: "bio", label: "Bio Cleaning Services" },
    { id: "residential", label: "Residential Cleaning Services" }
  ];

  const filteredGroupedServices = GROUPED_SERVICES.map(group => {
    if (selectedCategory === "all") return group;
    const catId = group.category.includes("Construction") ? "construction" :
                  group.category.includes("Commercial") ? "commercial" :
                  group.category.includes("Bio") ? "bio" : "residential";
    return catId === selectedCategory ? group : null;
  }).filter(Boolean);

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-6 bg-white overflow-hidden border-b border-[#E2E8F0]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#29B6F6] rounded-full blur-[150px] opacity-[0.04] -mr-72 -mt-72 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#29B6F6]/10 text-[#29B6F6] text-sm font-extrabold tracking-widest uppercase mb-6 shadow-sm"
          >
            <Sparkles size={16} /> Comprehensive Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#0B1221] leading-tight tracking-tight mb-6 text-center"
          >
            Professional Cleaning Services Across Australia
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-24 h-1 bg-[#29B6F6] mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-[#334155] font-normal max-w-3xl mx-auto leading-relaxed text-center"
          >
            Tailored cleaning and specialist services designed to meet the needs of commercial, construction, residential and sensitive environments across Australia.
          </motion.p>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="py-16 sm:py-24 px-6 max-w-[1920px] mx-auto lg:px-12 xl:px-20">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg lg:text-xl font-bold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-[#29B6F6] text-white shadow-lg shadow-[#29B6F6]/25 scale-105"
                  : "bg-white border border-[#E2E8F0] text-[#334155] hover:border-[#29B6F6]/40 hover:text-[#0B1221] shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grouped Services Sections */}
        <div className="space-y-20">
          {filteredGroupedServices.map((group, gIdx) => {
            if (!group) return null;
            return (
              <div key={gIdx} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 border-b border-[#E2E8F0] pb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#29B6F6]/10 text-[#29B6F6] flex items-center justify-center">
                    {categoryIcons[group.category] || <Briefcase size={22} />}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B1221]">
                      {group.category}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 font-medium">
                      Specialised cleaning solutions for {group.category.toLowerCase()}
                    </p>
                  </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  {group.items.map((serviceItem, sIdx) => {
                    const serviceId = serviceItem.link.split('/').pop();
                    const fullService = SERVICES_DATA.find(s => s.id === serviceId);
                    if (!fullService) return null;

                    return (
                      <motion.div
                        key={serviceId}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (sIdx % 3) * 0.1, duration: 0.5 }}
                        className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#29B6F6]/40 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Image */}
                          <div className="h-56 sm:h-64 w-full overflow-hidden relative">
                            <img
                              src={fullService.image}
                              alt={fullService.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/60 via-transparent to-transparent" />
                            <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0B1221]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                              {fullService.categoryTitle}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-3 group-hover:text-[#29B6F6] transition-colors">
                              {fullService.title}
                            </h3>
                            <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-normal mb-6 line-clamp-3">
                              {fullService.shortDesc}
                            </p>

                            {/* Features preview */}
                            {fullService.features && fullService.features.length > 0 && (
                              <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                                {fullService.features.slice(0, 3).map((feat, fIdx) => (
                                  <li key={fIdx} className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
                                    <CheckCircle2 size={14} className="text-[#29B6F6] shrink-0" />
                                    <span className="truncate">{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>

                        {/* Card Footer */}
                        <div className="p-6 sm:p-8 pt-0">
                          <Link
                            href={`/services/${fullService.id}`}
                            className="w-full py-3.5 px-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B1221] font-bold text-sm sm:text-base hover:bg-[#29B6F6] hover:text-white hover:border-[#29B6F6] transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                          >
                            View Service Details <ArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 px-6 bg-fluid-wave-fixed text-center relative overflow-hidden border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0B1221] mb-6 text-center">Need a Tailored Operational Proposal?</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#334155] mb-10 font-normal max-w-2xl mx-auto text-center">Our team provides custom cleaning proposals for commercial, construction, and specialist facility sites across Australia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#quote" className="inline-block px-10 py-4.5 bg-[#29B6F6] text-white text-lg sm:text-xl font-bold rounded-2xl shadow-lg hover:bg-[#0042a3] transition-all text-center">
              Request Free Quote
            </Link>
            <a href="tel:1300211231" className="inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-white border border-[#E2E8F0] text-[#0B1221] text-lg sm:text-xl font-bold rounded-2xl shadow-sm hover:bg-slate-100 transition-all text-center">
              <Phone size={20} className="text-[#29B6F6]" /> 1300 211 231
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
