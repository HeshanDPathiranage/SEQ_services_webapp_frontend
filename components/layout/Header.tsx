"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Building2, Briefcase, Home, Phone, ArrowRight, ShieldCheck, Sparkles, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GROUPED_SERVICES, CONTACT_INFO } from '../../lib/data';
import { trackPhoneClick, trackQuoteCTAClick } from '../../lib/analytics';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className={`bg-[#0B1221] text-white text-sm font-medium border-b border-slate-800 transition-all duration-300 hidden md:block ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'py-2.5 px-4 sm:px-6 lg:px-12 xl:px-20'}`}>
        <div className="w-full max-w-[1920px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck size={16} className="text-[#29B6F6]" />
              <span>Professional Commercial & Specialist Cleaning Services</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} 
              onClick={() => trackPhoneClick(CONTACT_INFO.phone, 'header_top_bar')}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-bold text-sm"
            >
              <Phone size={15} className="text-[#29B6F6]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2">
              <a href={CONTACT_INFO.socials.facebook.url} target="_blank" rel="noopener noreferrer" className="w-5 h-5 rounded-full overflow-hidden block hover:scale-110 transition-transform bg-white border border-white/20 shadow-sm" title="Facebook">
                <img src={CONTACT_INFO.socials.facebook.icon} alt="Facebook" className="w-full h-full object-cover" />
              </a>
              <a href={CONTACT_INFO.socials.instagram.url} target="_blank" rel="noopener noreferrer" className="w-5 h-5 rounded-full overflow-hidden block hover:scale-110 transition-transform bg-white border border-white/20 shadow-sm" title="Instagram">
                <img src={CONTACT_INFO.socials.instagram.icon} alt="Instagram" className="w-full h-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100/60 py-3 sm:py-4 lg:py-5'
      }`}>
        <div className="w-full max-w-[1920px] px-4 sm:px-6 lg:px-12 xl:px-20 mx-auto flex justify-between items-center relative">
          
          {/* Logo - Prominently Sized with seamless blend */}
          <Link href="/" className="flex-shrink-0 group">
            <img 
              src="/images/logo.jpg" 
              alt="SEQ Services Logo" 
              className={`w-auto object-contain mix-blend-multiply transition-all duration-300 group-hover:scale-[1.02] ${
                isScrolled ? 'h-10 sm:h-12 md:h-14 lg:h-16' : 'h-11 sm:h-14 md:h-16 lg:h-20'
              }`} 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link 
              href="/" 
              className="relative text-lg lg:text-xl font-extrabold text-slate-900 hover:text-[#29B6F6] transition-colors py-2 group tracking-tight"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#29B6F6] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className=""
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link 
                href="/services" 
                onClick={() => setServicesDropdownOpen(false)}
                className="relative flex items-center gap-1.5 text-lg lg:text-xl font-extrabold text-slate-900 hover:text-[#29B6F6] transition-colors py-2 group tracking-tight"
              >
                <span>Services</span>
                <ChevronDown size={20} className={`transition-transform duration-300 text-slate-700 group-hover:text-[#29B6F6] ${servicesDropdownOpen ? 'rotate-180 text-[#29B6F6]' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#29B6F6] transition-all duration-300 rounded-full ${servicesDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
              
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 z-50 pt-3 flex justify-center px-4 pointer-events-none">
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-full max-w-[1350px] pointer-events-auto box-border"
                    >
                      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,51,102,0.18)] border border-slate-200/90 overflow-hidden p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto custom-scrollbar box-border">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#29B6F6] via-[#29B6F6] to-[#00a8cc]" />
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 pt-2">
                          {GROUPED_SERVICES.map((group, idx) => (
                            <div key={idx} className="flex flex-col min-w-0">
                              <div className="flex items-center gap-2.5 mb-3.5 pb-3 border-b border-slate-200/80">
                                <div className="w-9 h-9 rounded-xl bg-blue-50/80 text-[#29B6F6] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                                  {idx === 0 ? <HardHat size={20} /> : idx === 1 ? <Building2 size={20} /> : idx === 2 ? <ShieldCheck size={20} /> : <Home size={20} />}
                                </div>
                                <h4 className="text-xs sm:text-sm font-extrabold text-[#29B6F6] uppercase tracking-wider leading-snug">{group.category}</h4>
                              </div>
                              <div className="flex flex-col gap-1.5 min-w-0">
                                {group.items.map((item, itemIdx) => (
                                  <Link 
                                    key={itemIdx} 
                                    href={item.link}
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="group flex items-start text-xs sm:text-sm font-bold text-slate-800 hover:text-[#29B6F6] hover:bg-blue-50/70 px-2.5 py-1.5 rounded-xl transition-all leading-snug"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2 mt-1.5 transition-all group-hover:bg-[#29B6F6] group-hover:scale-125 shrink-0" />
                                    <span className="break-words">{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/90 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 px-6 sm:px-10 py-5 rounded-b-3xl">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-full bg-[#29B6F6]/10 flex items-center justify-center text-[#29B6F6] shrink-0 border border-[#29B6F6]/20">
                               <Phone size={22} />
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Direct Assistance</p>
                              <p className="text-lg sm:text-xl font-extrabold text-slate-900">{CONTACT_INFO.phone}</p>
                            </div>
                          </div>
                          <Link 
                            href="/services" 
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-base sm:text-lg font-extrabold text-[#29B6F6] hover:text-white hover:bg-[#29B6F6] flex items-center gap-2.5 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200 transition-all duration-300 shrink-0"
                          >
                            <span>Explore All Services</span> 
                            <ArrowRight size={18} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/about" 
              className="relative text-lg lg:text-xl font-extrabold text-slate-900 hover:text-[#29B6F6] transition-colors py-2 group tracking-tight"
            >
              <span>About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#29B6F6] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>

            <Link 
              href="/#quote" 
              onClick={() => trackQuoteCTAClick('Contact / Get a Quote', 'header_desktop_nav')}
              className="relative text-lg lg:text-xl font-extrabold text-slate-900 hover:text-[#29B6F6] transition-colors py-2 group tracking-tight"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#29B6F6] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>

            <Link 
              href="/faq" 
              className="relative text-lg lg:text-xl font-extrabold text-slate-900 hover:text-[#29B6F6] transition-colors py-2 group tracking-tight"
            >
              <span>FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#29B6F6] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              onClick={() => trackPhoneClick(CONTACT_INFO.phone, 'header_desktop_button')}
              className="flex items-center gap-2.5 px-4 lg:px-5 py-2.5 rounded-full bg-slate-100/80 hover:bg-blue-50 text-slate-900 text-sm lg:text-base font-bold transition-all border border-slate-200/80 hover:border-blue-200 hover:text-[#29B6F6]"
            >
              <Phone size={16} className="text-[#29B6F6]" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 p-2.5 rounded-xl bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#29B6F6]/20" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 70px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden flex flex-col justify-between"
          >
            <div className="flex flex-col p-5 gap-3 overflow-y-auto custom-scrollbar flex-1">
              <Link href="/" className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              
              <div className="text-base font-bold text-slate-900 pt-1">Services</div>
              <div className="flex flex-col gap-3 pl-3 border-l-2 border-[#29B6F6]/40 my-1">
                {GROUPED_SERVICES.map((group, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="text-[11px] font-bold text-[#29B6F6] uppercase tracking-wider mb-1.5 mt-1 flex items-center gap-1.5">
                      {group.category}
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {group.items.map((item, itemIdx) => (
                        <Link 
                          key={itemIdx} 
                          href={item.link}
                          className="text-xs font-medium text-slate-700 py-1.5 px-2 rounded-lg hover:bg-blue-50 active:bg-blue-100 hover:text-[#29B6F6] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/about" className="text-base font-bold text-slate-900 border-t border-slate-100 pt-3" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              
              <Link 
                href="/#quote" 
                className="text-base font-bold text-slate-900 py-1" 
                onClick={() => {
                  trackQuoteCTAClick('Contact / Get a Quote', 'header_mobile_drawer');
                  setMobileMenuOpen(false);
                }}
              >
                Contact
              </Link>

              <Link href="/faq" className="text-base font-bold text-slate-900 py-1" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
            </div>

            {/* Mobile Footer Call Button & Socials */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 shrink-0 flex flex-col gap-3">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                onClick={() => trackPhoneClick(CONTACT_INFO.phone, 'header_mobile_call_button')}
                className="flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl bg-[#29B6F6] active:bg-[#81D4FA] text-[#0B1221] text-sm font-bold shadow-lg shadow-[#29B6F6]/30 transition-all"
              >
                <Phone size={16} />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
              <div className="flex items-center justify-center gap-3 pt-1">
                <a 
                  href={CONTACT_INFO.socials.facebook.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0052CC] bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-sm transition-all hover:scale-105"
                  title="Facebook"
                >
                  <img src={CONTACT_INFO.socials.facebook.icon} alt="Facebook" className="w-4 h-4 rounded-full object-cover" />
                  <span>Facebook</span>
                </a>
                <a 
                  href={CONTACT_INFO.socials.instagram.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-pink-600 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-sm transition-all hover:scale-105"
                  title="Instagram"
                >
                  <img src={CONTACT_INFO.socials.instagram.icon} alt="Instagram" className="w-4 h-4 rounded-full object-cover" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

