import React from "react";

interface RMGTextProps {
    text: string;
    size?: "small" | "medium" | "large";
    color?: "default" | "primary" | "secondary";
    weight?: "normal" | "bold";
}

export const RMGText: React.FC<RMGTextProps> = ({
    text,
    size = "medium",
    color = "default",
    weight = "normal",
}) => {
    const sizeClasses = {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
    };

    const colorClasses = {
        default: "text-gray-800",
        primary: "text-blue-600",
        secondary: "text-gray-600",
    };

    const weightClasses = {
        normal: "font-normal",
        bold: "font-bold",
    };

    return (
        <p
            className={`${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]}`}
        >
            {text}
        </p>
    );
};