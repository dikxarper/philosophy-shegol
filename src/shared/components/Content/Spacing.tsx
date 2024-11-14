import React from 'react';

interface HeaderSpacingProps {
    size?: number;
    count?: number;
}

const Spacing: React.FC<HeaderSpacingProps> = ({ size = 14, count = 1 }) => {
    return (
        <div 
            style={{ height: `${size * count}pt`, backgroundColor: 'transparent' }}
            aria-hidden="true" 
        />
);
};

export default Spacing;