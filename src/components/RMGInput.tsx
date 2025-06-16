import React from "react";

interface RMGInputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RMGInput: React.FC<RMGInputProps> = ({
    type = "text",
    placeholder,
    value,
    onChange,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border border-gray-300 p-2 rounded"
        />
    );
};
