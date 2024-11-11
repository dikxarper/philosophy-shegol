import styles from './Typography.module.scss';
import React from 'react';

interface TypographyProps {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

interface TextProps {
    indent: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

interface StyledProps {
    style?: React.CSSProperties;
    children: React.ReactNode;
}

interface TitleProps extends StyledProps {
    size?: number;
    color?: string;
}

const Typography: React.FC<TypographyProps> & {
    Title: React.FC<TitleProps>
    Text: React.FC<TextProps>
    Span: React.FC<StyledProps>
} = ({ style, children }) => (
    <div className={styles['custom-typography']} style={style}>
        {children}
    </div>
);

const Title: React.FC<TitleProps> = ({ 
    size = 14,
    color = 'blue', 
    style,
    children 
}) => (
    <div
        className={`${styles['custom-typography-title']} ${styles[`color-${color}`]} ${styles[`size-${size}`]}`}
        style={style}
    >
        {children}
    </div>
);

const Text: React.FC<TextProps> = ({ 
    indent = false, 
    children, 
    style 
}) => {

    return (
        <div 
            className={`${styles['custom-typography-text']} ${indent ? styles['indented'] : ''}`} 
            style={style}
        >
            {children}
        </div>
    )
};

const Span: React.FC<StyledProps> = ({ children, style }) => (
    <span className={styles['custom-typography-span']} style={style}>
        {children}
    </span>
);

Typography.Title = Title;
Typography.Text = Text;
Typography.Span = Span;

export default Typography;