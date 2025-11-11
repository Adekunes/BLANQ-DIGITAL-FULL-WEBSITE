'use client';

import { ReactNode, ReactElement } from 'react';

interface ScrollStackProps {
  children: ReactElement<ScrollStackItemProps>[];
  className?: string;
}

interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollStack({ children, className = '' }: ScrollStackProps) {
  return (
    <div className={`scroll-stack relative ${className}`}>
      {children.map((child, index) => (
        <ScrollStackItem key={index}>
          {child.props.children}
        </ScrollStackItem>
      ))}
    </div>
  );
}

export function ScrollStackItem({ children, className = '' }: ScrollStackItemProps) {
  return (
    <div className={`scroll-stack-item min-h-screen flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

