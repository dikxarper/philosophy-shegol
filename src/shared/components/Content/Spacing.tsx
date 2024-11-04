import React from 'react';
import { POINTS_TO_PIXELS_RATIO, DEFAULT_FONT_SIZE_POINTS } from '@/shared/utils/constants';

interface HeaderSpacingProps {
    points?: number;
    count?: number;
}

const Spacing: React.FC<HeaderSpacingProps> = ({ points = DEFAULT_FONT_SIZE_POINTS, count = 1 }) => {
    const pixelValue = points * POINTS_TO_PIXELS_RATIO;

    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div 
                    key={index} 
                    style={{ height: `${pixelValue}px`, backgroundColor: 'transparent' }}
                    aria-hidden="true" 
                />
            ))}
        </>
    );
};

export default Spacing;