"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants, useInView } from 'framer-motion';
import { 
  ChevronRight, Phone, Mail, Award, Menu, Users, Shield, ArrowRight, MapPin, User, Briefcase, Maximize, MessageSquare, CheckCircle2, Loader2, Building2, Home, HardHat
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HOME_DATA, SERVICES_DATA, GROUPED_SERVICES } from '../lib/data';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { GoogleReCaptcha } from '../components/forms/GoogleReCaptcha';

const LocationMapSelector = dynamic(() => import('../components/forms/LocationMapSelector'), { ssr: false });

// -- Animation Variants --
const maskVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function AnimatedCounter({ value, duration = 1 }: { value: string; duration?: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOutQuad * targetNumber));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

function getLogoScale(url: string): string {
  const lower = url.toLowerCase();
  if (lower.includes('coast2coast') || lower.includes('condev') || lower.includes('00d9b1e39f02d57be65ad2a9a6eaa3b8')) {
    return 'scale-[1.0] sm:scale-[1.06] md:scale-[1.1]';
  }
  if (lower.includes('john-holland') || lower.includes('john')) {
    return 'scale-[1.85] sm:scale-[2.05] md:scale-[2.25]';
  }
  if (lower.includes('fkg') || lower.includes('and9gcrd_blg0')) {
    return 'scale-[2.05] sm:scale-[2.25] md:scale-[2.45]';
  }
  if (lower.includes('buildcorp') || lower.includes('licdn') || lower.includes('company-logo') || lower.includes('and9gcrsk9kig')) {
    return 'scale-[1.8] sm:scale-[2.0] md:scale-[2.2]';
  }
  if (lower.includes('memar') || lower.includes('memarcg')) {
    return 'scale-[1.75] sm:scale-[1.95] md:scale-[2.15]';
  }
  if (lower.includes('colliers')) {
    return 'scale-[1.65] sm:scale-[1.8] md:scale-[2.0]';
  }
  if (lower.includes('hutchinson') || lower.includes('and9gctrt4crv')) {
    return 'scale-[1.75] sm:scale-[1.95] md:scale-[2.15]';
  }
  return 'scale-[1.25] sm:scale-[1.35] md:scale-[1.45]';
}

function LogoCard({ logoUrl }: { logoUrl: string }) {
  const [imgSrc, setImgSrc] = useState(logoUrl);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(logoUrl);
    setHasError(false);
  }, [logoUrl]);

  if (hasError) return null;

  return (
    <div 
      className="w-[180px] sm:w-[230px] md:w-[270px] h-24 sm:h-28 md:h-32 px-3 sm:px-5 py-2 flex items-center justify-center bg-transparent shrink-0 overflow-hidden group hover:scale-105 transition-transform duration-300"
    >
      <img 
        src={imgSrc} 
        alt="Partner Brand Logo" 
        className={`h-16 sm:h-20 md:h-24 w-auto max-w-[95%] max-h-[92%] object-contain mix-blend-multiply transition-transform duration-300 ${getLogoScale(imgSrc)}`}
        onError={() => {
          if (logoUrl.includes('Lendlease') && imgSrc !== '/images/logos/lendlease.svg') {
            setImgSrc('/images/logos/lendlease.svg');
          } else if (logoUrl.includes('Multiplex') && imgSrc !== '/images/logos/multiplex.svg') {
            setImgSrc('/images/logos/multiplex.svg');
          } else if (logoUrl.includes('colliers') && imgSrc !== '/images/logos/colliers.svg') {
            setImgSrc('/images/logos/colliers.svg');
          } else if (logoUrl.includes('john-holland') && imgSrc !== '/images/logos/john-holland.svg') {
            setImgSrc('/images/logos/john-holland.svg');
          } else if (logoUrl.includes('ANd9GcTrT4CrvKloEXuNaws6CT0mt7rbaYc5jJHPM96fq5OI2w') && imgSrc !== '/images/logos/hutchinson.svg') {
            setImgSrc('/images/logos/hutchinson.svg');
          } else if (logoUrl.includes('memarcg') && imgSrc !== '/images/logos/memar.svg') {
            setImgSrc('/images/logos/memar.svg');
          } else if ((logoUrl.includes('buildcorp') || logoUrl.includes('licdn') || logoUrl.includes('company-logo')) && imgSrc !== '/images/logos/buildcorp.svg') {
            setImgSrc('/images/logos/buildcorp.svg');
          } else {
            setHasError(true);
          }
        }}
      />
    </div>
  );
}

const fadeUpVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function SEQServicesLanding() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('construction');
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const [nameValue, setNameValue] = useState('');
  const [companyNameValue, setCompanyNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  const [emailValue, setEmailValue] = useState('');
  const [serviceCategoryValue, setServiceCategoryValue] = useState('');
  const [serviceRequiredValue, setServiceRequiredValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [recaptchaTokenValue, setRecaptchaTokenValue] = useState<string>('');
  const [captchaMsg, setCaptchaMsg] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusFeedback, setStatusFeedback] = useState('');

  const handleSubmitQuotation = async (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaMsg('');
    setStatusFeedback('');

    if (!isCaptchaVerified || !recaptchaTokenValue) {
      setCaptchaMsg('Please check the Google reCAPTCHA box to verify you are human.');
      setFormStatus('error');
      return;
    }

    if (!nameValue || !emailValue || !phoneValue || !locationValue || !serviceCategoryValue || !serviceRequiredValue || !messageValue) {
      setStatusFeedback('Please fill in all required fields (Name, Phone, Email, Location, Service Category, Service Required, Message).');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    try {
      const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';
      const response = await fetch(`${apiBase}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameValue,
          companyName: companyNameValue,
          phone: phoneValue,
          email: emailValue,
          location: locationValue,
          serviceCategory: serviceCategoryValue,
          serviceRequired: serviceRequiredValue,
          message: messageValue,
          recaptchaToken: recaptchaTokenValue,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Unable to send quotation request.');
      }

      setFormStatus('success');
      setStatusFeedback('Thank you! Your quotation request has been sent successfully to our team.');
      setNameValue('');
      setCompanyNameValue('');
      setPhoneValue('');
      setEmailValue('');
      setLocationValue('');
      setServiceCategoryValue('');
      setServiceRequiredValue('');
      setMessageValue('');
      setIsCaptchaVerified(false);
      setRecaptchaTokenValue('');
    } catch (err: any) {
      setFormStatus('error');
      setStatusFeedback(err.message || 'An unexpected error occurred. Please check connection and try again.');
    }
  };

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA.find((s) => s.category === selectedCategory) || SERVICES_DATA[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % HOME_DATA.heroHeadlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-fluid-wave-fixed overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-fluid-wave border-b border-blue-100/80">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 md:to-transparent z-0" />
        
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="absolute inset-0 bg-gradient-to-r from-[#eaf2fb] via-[#eaf2fb]/90 to-transparent z-10 w-full lg:w-3/4" />
          <img 
            src="/images/commercial_office_bg_1784362302145.png" 
            alt="SEQ Services Commercial Office Cleaning" 
            className="w-full lg:w-3/4 h-full object-cover opacity-80 md:opacity-90"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 mt-6 sm:mt-10 lg:mt-0">
          <div className="max-w-3xl">
            <div className="min-h-[160px] sm:h-48 md:h-64 relative mb-4 sm:mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeadline}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-center"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0B1221] leading-[1.15] sm:leading-[1.1] tracking-tight mb-3 sm:mb-4">
                    {HOME_DATA.heroHeadlines[currentHeadline]}
                  </h1>
                  <p className="text-[#334155] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
                    {HOME_DATA.heroSubtitles[currentHeadline]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 pt-4 sm:pt-6"
            >
              <Link 
                href="#quote" 
                className="w-full sm:w-auto justify-center px-8 py-4 rounded-2xl bg-[#29B6F6] text-white font-bold shadow-lg shadow-[#29B6F6]/35 hover:bg-[#0288D1] transition-all flex items-center gap-2 group text-center"
              >
                Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto justify-center px-8 py-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-[#0B1221] font-semibold hover:bg-white transition-all shadow-sm text-center"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Center-Aligned Key Performance Stats Section (Tallying with Light Blue) */}
      <section className="py-8 sm:py-12 bg-[#eaf2fb]/80 border-b border-blue-100/80 relative z-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: "20+", label: "Years combined experience" },
              { value: "700+", label: "Successful tenders" },
              { value: "2017", label: "Excellence Award winners" }
            ].map((stat, sIdx) => (
              <div 
                key={sIdx}
                className="bg-[#eaf2fb] rounded-2xl p-5 sm:p-6 md:p-7 border-2 border-slate-800 shadow-[0_4px_0_#0F172A] flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0288D1] tracking-tight mb-1">
                  <AnimatedCounter value={stat.value} duration={1} />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0B1221] leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Moving Client Logos Marquee Banner */}
      <section className="py-6 sm:py-10 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden relative">
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 mb-3 sm:mb-4">
          <p className="text-center text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
            Trusted by Queensland's Leading Commercial & Construction Brands
          </p>
        </div>
        
        <div className="flex overflow-hidden whitespace-nowrap relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-2 sm:py-4">
          <div className="flex gap-4 sm:gap-8 md:gap-12 items-center animate-marquee shrink-0">
            {/* First Set of Unique Logos */}
            {HOME_DATA.logos.map((logo, idx) => (
              <LogoCard key={`set1-${idx}`} logoUrl={logo} />
            ))}
            {/* Second Duplicate Set for Seamless Infinite Loop Chain */}
            {HOME_DATA.logos.map((logo, idx) => (
              <LogoCard key={`set2-${idx}`} logoUrl={logo} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section id="services" className="py-14 sm:py-24 px-4 sm:px-6 relative bg-white border-b border-slate-100">
        <div className="w-full max-w-[1920px] mx-auto lg:px-12 xl:px-20">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#0B1221] mb-3 sm:mb-4 tracking-tight">Our Capabilities</h2>
            <p className="text-[#334155] text-lg sm:text-xl font-medium">A comprehensive suite of commercial cleaning and maintenance solutions, delivered with precision.</p>
          </div>

          {/* Category Selector Tabs with Horizontal Scroll on Mobile */}
          <div className="flex overflow-x-auto custom-scrollbar pb-2 sm:pb-0 sm:flex-wrap items-center justify-start sm:justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-14 -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { id: 'construction', label: 'CONSTRUCTION CLEANING SERVICES', icon: HardHat },
              { id: 'commercial', label: 'COMMERCIAL SERVICES', icon: Building2 },
              { id: 'bio', label: 'BIO CLEANING SERVICES', icon: Shield },
              { id: 'residential', label: 'RESIDENTIAL SERVICES', icon: Home },
            ].map((cat) => {
              const Icon = cat.icon;
              const isCatActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    const firstInCat = SERVICES_DATA.find(s => s.category === cat.id);
                    if (firstInCat) setActiveTab(firstInCat.id);
                  }}
                  className={`p-2.5 sm:p-3 pr-5 sm:pr-7 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3.5 transition-all duration-300 shrink-0 ${
                    isCatActive
                      ? "bg-white shadow-md border border-blue-200 ring-2 ring-[#29B6F6]/10"
                      : "bg-slate-50/80 hover:bg-white border border-slate-200/60"
                  }`}
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors ${
                    isCatActive ? "bg-blue-50 text-[#29B6F6]" : "bg-slate-200/60 text-slate-500"
                  }`}>
                    <Icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className={`text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase whitespace-nowrap ${
                    isCatActive ? "text-[#29B6F6]" : "text-slate-700"
                  }`}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Capabilities Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch min-h-[380px] sm:min-h-[480px] lg:min-h-[550px]">
            {/* Left Sidebar Service List */}
            <div className="lg:w-1/3 w-full pr-0 lg:pr-6 border-r-0 lg:border-r border-slate-200/80 space-y-2.5 min-h-[250px] sm:min-h-[450px] max-h-[550px] overflow-y-auto custom-scrollbar">
              {SERVICES_DATA.filter(s => s.category === selectedCategory).map((service) => {
                const isActive = service.id === activeService.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left py-3.5 sm:py-4 px-5 sm:px-7 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? "bg-white text-[#0B1221] shadow-md sm:shadow-lg border border-slate-200/80 ring-1 ring-[#29B6F6]/20 font-bold"
                        : "text-slate-700 hover:text-[#0B1221] hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Hero Preview Card */}
            <div className="lg:w-2/3 w-full relative min-h-[380px] sm:min-h-[480px] lg:min-h-[550px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl sm:shadow-2xl border border-slate-200/80 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={activeService.image || '/images/commercial_office_bg_1784362302145.png'} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/95 via-[#0B1221]/50 to-transparent flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white z-10">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3 sm:mb-4 tracking-tight">
                      {activeService.title}
                    </h3>
                    <p className="text-slate-100 text-sm sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-5 sm:mb-7 line-clamp-3 sm:line-clamp-none">
                      {activeService.shortDesc}
                    </p>
                    <Link 
                      href={`/services/${activeService.id}`} 
                      className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#29B6F6] hover:bg-[#2563EB] text-white font-bold text-sm sm:text-base transition-all inline-flex items-center gap-2 self-start shadow-xl group/btn"
                    >
                      Learn More <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="quote" className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden border-t border-blue-100 bg-fluid-wave-fixed">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[3px] z-0" />
        
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 flex flex-col lg:flex-row gap-8 sm:gap-12 relative z-20 items-center">
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 flex flex-col justify-center">
            <div className="w-full h-72 sm:h-96 md:h-[420px] lg:h-[460px] mb-6 sm:mb-8 rounded-3xl sm:rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,51,102,0.12)] border border-slate-200/90 group">
               <img 
                 src="/images/contact_side_image.png" 
                 alt="SEQ Services Commercial Cleaning Team" 
                 className="w-full h-full object-cover img-enhanced transform group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-[#0B1221]/20 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold self-start mb-3 border border-white/30">
                   <span className="w-2.5 h-2.5 rounded-full bg-[#29B6F6] animate-pulse" />
                   <span>SEQ Professional Operations</span>
                 </div>
                 <h3 className="text-white font-serif text-2xl sm:text-3xl md:text-4xl font-bold">Premium Commercial Cleaning Services</h3>
               </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B1221] mb-4 sm:mb-6 tracking-tight leading-tight">Request Your Free Commercial Cleaning Quote</h2>
            <p className="text-[#334155] text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 font-normal leading-relaxed">Looking for reliable, professional commercial cleaning services? Complete the form below and our team will contact you to discuss your requirements and provide a tailored, no-obligation cleaning quote.</p>
          </motion.div>
          
          <motion.div variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 w-full">
            <form onSubmit={handleSubmitQuotation} className="bg-white/95 backdrop-blur-2xl p-8 sm:p-10 md:p-14 rounded-3xl sm:rounded-[2.5rem] border border-slate-200 shadow-[0_25px_80px_-15px_rgba(0,51,102,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-[#29B6F6] via-[#00a8cc] to-[#29B6F6]" />
              
              <div className="space-y-1.5 mb-8 relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold tracking-tight text-slate-900">Get in touch</h3>
                <p className="text-base sm:text-lg text-slate-600 font-medium">Fill out the form below and our team will get back to you.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 mb-5 sm:mb-7 relative z-10">
                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
                  <span>Name *</span>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#29B6F6] transition-colors" size={20} />
                    <input 
                      type="text" 
                      required
                      value={nameValue}
                      onChange={(e) => setNameValue(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300 focus:border-[#29B6F6] focus:bg-white focus:ring-4 focus:ring-[#29B6F6]/10 focus:outline-none shadow-sm" 
                      placeholder="Your full name" 
                    />
                  </div>
                </label>

                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group relative block">
                  <span>Company Name</span>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#29B6F6] transition-colors" size={20} />
                    <input 
                      type="text" 
                      value={companyNameValue}
                      onChange={(e) => setCompanyNameValue(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300 focus:border-[#29B6F6] focus:bg-white focus:ring-4 focus:ring-[#29B6F6]/10 focus:outline-none shadow-sm" 
                      placeholder="Company / Business name (optional)" 
                    />
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 mb-5 sm:mb-7 relative z-10">
                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
                  <span>Phone *</span>
                  <PhoneInput
                    value={phoneValue}
                    onChange={setPhoneValue}
                    defaultCountry="AU"
                    international
                    withCountryCallingCode
                    placeholder="Enter phone number"
                    className="phone-input-wrapper w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 focus-within:border-[#29B6F6] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#29B6F6]/10 focus-within:outline-none shadow-sm [&_.PhoneInputCountry]:mr-3 [&_.PhoneInputCountryIcon]:rounded-sm [&_.PhoneInputCountryIcon]:shadow-sm"
                  />
                </label>
                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
                  <span>Email *</span>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#29B6F6] transition-colors" size={20} />
                    <input 
                      type="email" 
                      required
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300 focus:border-[#29B6F6] focus:bg-white focus:ring-4 focus:ring-[#29B6F6]/10 focus:outline-none shadow-sm" 
                      placeholder="Your email address" 
                    />
                  </div>
                </label>
              </div>
              
              <div className="mb-5 sm:mb-7 relative z-10">
                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
                  <span>Location / Suburb *</span>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#29B6F6] transition-colors" size={20} />
                    <input 
                      type="text" 
                      required
                      value={locationValue}
                      onChange={(e) => setLocationValue(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-12 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300 focus:border-[#29B6F6] focus:bg-white focus:ring-4 focus:ring-[#29B6F6]/10 focus:outline-none shadow-sm" 
                      placeholder="Suburb / City / Postcode" 
                    />
                    <button type="button" onClick={() => setIsMapOpen(true)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#29B6F6] hover:bg-[#29B6F6]/5 transition-colors bg-white p-2 rounded-xl shadow-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#29B6F6]/20 z-10 group/btn" title="Select on map">
                      <MapPin size={20} className="text-[#29B6F6] transition-transform group-hover/btn:scale-110" />
                    </button>
                  </div>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 mb-5 sm:mb-7 relative z-10">
                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
                  <span>Service Category *</span>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#29B6F6] transition-colors" size={20} />
                    <select 
                      required
                      value={serviceCategoryValue}
                      onChange={(e) => {
                        setServiceCategoryValue(e.target.value);
                        setServiceRequiredValue('');
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-10 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 focus:border-[#29B6F6] focus:bg-white focus:ring-4 focus:ring-[#29B6F6]/10 focus:outline-none shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a category...</option>
                      {GROUPED_SERVICES.map((group, idx) => (
                        <option key={idx} value={group.category} className="font-semibold text-slate-900">
                          {group.category}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-[#29B6F6] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </label>

                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group block">
                  <span>Service Required *</span>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#29B6F6] transition-colors" size={20} />
                    <select 
                      required
                      disabled={!serviceCategoryValue}
                      value={serviceRequiredValue}
                      onChange={(e) => setServiceRequiredValue(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-10 py-4 sm:py-4.5 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 focus:border-[#29B6F6] focus:bg-white focus:ring-4 focus:ring-[#29B6F6]/10 focus:outline-none shadow-sm appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {!serviceCategoryValue ? (
                        <option value="" disabled>Please select a category first...</option>
                      ) : (
                        <>
                          <option value="" disabled>Select a service...</option>
                          {GROUPED_SERVICES.find(g => g.category === serviceCategoryValue)?.items.map((item, itemIdx) => (
                            <option key={itemIdx} value={item.name} className="font-semibold text-slate-800">
                              {item.name}
                            </option>
                          ))}
                        </>
                      )}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-[#29B6F6] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </label>
              </div>
              
              <div className="mb-6 sm:mb-8 relative z-10">
                <label className="space-y-2 text-base sm:text-lg font-extrabold text-slate-900 group flex flex-col">
                  <span>Message *</span>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4.5 text-slate-400 group-focus-within:text-[#29B6F6] transition-colors" size={20} />
                    <textarea 
                      rows={4} 
                      required
                      value={messageValue}
                      onChange={(e) => setMessageValue(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 py-4 text-base sm:text-lg font-semibold text-slate-900 transition-all duration-300 placeholder:text-slate-400 placeholder:font-normal hover:border-slate-300 focus:border-[#29B6F6] focus:bg-white focus:ring-4 focus:ring-[#29B6F6]/10 focus:outline-none shadow-sm block resize-none" 
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                </label>
              </div>
              
              {/* Google reCAPTCHA Verification */}
              <div className="relative z-10">
                <GoogleReCaptcha 
                  isVerified={isCaptchaVerified} 
                  onVerify={(verified, token) => {
                    setIsCaptchaVerified(verified);
                    setRecaptchaTokenValue(token || '');
                    setCaptchaMsg('');
                  }} 
                />
              </div>
              {captchaMsg && <p className="text-sm font-semibold text-rose-500 mt-2 mb-4 relative z-10">{captchaMsg}</p>}
              
              {statusFeedback && (
                <div className={`p-4 rounded-2xl text-base font-semibold mb-4 relative z-10 ${formStatus === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}>
                  {statusFeedback}
                </div>
              )}

              <button 
                type="submit"
                disabled={formStatus === 'submitting' || !isCaptchaVerified}
                className="group relative w-full overflow-hidden rounded-2xl bg-[#29B6F6] py-5 sm:py-6 text-lg sm:text-xl md:text-2xl font-extrabold text-white transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,82,204,0.4)] focus:outline-none focus:ring-4 focus:ring-[#29B6F6]/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#2563EB] to-[#29B6F6] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex justify-center items-center gap-2.5">
                  {formStatus === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={24} /> Sending Request...
                    </>
                  ) : (
                    <>
                      Send Request <ArrowRight size={24} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {isMapOpen && (
        <LocationMapSelector 
          onClose={() => setIsMapOpen(false)}
          onSelectLocation={(loc) => { setLocationValue(loc); setIsMapOpen(false); }}
        />
      )}
    </div>
  );
}
