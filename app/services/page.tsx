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

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "construction", label: "Construction & Builders Cleaning Services" },
    { id: "commercial", label: "Commercial Cleaning Services" },
    { id: "bio", label: "Bio Cleaning Services" },
    { id: "residential", label: "Residential Cleaning Services" }
  ];

  const filteredServices = selectedCategory === "all"
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 bg-white overflow-hidden border-b border-[#E2E8F0]">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#0B1221] leading-tight tracking-tight mb-6"
          >
            Commercial Cleaning Services Across Australia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-[#334155] font-normal max-w-3xl mx-auto leading-relaxed"
          >
            Tailored, fully compliant cleaning and facility support designed to protect your operational standards and site compliance.
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

        {/* Services Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#29B6F6]/30 transition-all duration-300 flex flex-col justify-between group h-full block text-center"
                >
                  <div>
                    {service.image && (
                      <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative bg-slate-100">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-serif font-bold text-[#0B1221] mb-3 group-hover:text-[#29B6F6] transition-colors text-center flex items-center justify-center gap-2">
                      <span>{service.title}</span>
                      <ArrowRight size={18} className="text-[#29B6F6] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                    </h3>
                    
                    <p className="text-[#334155] text-base sm:text-lg leading-relaxed mb-6 font-normal text-center">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 flex flex-col items-center">
                      {service.features?.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center justify-center gap-2 text-xs text-[#4A5568] text-center">
                          <CheckCircle2 size={15} className="text-[#29B6F6] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-[#0B1221] mb-4">Require a Custom Facility Management Plan?</h2>
          <p className="text-[#4A5568] text-lg font-light mb-8 max-w-xl mx-auto">
            Contact SEQ Services to discuss integrated maintenance, site sanitization, or multi-site commercial cleaning programs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#29B6F6] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#2563EB] transition-all"
          >
            Get a Tailored Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
