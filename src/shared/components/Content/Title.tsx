import React from 'react';
import { 
    DEFAULT_FONT_SIZE, 
    DEFAULT_TITLE_VERTICAL_MARGIN, 
} from '@/shared/utils/constants';

interface TitleProps {
    size?: number;
    color?: 'black' | 'blue';
    weight?: 'normal' | 'bold';
    margin?: boolean;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ 
    size = DEFAULT_FONT_SIZE, 
    color = 'black', 
    weight = 'normal', 
    margin = false, 
    className, 
    style, 
    id,
    children 
}) => {
    const titleColor = color === 'blue' ? '#4c94d8' : 'black';
    const marginSize = margin ? `${DEFAULT_TITLE_VERTICAL_MARGIN}pt` : '0';

    const titleStyle: React.CSSProperties = {
        fontSize: `${size}pt`,
        color: titleColor,
        fontWeight: weight,
        marginTop: marginSize,
        marginBottom: marginSize,
        ...style
    };

    return (
        <div className={className} style={titleStyle} id={id}>
            {children}
        </div>
    );
};

export default Title;