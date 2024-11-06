import React from 'react';
import { Image, Typography } from 'antd';

import author_1 from '/img/authors/zhibek_tleshova.jpg';
import author_2 from '/img/authors/khanat_kassenov.jpg';
// import author_3 from '/img/authors/aigerim_urazbekova.jpg';
import styles from './About.module.scss';
import Spacing from '@/shared/components/Content/Spacing';

const { Title } = Typography

const About: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.manual_content}>
                <h2>About the Manual</h2>
                <p>
                    <strong>Professional English Course: Home Reading</strong> is a textbook designed to enhance reading skills for undergraduate IT students.
                    This manual includes both theoretical and practical materials to develop students' reading comprehension, critical thinking, and practical abilities.
                    The manual is suitable for IT students and can also be used for advanced training courses.
                </p>
                <p>
                    The manual was approved and recommended by the Academic Council of Astana IT University on September 29, 2022 (Protocol No. 2).
                </p>
            </div>
            <Spacing />
            <div className={styles.authors}>
                <h2>Authors</h2>
                <Spacing size={7} />
                <div className={styles.authors_body}>
                    <div className={styles.author_element}>
                        <div className={styles.author_img_container}>
                            <Image
                                className={styles.author_img}
                                src={author_1}
                            />
                        </div>
                        <Title 
                            className={styles.author_fullname}
                            level={4}
                        >
                            Zhibek Tleshova
                        </Title>
                    </div>
                    <div className={styles.author_element}>
                        <div className={styles.author_img_container}>
                            <Image
                                className={styles.author_img}
                                src={author_2}
                            />
                        </div>
                        <Title 
                            className={styles.author_fullname}
                            level={4}
                        >
                            Khanat Kassenov
                        </Title>
                    </div>
                    <div className={styles.author_element}>
                        <div className={styles.author_img_container}>
                            <Image
                                className={styles.author_img}
                                src='https://placehold.co/200x260'
                                style={{border: '1px solid', borderColor: '#333'}}
                            />
                        </div>
                        <Title 
                            className={styles.author_fullname}
                            level={4}
                        >
                            Aigerim Urazbekova
                        </Title>
                    </div>
                </div>
            </div>
            <Spacing />
        </div>
    )
}

export default About;