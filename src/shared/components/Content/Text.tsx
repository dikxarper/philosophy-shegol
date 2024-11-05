import React from 'react';
import { 
    DEFAULT_FONT_SIZE, 
    DEFAULT_INDENTATION_VALUE, 
} from '@/shared/utils/constants';

interface TextProps {
    size?: number;
    weight?: 'normal' | 'bold';
    indent?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const Text:React.FC<TextProps> = ({ 
    size = DEFAULT_FONT_SIZE, 
    indent = false, 
    weight = 'normal', 
    className, 
    style, 
    children 
}) => {
    const indentation_value = indent ? `${DEFAULT_INDENTATION_VALUE}in`: '0';

    const textStyle: React.CSSProperties = {
        fontSize: `${size}pt`,
        fontWeight: weight,
        textIndent: indentation_value,
        ...style
    }
    return(
        <div className={className} style={textStyle}>
            {children}
        </div>
    )
}

export default Text;