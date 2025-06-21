import React from "react";

interface RMGInputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export const RMGInput: React.FC<RMGInputProps> = ({
    type = "text",
    placeholder,
    value,
    onChange,
    className,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
        />
    );
};
