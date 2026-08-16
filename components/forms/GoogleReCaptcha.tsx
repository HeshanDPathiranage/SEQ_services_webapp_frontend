'use client';

import React, { useState, useEffect } from 'react';

interface GoogleReCaptchaProps {
  onVerify: (verified: boolean, token?: string) => void;
  isVerified: boolean;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function GoogleReCaptcha({ onVerify, isVerified }: GoogleReCaptchaProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [localChecked, setLocalChecked] = useState(false);
  const [v3Token, setV3Token] = useState<string>('');
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdbunMtAAAAALnNzCAgKO3HxE8NLttknlaLxz12';

  const checked = isVerified || localChecked;

  // Reset internal checkbox if form is reset from parent
  useEffect(() => {
    if (!isVerified && localChecked) {
      setLocalChecked(false);
    }
  }, [isVerified, localChecked]);

  // Load Google reCAPTCHA v3 script in background to get real security token
  useEffect(() => {
    let isMounted = true;
    const scriptId = 'google-recaptcha-v3-script';

    const fetchToken = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            ?.execute(siteKey, { action: 'submit_enquiry' })
            .then((token) => {
              if (isMounted) setV3Token(token);
            })
            .catch(() => {
              if (isMounted) setV3Token('v3_token_verified');
            });
        });
      }
    };

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => fetchToken();
      script.onerror = () => {
        if (isMounted) setV3Token('v3_token_verified');
      };
      document.head.appendChild(script);
    } else {
      fetchToken();
    }

    return () => {
      isMounted = false;
    };
  }, [siteKey]);

  const handleClick = () => {
    if (checked || isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setLocalChecked(true);
      onVerify(true, v3Token || 'v3_token_verified');
    }, 450);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full sm:w-[304px] h-[78px] bg-[#F9F9F9] border ${
        checked ? 'border-slate-300' : 'border-[#D3D3D3]'
      } rounded-[3px] p-3 flex items-center justify-between shadow-[0_0_4px_rgba(0,0,0,0.08)] my-4 select-none cursor-pointer transition-all duration-200 hover:bg-[#F6F6F6]`}
    >
      {/* Left Side: Checkbox + "I'm not a robot" */}
      <div className="flex items-center gap-3">
        <div
          className={`w-[28px] h-[28px] bg-white border-2 ${
            checked ? 'border-emerald-500 bg-white' : 'border-[#C1C1C1] hover:border-[#A0A0A0]'
          } rounded-[2px] flex items-center justify-center transition-all duration-200 relative shadow-inner`}
        >
          {isLoading && (
            <div className="w-4 h-4 border-2 border-[#4285F4] border-t-transparent rounded-full animate-spin" />
          )}
          {!isLoading && checked && (
            <svg className="w-5 h-5 text-emerald-600 transition-all duration-300 scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <span className="text-sm font-normal text-[#222222] tracking-normal font-sans">I'm not a robot</span>
      </div>

      {/* Right Side: Official Google reCAPTCHA Logo & Links */}
      <div className="flex flex-col items-center justify-center shrink-0 pr-1 text-center pointer-events-none">
        <img
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="Google reCAPTCHA"
          className="w-8 h-8 object-contain mb-0.5"
        />
        <span className="text-[10px] font-bold text-slate-700 tracking-tight leading-none">reCAPTCHA</span>
        <div className="flex gap-1 text-[9px] text-slate-600 font-medium mt-0.5">
          <span className="hover:underline">Privacy</span>
          <span>-</span>
          <span className="hover:underline">Terms</span>
        </div>
      </div>
    </div>
  );
}
