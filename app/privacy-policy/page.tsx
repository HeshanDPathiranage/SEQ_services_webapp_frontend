import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how SEQ Services collects, handles, stores, and protects your personal information and enquiry data in accordance with the Australian Privacy Principles.',
  alternates: {
    canonical: 'https://seqservices.com.au/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | SEQ Services',
    description: 'Learn how SEQ Services collects, handles, stores, and protects your personal information and enquiry data in accordance with the Australian Privacy Principles.',
    url: 'https://seqservices.com.au/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 2026';

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 px-6 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#29B6F6] rounded-full blur-[140px] opacity-[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#29B6F6]/10 text-[#0052CC] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <Shield size={16} /> Legal & Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B1221] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            SEQ Services is committed to safeguarding your privacy and ensuring your personal information is handled in accordance with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth).
          </p>
          <div className="mt-4 text-xs font-semibold text-slate-400">
            Last Updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-8 sm:p-12 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1: Overview */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center text-sm font-extrabold">1</span>
              About This Policy
            </h2>
            <p>
              This Privacy Policy explains how SEQ Services Integrated Solutions (&quot;SEQ Services&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, holds, uses, discloses, and protects personal information gathered through our website (<span className="font-semibold text-slate-900">seqservices.com.au</span>), customer enquiry forms, quotation requests, and direct communications.
            </p>
          </div>

          {/* Section 2: What We Collect */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center text-sm font-extrabold">2</span>
              Information We Collect
            </h2>
            <p className="mb-4">
              When you interact with our website, request a quote, or contact our operations team, we may collect the following personal and business details:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                'Full Name and Job Title / Representative Details',
                'Business / Company Name (if applicable)',
                'Contact Phone Number and Email Address',
                'Site / Service Location (Suburb, State, Postcode)',
                'Specific Cleaning Service Requirements & Specifications',
                'Quotation Notes, Site Access Details, and Message Content',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={18} className="text-[#0052CC] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Purpose of Collection */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center text-sm font-extrabold">3</span>
              How We Use Your Information
            </h2>
            <p className="mb-3">
              We collect and process your personal information strictly for legitimate commercial cleaning operations and service provision:
            </p>
            <ul className="space-y-2 list-disc list-inside text-slate-600 pl-2">
              <li>Preparing and delivering tailored quotation estimates for commercial, builders, and specialist cleaning services.</li>
              <li>Coordinating site inspections, operations scheduling, and facility access.</li>
              <li>Responding directly to customer enquiries submitted via our website or telephone hotline.</li>
              <li>Administering billing, invoicing, and service contract records.</li>
              <li>Ensuring compliance with Australian Workplace Health &amp; Safety (WHS) and industry accreditations.</li>
            </ul>
          </div>

          {/* Section 4: Data Security & Storage */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center text-sm font-extrabold">4</span>
              Data Storage &amp; Transmission Security
            </h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect your personal information from unauthorized access, loss, misuse, or alteration:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <Lock className="mx-auto text-[#0052CC] mb-2" size={24} />
                <h4 className="font-bold text-slate-900 text-sm mb-1">TLS/SSL Encryption</h4>
                <p className="text-xs text-slate-500">All data transmitted through our forms is encrypted with 256-bit TLS.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <Shield className="mx-auto text-[#0052CC] mb-2" size={24} />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Access Controls</h4>
                <p className="text-xs text-slate-500">Restricted solely to authorized operations and customer service managers.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <Eye className="mx-auto text-[#0052CC] mb-2" size={24} />
                <h4 className="font-bold text-slate-900 text-sm mb-1">No Third-Party Sale</h4>
                <p className="text-xs text-slate-500">We never sell, rent, or trade your personal information to third-party marketers.</p>
              </div>
            </div>
          </div>

          {/* Section 5: Cookies, Analytics & reCAPTCHA */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center text-sm font-extrabold">5</span>
              Cookies, Analytics &amp; reCAPTCHA
            </h2>
            <p className="mb-3">
              Our website uses privacy-conscious technologies to ensure security, performance, and operational reliability:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900">Google Analytics:</strong> We may analyze aggregated, non-personally identifiable website usage data (e.g., page views, visit duration, device type) to optimize website usability. You can opt out via your browser settings or Google Analytics opt-out extensions.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] mt-2 shrink-0" />
                <div>
                  <strong className="text-slate-900">Google reCAPTCHA:</strong> We implement Google reCAPTCHA v2 to shield our contact and quotation forms from spam and malicious automated abuse. Usage of reCAPTCHA is subject to Google&apos;s Privacy Policy and Terms of Service.
                </div>
              </li>
            </ul>
          </div>

          {/* Section 6: Access & Correction */}
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-3 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center text-sm font-extrabold">6</span>
              Your Rights &amp; Access to Information
            </h2>
            <p>
              Under the Australian Privacy Act 1988, you have the right to request access to the personal information we hold about you and to ask for corrections if any details are inaccurate, out-of-date, or incomplete. To make an enquiry or submit a request, please contact our Privacy Officer using the details below.
            </p>
          </div>

          {/* Section 7: Contact Us */}
          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1221] mb-4 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052CC] flex items-center justify-center text-sm font-extrabold">7</span>
              Contact Our Privacy Officer
            </h2>
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data management practices, please contact us:
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#0052CC] shrink-0" />
                <div>
                  <div className="text-slate-400 font-semibold text-[11px] uppercase">Phone</div>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-slate-900 hover:text-[#0052CC]">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#0052CC] shrink-0" />
                <div>
                  <div className="text-slate-400 font-semibold text-[11px] uppercase">Email</div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-slate-900 hover:text-[#0052CC]">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#0052CC] shrink-0" />
                <div>
                  <div className="text-slate-400 font-semibold text-[11px] uppercase">Head Office</div>
                  <span className="font-medium text-slate-800 text-xs">
                    {CONTACT_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="text-center pt-4">
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0052CC] text-white font-bold text-sm shadow-md hover:bg-blue-700 transition-colors"
            >
              <span>Back to Quotation Request</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
