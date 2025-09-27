import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = ''
}: CTAButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-colors inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent-dark",
    secondary: "border-2 border-accent text-accent hover:bg-accent hover:text-white"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
