import React from "react";

interface RMGTextProps {
    text?: string;
    size?: "small" | "medium" | "large";
    color?: "default" | "primary" | "secondary";
    weight?: "normal" | "bold";
    className?: string;
    children?: React.ReactNode;
}

export const RMGText: React.FC<RMGTextProps> = ({
    text,
    size = "medium",
    color = "default",
    weight = "normal",
    className,
    children
}) => {
    const sizeClasses = {
        small: "text-sm",
        medium: "text-base",
        large: "text-xxlg",
    };

    const colorClasses = {
        default: "text-gray-blue",
        primary: "text-blue-1600",
        secondary: "text-gray-600",
    };

    const weightClasses = {
        normal: "font-normal",
        bold: "font-bold",
        xbold: "font-xbold",
    };

    return (
        <p className={`${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`}>
            {text && <span className="inline-block">{text}</span>}
            {children ? (
                <div>{children}</div>
            ) : ''}
        </p>
    );
};