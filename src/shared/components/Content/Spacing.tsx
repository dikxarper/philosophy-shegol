import React from 'react';

interface HeaderSpacingProps {
    size?: number;
    count?: number;
}

const Spacing: React.FC<HeaderSpacingProps> = ({ size = 14, count = 1 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div 
                    key={index} 
                    style={{ height: `${size}pt`, backgroundColor: 'transparent' }}
                    aria-hidden="true" 
                />
            ))}
        </>
    );
};

export default Spacing;