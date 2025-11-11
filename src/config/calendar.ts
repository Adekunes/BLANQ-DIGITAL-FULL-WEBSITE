// Cal.com booking links for BLANQ Digital
// REPLACE these placeholder URLs with your actual Cal.com links after setup

export const calendarLinks = {
  // Trial funnel booking - 15 min discovery call
  trialDiscovery: 'https://cal.com/blanqdigital/trial-discovery',
  
  // Website consultation - 30 min detailed call
  websiteConsult: 'https://cal.com/blanqdigital/website-consultation',
  
  // General strategy call - 20 min
  generalCall: 'https://cal.com/blanqdigital/strategy-call',
};

// Helper function to build Cal.com links with prefilled data
export const buildCalLink = (
  baseLink: string,
  params: {
    name?: string;
    email?: string;
    notes?: string;
  } = {}
) => {
  const url = new URL(baseLink);
  
  if (params.name) url.searchParams.set('name', params.name);
  if (params.email) url.searchParams.set('email', params.email);
  if (params.notes) url.searchParams.set('notes', params.notes);
  
  return url.toString();
};

