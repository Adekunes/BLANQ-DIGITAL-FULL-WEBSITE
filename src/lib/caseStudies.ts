import { CaseStudy } from '@/types/caseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-brand-growth',
    title: 'E-commerce Brand Growth',
    client: 'Montreal Fashion Co.',
    description: 'Organic Instagram growth +62% in 90 days — increased link clicks 4x using short form video + targeted ads.',
    summary: 'A Montreal-based fashion brand wanted to increase their online presence and drive more traffic to their e-commerce store. We implemented a comprehensive social media strategy focused on authentic content and targeted advertising.',
    problem: [
      'Low engagement rates on social media posts',
      'Minimal traffic from social media to website',
      'Inconsistent brand voice across platforms',
      'Limited understanding of target audience'
    ],
    strategy: [
      'Developed a cohesive brand voice and visual identity',
      'Created a content calendar focused on lifestyle and product showcases',
      'Implemented targeted Instagram and Facebook ad campaigns',
      'Established partnerships with local influencers and micro-influencers'
    ],
    execution: [
      'Produced 3-4 high-quality posts per week',
      'Created 2-3 Instagram Reels per week showcasing products',
      'Launched targeted ad campaigns with $2,000 monthly budget',
      'Engaged with followers and responded to comments daily'
    ],
    results: [
      { metric: 'Engagement Rate', value: '+62%', description: 'in 90 days' },
      { metric: 'Link Clicks', value: '4x', description: 'increase to website' },
      { metric: 'Followers', value: '+2,100', description: 'new followers' },
      { metric: 'Website Traffic', value: '+180%', description: 'from social media' },
      { metric: 'ROAS', value: '3.8x', description: 'return on ad spend' }
    ],
    image: '/placeholder.svg',
    category: 'social',
    date: '2024-01-15',
    testimonial: {
      quote: 'BLANQ transformed our social media presence completely. The results speak for themselves - our sales increased by 40% in just 3 months.',
      author: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'Montreal Fashion Co.'
    }
  },
  {
    id: 'restaurant-website-redesign',
    title: 'Restaurant Website Redesign',
    client: 'Bistro Montreal',
    description: 'Mobile-first website redesign increased online reservations by 150% and improved page load speed by 40%.',
    summary: 'A popular Montreal restaurant needed a complete website overhaul to improve their online presence and make it easier for customers to make reservations and view their menu.',
    problem: [
      'Outdated, non-mobile-friendly website',
      'Slow loading times affecting user experience',
      'No online reservation system',
      'Poor SEO performance'
    ],
    strategy: [
      'Redesigned with mobile-first approach',
      'Implemented online reservation system',
      'Optimized for local SEO',
      'Created clear navigation and call-to-actions'
    ],
    execution: [
      'Built responsive website using Next.js and Tailwind CSS',
      'Integrated OpenTable reservation system',
      'Optimized images and implemented lazy loading',
      'Added Google My Business integration'
    ],
    results: [
      { metric: 'Online Reservations', value: '+150%', description: 'increase in 60 days' },
      { metric: 'Page Load Speed', value: '+40%', description: 'faster loading' },
      { metric: 'Mobile Traffic', value: '+85%', description: 'increase' },
      { metric: 'Bounce Rate', value: '-35%', description: 'reduction' },
      { metric: 'Local Search Ranking', value: '#3', description: 'for "restaurant Montreal"' }
    ],
    image: '/placeholder.svg',
    category: 'web',
    date: '2024-02-20'
  },
  {
    id: 'tech-startup-content-strategy',
    title: 'Tech Startup Content Strategy',
    client: 'InnovateTech Solutions',
    description: 'Content marketing campaign generated 500+ qualified leads and 3.2x ROAS through targeted LinkedIn and Facebook ads.',
    summary: 'A B2B tech startup needed to establish thought leadership and generate qualified leads through content marketing and paid advertising.',
    problem: [
      'No established content marketing strategy',
      'Limited brand awareness in target market',
      'Low lead generation from digital channels',
      'Unclear value proposition messaging'
    ],
    strategy: [
      'Developed thought leadership content strategy',
      'Created educational content series',
      'Implemented targeted LinkedIn and Facebook ad campaigns',
      'Established lead nurturing email sequences'
    ],
    execution: [
      'Produced 2-3 blog posts per week',
      'Created 1-2 video case studies per month',
      'Launched targeted ad campaigns with $5,000 monthly budget',
      'Implemented marketing automation workflows'
    ],
    results: [
      { metric: 'Qualified Leads', value: '500+', description: 'in 4 months' },
      { metric: 'ROAS', value: '3.2x', description: 'return on ad spend' },
      { metric: 'Website Traffic', value: '+220%', description: 'organic traffic' },
      { metric: 'Email Subscribers', value: '+1,800', description: 'new subscribers' },
      { metric: 'Cost Per Lead', value: '-45%', description: 'reduction' }
    ],
    image: '/placeholder.svg',
    category: 'content',
    date: '2024-03-10'
  }
];
