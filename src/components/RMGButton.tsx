import React from 'react';

interface RMGButtonProps {
    title?: string;
    color?: 'default' | 'primary' | 'secondary';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    icon?: React.ReactNode;
}

export const RMGButton: React.FC<RMGButtonProps> = ({ title, color = 'primary', onClick, className, type = 'button', icon }) => {
    return (
        <button type={type}
            onClick={onClick}
            className={`text-white py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none ${color === 'primary'
                ? 'bg-sky-500'
                : color === 'secondary'
                    ? 'bg-green-500'
                    : 'bg-black'
                } ${className}`}
        >
            {icon && <div className=''>{icon}</div>}
            {title}
        </button>
    );
};

