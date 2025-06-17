import React from 'react';

interface RMGHeaderProps {
    title?: string;
    size: 'small' | 'medium' | 'large';
    color: 'default' | 'primary' | 'secondary';
}

export const RMGHeader: React.FC<RMGHeaderProps> = ({ title, size, color = 'default' }) => {
    const colorClasses = {
        default: "white",
        primary: "sky",
        secondary: "gray",
    };

    return (
        <header className={`bg-${colorClasses[color]}-500 text-navy-blue-500 p-4`}>
            <h1 className={`text-2xl font-bold ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-4xl' : ''}`}>{title}</h1>
        </header>
    );
}