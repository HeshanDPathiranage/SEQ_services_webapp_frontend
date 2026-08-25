'use client';

/**
 * Google Analytics 4 (GA4) Custom Event Tracking Utilities for SEQ Services
 */

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string | Date,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Safely emit a Google Analytics custom event
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else if (process.env.NODE_ENV !== 'production') {
    console.debug(`[GA4 Event (Debug)] ${eventName}:`, params);
  }
}

/**
 * 1. Form Submission / Lead Generation
 * Fired strictly upon successful HTTP response from enquiry submission endpoint.
 */
export function trackLeadSubmission(params: {
  serviceCategory?: string;
  serviceRequired?: string;
  location?: string;
}): void {
  const sanitizedParams = {
    event_category: 'engagement',
    event_label: params.serviceRequired || 'general_enquiry',
    service_category: params.serviceCategory || 'general',
    service_name: params.serviceRequired || 'general',
    service_location: params.location || 'unknown',
    value: 1,
    currency: 'AUD',
  };

  // Standard GA4 Lead Event
  trackEvent('generate_lead', sanitizedParams);
  // Custom Granular Event
  trackEvent('enquiry_submission', sanitizedParams);
}

/**
 * 2. Telephone Link Click Tracking
 */
export function trackPhoneClick(phoneNumber: string, clickLocation: string): void {
  const params = {
    event_category: 'contact',
    event_label: phoneNumber,
    phone_number: phoneNumber,
    click_location: clickLocation,
  };

  trackEvent('click_phone_number', params);
  trackEvent('contact', { method: 'phone', ...params });
}

/**
 * 3. Email Link Click Tracking
 */
export function trackEmailClick(emailAddress: string, clickLocation: string): void {
  const params = {
    event_category: 'contact',
    event_label: emailAddress,
    email_address: emailAddress,
    click_location: clickLocation,
  };

  trackEvent('click_email_address', params);
  trackEvent('contact', { method: 'email', ...params });
}

/**
 * 4. CTA / Quote Button Click Tracking
 */
export function trackQuoteCTAClick(ctaName: string, clickLocation: string): void {
  trackEvent('click_cta_quote', {
    event_category: 'cta',
    event_label: ctaName,
    cta_name: ctaName,
    click_location: clickLocation,
  });
}

/**
 * 5. Service Detail Page View Tracking
 */
export function trackServicePageView(serviceId: string, serviceTitle: string, category: string): void {
  const params = {
    event_category: 'service_engagement',
    event_label: serviceTitle,
    item_id: serviceId,
    item_name: serviceTitle,
    item_category: category,
  };

  trackEvent('view_service_page', params);
  trackEvent('view_item', {
    items: [
      {
        item_id: serviceId,
        item_name: serviceTitle,
        item_category: category,
      },
    ],
  });
}
