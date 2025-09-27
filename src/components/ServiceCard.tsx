import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  metrics?: string;
}

export default function ServiceCard({ title, description, icon, href, metrics }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-charcoal mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {metrics && (
        <div className="text-sm text-accent font-semibold mb-4">
          {metrics}
        </div>
      )}
      <Link
        href={href}
        className="inline-flex items-center text-accent hover:text-accent-dark font-semibold transition-colors"
      >
        Learn more
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
