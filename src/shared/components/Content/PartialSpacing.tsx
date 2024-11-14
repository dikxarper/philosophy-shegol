import React from 'react';

const PartialSpacing: React.FC = () => {
    const partialHeight = 12.7;

    return (
        <>
            <div style={{ height: `${partialHeight}mm` }} aria-hidden="true" />
        </>
    );
};

export default PartialSpacing;