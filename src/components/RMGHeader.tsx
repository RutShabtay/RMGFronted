import React from 'react';

interface RMGHeaderProps {
    title?: string;
    size: 'small' | 'medium' | 'large';
    color: 'default' | 'primary' | 'secondary';
    children?: React.ReactNode;
}

export const RMGHeader: React.FC<RMGHeaderProps> = ({ title, size, color = 'default', children }) => {
    const colorClasses = {
        default: "white",
        primary: "sky",
        secondary: "gray",
        children
    };

    return (
        <header className={`bg-${colorClasses[color]}-500 text-navy-blue-500 p-4`}>
            <h1 className={`text-2xl font-bold ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-4xl' : ''}`}>{title}</h1>
            {children && <div className="mt-4">{children}</div>}
        </header>
    );
}