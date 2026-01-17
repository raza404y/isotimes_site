import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
    const maxWidth = narrow ? 'max-w-3xl' : 'max-w-7xl';

    return (
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}>
            {children}
        </div>
    );
}
