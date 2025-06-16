import React from 'react';

interface RMGButtonProps {
    title: string;
    color?: 'default' | 'primary' | 'secondary';
    onClick?: () => void;
}

export const RMGButton: React.FC<RMGButtonProps> = ({ title, onClick, color = 'primary' }) => {
    return (
        <button
            onClick={onClick}
            className={`py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none ${color === 'primary'
                ? 'bg-blue-500'
                : color === 'secondary'
                    ? 'bg-gray-500'
                    : 'bg-black'
                }`}
        >
            {title}
        </button>
    );
};

