'use client';

import React, { useEffect, useRef, useState } from 'react';

interface GoogleReCaptchaProps {
  onVerify: (verified: boolean, token?: string) => void;
  isVerified: boolean;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready?: (callback: () => void) => void;
      render?: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          callback?: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
          theme?: 'light' | 'dark';
          size?: 'normal' | 'compact';
        }
      ) => number;
      reset?: (opt_widget_id?: number) => void;
      getResponse?: (opt_widget_id?: number) => string;
    };
    onGoogleReCaptchaLoadCallback?: () => void;
  }
}

export function GoogleReCaptcha({ onVerify, isVerified }: GoogleReCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdbunMtAAAAALnNzCAgKO3HxE8NLttknlaLxz12';

  // Render official Google reCAPTCHA v2 checkbox widget
  useEffect(() => {
    let isMounted = true;

    const renderWidget = () => {
      if (!isMounted || !containerRef.current || !window.grecaptcha || typeof window.grecaptcha.render !== 'function') return;

      // Check if already rendered in container
      if (containerRef.current.hasChildNodes()) {
        return;
      }

      try {
        const id = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'light',
          callback: (token: string) => {
            if (isMounted) {
              onVerify(true, token);
            }
          },
          'expired-callback': () => {
            if (isMounted) {
              onVerify(false, '');
            }
          },
          'error-callback': () => {
            if (isMounted) {
              onVerify(false, '');
            }
          },
        });
        widgetIdRef.current = id;
        setIsLoaded(true);
      } catch (err) {
        console.warn('reCAPTCHA render error:', err);
      }
    };

    if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
      renderWidget();
    } else {
      window.onGoogleReCaptchaLoadCallback = () => {
        if (isMounted) {
          renderWidget();
        }
      };

      const scriptId = 'google-recaptcha-v2-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.google.com/recaptcha/api.js?onload=onGoogleReCaptchaLoadCallback&render=explicit';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [siteKey, onVerify]);

  // Reset widget when parent resets verification
  useEffect(() => {
    if (!isVerified && widgetIdRef.current !== null && window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
      try {
        window.grecaptcha.reset(widgetIdRef.current);
      } catch (err) {
        // ignore
      }
    }
  }, [isVerified]);

  return (
    <div className="my-4 flex flex-col items-start min-h-[78px] justify-center">
      <div ref={containerRef} className="overflow-hidden rounded-md shadow-sm border border-slate-200/80 bg-slate-50" />
      {!isLoaded && (
        <div className="text-xs text-slate-400 py-2 flex items-center gap-2">
          <div className="w-3.5 h-3.5 border-2 border-[#29B6F6] border-t-transparent rounded-full animate-spin" />
          Loading security verification...
        </div>
      )}
    </div>
  );
}
