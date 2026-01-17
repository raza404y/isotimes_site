import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className = '',
    ...props
}: ButtonProps) {
    const baseClasses = 'inline-flex items-center justify-center font-sans font-semibold transition-all';

    const variantClasses = {
        primary: 'bg-gray-900 text-white border border-gray-900 hover:bg-gray-700',
        outline: 'bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-white',
        ghost: 'bg-transparent text-gray-900 hover:bg-gray-100',
    };

    const sizeClasses = {
        sm: 'text-xs px-3 py-1.5',
        md: 'text-sm px-4 py-2',
        lg: 'text-base px-6 py-3',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
