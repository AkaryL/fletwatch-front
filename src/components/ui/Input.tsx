import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-2 rounded-lg border border-gray-300 bg-white',
            'text-gray-900 placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'disabled:bg-gray-100 disabled:cursor-not-allowed',
            error && 'border-crit focus:ring-crit',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-crit">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
