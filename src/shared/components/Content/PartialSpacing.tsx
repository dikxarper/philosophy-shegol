import React from 'react';
import { DEFAULT_PARTIAL_HEIGHT } from '@/shared/utils/constants';

interface PartialSpacingProps {
    count?: number;
}

const PartialSpacing: React.FC<PartialSpacingProps> = ({ count = 1 }) => {
    const partialHeight = DEFAULT_PARTIAL_HEIGHT;

    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <div key={index} style={{ height: `${partialHeight}mm` }} aria-hidden="true" />
            ))}
        </>
    );
};

export default PartialSpacing;