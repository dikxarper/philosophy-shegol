import React from 'react';
import { 
    DEFAULT_PARTIAL_HEIGHT 
} from '@/shared/utils/constants';

interface PartialSpacingProps {
    count?: number;
}

const PartialSpacing: React.FC<PartialSpacingProps> = () => {
    const partialHeight = DEFAULT_PARTIAL_HEIGHT;

    return (
        <>
            <div style={{ height: `${partialHeight}mm` }} aria-hidden="true" />
        </>
    );
};

export default PartialSpacing;