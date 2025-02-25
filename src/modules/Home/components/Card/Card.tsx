import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';

const { Meta } = Card;

interface CustomCardProps {
    img_url: string;
    name: string;
    url_name: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ img_url, name, url_name }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/phillo-hoot/${url_name}`);
    };
    return (
        <div className={styles.card} onClick={handleClick}>
            <Card
                hoverable
                cover={
                    <div className={styles.img_container}>
                        <img 
                            className={styles.img}
                            src={img_url}
                            alt={name + 'Image'}
                        />
                    </div>
                }
            >
                <Meta 
                    className={styles.img_meta}
                    title={name} 
                />
            </Card>
        </div>
    );
};

export default CustomCard;