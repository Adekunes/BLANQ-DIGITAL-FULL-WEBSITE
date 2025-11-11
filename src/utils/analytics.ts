// Simple event tracking for Google Analytics
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Check if Google Analytics is loaded
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }
  
  // Fallback console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties);
  }
};

// Analytics events for BLANQ Digital
export const events = {
  // Trial funnel events
  trialCTAClicked: (location: string) => {
    trackEvent('trial_cta_clicked', { location });
  },
  
  // Website consultation events
  websiteQuoteClicked: (location: string) => {
    trackEvent('website_quote_clicked', { location });
  },
  
  // General CTA events
  ctaButtonClicked: (buttonText: string, location: string) => {
    trackEvent('cta_button_clicked', { buttonText, location });
  },
  
  // Scroll tracking
  sectionViewed: (sectionName: string) => {
    trackEvent('section_viewed', { sectionName });
  }
};

