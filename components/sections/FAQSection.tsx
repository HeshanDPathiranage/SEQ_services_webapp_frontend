"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight, ArrowDownRight, Sparkles, Phone, Mail } from 'lucide-react';
import { FAQ_DATA, CONTACT_INFO } from '../../lib/data';
import Link from 'next/link';

interface FAQSectionProps {
  showTitle?: boolean;
  className?: string;
}

export function FAQSection({ showTitle = true, className = "" }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0]?.id || null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'commercial', label: 'Commercial Cleaning' },
    { id: 'bio', label: 'Biohazard & Specialist' },
    { id: 'pricing', label: 'Pricing & Quotes' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  // Structured Data (Schema.org FAQPage) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className={`relative py-12 ${className}`}>
      {/* JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-16 xl:px-24">
        {showTitle && (
          <div className="text-left mb-10 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
              FAQs
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We understand the operational, compliance, and scheduling questions commercial clients face.
            </p>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="mb-10 space-y-6">
          {/* Category Tabs Pill Design */}
          <div className="flex flex-wrap items-center gap-2.5 md:gap-3.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base lg:text-lg font-bold transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-300/80 hover:border-slate-400 hover:bg-slate-50 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions by keyword..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-base md:text-lg font-medium shadow-sm transition-all focus:outline-none focus:border-[#29B6F6] focus:ring-4 focus:ring-[#29B6F6]/10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800 bg-slate-100 px-3 py-1 rounded-lg transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#29B6F6] border-[#29B6F6] text-white shadow-xl shadow-[#29B6F6]/30'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-sm text-slate-900'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-xl md:text-2xl lg:text-3xl font-serif font-bold leading-snug ${
                      isOpen ? 'text-white' : 'text-slate-900'
                    }`}>
                      {faq.question}
                    </span>

                    {/* Arrow Button Container */}
                    <div className={`w-11 h-11 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-white text-[#29B6F6] shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}>
                      {isOpen ? (
                        <ArrowUpRight size={22} strokeWidth={2.5} />
                      ) : (
                        <ArrowDownRight size={22} strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0 border-t border-white/20">
                          <div className="pt-5 text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-normal">
                            {faq.answer}
                          </div>
                          <div className="mt-6 flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 text-white px-3.5 py-1 rounded-full border border-white/30">
                              {faq.categoryLabel}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-left py-12 bg-white rounded-3xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-1">No matching questions found</h3>
              <p className="text-slate-600 text-base mb-4">
                Try refining your search query or switching to a different category tab.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom "Still have questions?" Banner */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900">
              Still have questions?
            </h3>
            <p className="text-slate-700 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              If you have any other questions or need further information, don't hesitate to contact us. We are here to help you!
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/#quote"
              className="px-8 py-4 rounded-xl bg-[#0B1221] hover:bg-[#29B6F6] text-white text-base md:text-lg font-bold shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
