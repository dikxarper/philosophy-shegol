import React from 'react';

interface PartialSpacingProps {
    count?: number;
}

const PartialSpacing: React.FC<PartialSpacingProps> = () => {
    const partialHeight = 12.7;

    return (
        <>
            <div style={{ height: `${partialHeight}mm` }} aria-hidden="true" />
        </>
    );
};

export default PartialSpacing;