import React from 'react';
import { 
    BLUE_COLOR,
    DEFAULT_FONT_SIZE, 
} from '@/shared/utils/constants';

interface SpanProps {
    size?: number;
    color?: 'black' | 'blue';
    weight?: 'normal' | 'bold';
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Span:React.FC<SpanProps> = ({ 
    size = DEFAULT_FONT_SIZE, 
    color = 'black', 
    weight = 'normal', 
    className, 
    style, 
    children 
}) => {
    const spanColor = color === 'blue' ? `${BLUE_COLOR}` : 'black';

    const textStyle: React.CSSProperties = {
        fontSize: `${size}pt`,
        fontWeight: weight,
        color: spanColor,
        ...style
    }
    return(
        <span className={className} style={textStyle}>
            {children}
        </span>
    )
}

export default Span;