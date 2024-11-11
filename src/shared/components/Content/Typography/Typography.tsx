import styles from './Typography.module.scss';
import React from 'react';

interface StyledProps {
    style?: React.CSSProperties;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

interface TitleProps extends StyledProps {
    size?: number;
    color?: string;
    margin?: boolean;
}

interface TextProps extends StyledProps {
    indent?: boolean;
}

interface SpanProps extends StyledProps {
    color?: string;
}

const Typography: React.FC<StyledProps> & {
    Title: React.FC<TitleProps>;
    Text: React.FC<TextProps>;
    Span: React.FC<SpanProps>;
} = ({ style, children, className, id }) => (
    <div className={`${styles['custom-typography']} ${className || ''}`} style={style} id={id}>
        {children}
    </div>
);

const Title: React.FC<TitleProps> = ({ 
    size = 14,
    color = 'blue',
    margin = false,
    style,
    children,
    className,
    id 
}) => (
    <div
        className={`${styles['custom-typography-title']} ${styles[`color-${color}`]} ${styles[`size-${size}`]} ${margin ? styles['margined'] : ''} ${className || ''}`}
        style={style}
        id={id}
    >
        {children}
    </div>
);

const Text: React.FC<TextProps> = ({ 
    indent = false, 
    children, 
    style,
    className,
    id 
}) => (
    <div 
        className={`${styles['custom-typography-text']} ${indent ? styles['indented'] : ''} ${className || ''}`} 
        style={style}
        id={id}
    >
        {children}
    </div>
);

const Span: React.FC<SpanProps> = ({ 
    color = 'blue',
    children, 
    style,
    className,
    id 
}) => (
    <span className={`${styles['custom-typography-span']} ${styles[`color-${color}`]} ${className || ''}`} style={style} id={id}>
        {children}
    </span>
);

Typography.Title = Title;
Typography.Text = Text;
Typography.Span = Span;

export default Typography;