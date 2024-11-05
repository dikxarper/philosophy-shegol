import React from 'react';
import { 
    DEFAULT_FONT_SIZE 
} from '@/shared/utils/constants';

interface HeaderSpacingProps {
    size?: number;
    count?: number;
}

const Spacing: React.FC<HeaderSpacingProps> = ({ size = DEFAULT_FONT_SIZE, count = 1 }) => {
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