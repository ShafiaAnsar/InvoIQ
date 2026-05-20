import { cn } from '@/lib/utils';
import { type HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'glass-strong' | 'default';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', children, ...props }, ref) => {
    const variants = {
      glass: 'glass-card',
      'glass-strong': 'glass-card-strong',
      default: 'bg-white/[0.03] border border-white/[0.08] rounded-xl',
    };

    return (
      <div ref={ref} className={cn(variants[variant], 'p-6', className)} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
