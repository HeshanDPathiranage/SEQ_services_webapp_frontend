'use client';

import Link from 'next/link';
import { ChevronRight, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '../../lib/data';
import { trackPhoneClick, trackEmailClick, trackQuoteCTAClick } from '../../lib/analytics';

export function Footer() {
  const commercialServices = SERVICES_DATA.filter(s => s.category === 'commercial');
  const bioServices = SERVICES_DATA.filter(s => s.category === 'bio');
  const residentialServices = SERVICES_DATA.filter(s => s.category === 'residential');
  const constructionServices = SERVICES_DATA.filter(s => s.category === 'construction');

  return (
    <footer className="bg-[#0B1221] pt-8 sm:pt-10 pb-6 px-4 sm:px-6 relative overflow-hidden text-slate-300">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#29B6F6]/50 to-transparent opacity-40" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#29B6F6] rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#29B6F6] rounded-full blur-[130px] opacity-10 pointer-events-none" />

      <div className="w-full max-w-[1920px] mx-auto px-2 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-6 lg:gap-6 mb-8">
          
          {/* Column 1: Brand Info & Accreditations */}
          <div className="sm:col-span-2 xl:col-span-2 pr-0 lg:pr-4">
            <Link href="/" className="inline-block bg-white px-3 py-1.5 rounded-xl mb-4 shadow-md transform hover:-translate-y-0.5 transition-transform duration-300">
              <img src="/images/logo.jpg" alt="SEQ Services Logo" className="h-8 sm:h-10 w-auto object-contain" />
            </Link>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 max-w-md font-normal">
              <strong className="text-white font-semibold">SEQ Services</strong> is a trusted Queensland-owned commercial & specialist cleaning company, delivering reliable, compliant, and high-quality facility solutions across Australia since 2014.
            </p>
            
            {/* Accreditation Badges & Social Links Inline */}
            <div className="flex flex-wrap items-center gap-2">
              <a 
                href="https://www.qbcc.qld.gov.au/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs font-semibold bg-white/10 text-white hover:bg-white/20 px-2.5 py-1 rounded border border-white/20 transition-all hover:scale-105 inline-block"
              >
                QBCC Accredited
              </a>
              <a 
                href="https://www.cm3.com.au/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 px-2.5 py-1 rounded border border-emerald-500/40 transition-all hover:scale-105 inline-block"
              >
                cm3 Certified
              </a>
              <a 
                href="https://www.fairwork.gov.au/about-us/contact-us/online-enquiries" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs font-semibold bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-2.5 py-1 rounded border border-blue-500/40 transition-all hover:scale-105 inline-block"
              >
                Fair Work Compliant
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a 
                  href={CONTACT_INFO.socials.facebook.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 rounded-full overflow-hidden border border-white/20 hover:border-[#29B6F6] hover:scale-105 transition-all duration-300 shadow-sm block bg-white shrink-0"
                  title="Facebook"
                >
                  <img 
                    src={CONTACT_INFO.socials.facebook.icon} 
                    alt="Facebook" 
                    className="w-full h-full object-cover" 
                  />
                </a>
                <a 
                  href={CONTACT_INFO.socials.instagram.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 rounded-full overflow-hidden border border-white/20 hover:border-[#29B6F6] hover:scale-105 transition-all duration-300 shadow-sm block bg-white shrink-0"
                  title="Instagram"
                >
                  <img 
                    src={CONTACT_INFO.socials.instagram.icon} 
                    alt="Instagram" 
                    className="w-full h-full object-cover" 
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Construction & Builders Cleaning Services */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 pb-1 border-b border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
              <span>Construction & Builders Cleaning Services</span>
            </h4>
            <ul className="space-y-2">
              {constructionServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="text-slate-300 hover:text-[#29B6F6] transition-all duration-200 text-xs sm:text-sm font-medium flex items-start gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                    <span className="leading-snug">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Commercial Cleaning Services */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 pb-1 border-b border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#29B6F6] shrink-0"></span>
              <span>Commercial Cleaning Services</span>
            </h4>
            <ul className="space-y-2">
              {commercialServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="text-slate-300 hover:text-[#29B6F6] transition-all duration-200 text-xs sm:text-sm font-medium flex items-start gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-[#29B6F6] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                    <span className="leading-snug">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Bio Cleaning Services */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 pb-1 border-b border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <span>Bio Cleaning Services</span>
            </h4>
            <ul className="space-y-2">
              {bioServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="text-slate-300 hover:text-[#29B6F6] transition-all duration-200 text-xs sm:text-sm font-medium flex items-start gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                    <span className="leading-snug">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Residential Cleaning Services */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 pb-1 border-b border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0"></span>
              <span>Residential Cleaning Services</span>
            </h4>
            <ul className="space-y-2">
              {residentialServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="text-slate-300 hover:text-[#29B6F6] transition-all duration-200 text-xs sm:text-sm font-medium flex items-start gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                    <span className="leading-snug">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Compact Contact Bar */}
        <div className="bg-white/10 border border-white/15 rounded-xl px-5 py-3.5 mb-5 flex flex-wrap justify-between items-center gap-4 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-200">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} 
              onClick={() => trackPhoneClick(CONTACT_INFO.phone, 'footer_contact_bar')}
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Phone size={15} className="text-[#29B6F6] shrink-0" />
              <span className="text-slate-300 text-xs font-medium">24/7 Hotline:</span>
              <span className="font-bold text-white text-xs sm:text-sm">{CONTACT_INFO.phone}</span>
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-white/20" />

            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              onClick={() => trackEmailClick(CONTACT_INFO.email, 'footer_contact_bar')}
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Mail size={15} className="text-[#29B6F6] shrink-0" />
              <span className="text-slate-300 text-xs font-medium">Email:</span>
              <span className="font-bold text-white text-xs sm:text-sm">{CONTACT_INFO.email}</span>
            </a>

            <div className="hidden sm:block w-px h-4 bg-white/20" />

            <div className="flex items-center gap-2 text-slate-200">
              <MapPin size={15} className="text-[#29B6F6] shrink-0" />
              <span className="text-slate-300 text-xs font-medium">Address:</span>
              <span className="font-bold text-white text-xs sm:text-sm">{CONTACT_INFO.address}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-5 text-xs sm:text-sm text-white font-semibold">
            <Link href="/faq" className="hover:text-[#29B6F6] transition-colors">FAQ</Link>
            <Link href="/services" className="hover:text-[#29B6F6] transition-colors">All Services</Link>
            <Link href="/privacy-policy" className="hover:text-[#29B6F6] transition-colors">Privacy Policy</Link>
            <Link 
              href="/#quote" 
              onClick={() => trackQuoteCTAClick('Get a Quote', 'footer_quick_links')}
              className="hover:text-[#29B6F6] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-slate-400 font-normal">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} SEQ Services Integrated Solutions. All rights reserved. &bull;{' '}
            <Link href="/privacy-policy" className="underline hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p className="text-slate-300 font-semibold">Fully Accredited Commercial Cleaning</p>
        </div>
      </div>
    </footer>
  );
}

