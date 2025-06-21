import React from "react";

interface RMGTextProps {
    text: string;
    size?: "small" | "medium" | "large";
    color?: "default" | "primary" | "secondary";
    weight?: "normal" | "bold";
    className?: string;
}

export const RMGText: React.FC<RMGTextProps> = ({
    text,
    size = "medium",
    color = "default",
    weight = "normal",
    className,
}) => {
    const sizeClasses = {
        small: "text-sm",
        medium: "text-base",
        large: "text-xxlg",
    };

    const colorClasses = {
        default: "text-navy-blue",
        primary: "text-blue-1600",
        secondary: "text-gray-600",
    };

    const weightClasses = {
        normal: "font-normal",
        bold: "font-bold",
        xbold: "font-xbold",

    };

    return (
        <p
            className={`${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`}
        >
            {text}
        </p>
    );
};