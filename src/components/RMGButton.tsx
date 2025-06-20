import React from 'react';

interface RMGButtonProps {
    title: string;
    color?: 'default' | 'primary' | 'secondary';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const RMGButton: React.FC<RMGButtonProps> = ({ title, color = 'primary', onClick, className, type = 'button' }) => {
    return (
        <button
            onClick={onClick}
            className={`text-white py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none ${color === 'primary'
                ? 'bg-sky-500'
                : color === 'secondary'
                    ? 'bg-gray-500'
                    : 'bg-black'
                } ${className}`}
        >
            {title}
        </button>
    );
};

