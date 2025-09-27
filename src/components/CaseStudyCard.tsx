import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  href: string;
}

export default function CaseStudyCard({ 
  title, 
  client, 
  description, 
  metrics, 
  image, 
  href 
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-accent font-semibold mb-2">{client}</div>
        <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-accent">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <Link
          href={href}
          className="inline-flex items-center text-accent hover:text-accent-dark font-semibold transition-colors"
        >
          See full case study
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
