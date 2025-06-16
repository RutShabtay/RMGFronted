import React from 'react';

interface RMGHeaderProps {
    title?: string;
    size: 'small' | 'medium' | 'large';
}

export const RMGHeader: React.FC<RMGHeaderProps> = ({ title, size }) => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className={`text-2xl font-bold ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-4xl' : ''}`}>{title}</h1>
        </header>
    );
}