import React from 'react';

interface RMGImageProps {
    src: string
    alt?: string
    width?: number
    height?: number | string
    rounded?: boolean
}

export const RMGImage: React.FC<RMGImageProps> = ({ src, alt = '', width = 3900, height = 100, rounded = false }) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{ width: `${width}px`, height: typeof height === 'number' ? `${height}px` : height }}
            className={rounded ? 'rounded-lg' : ''}
        />
    );
}