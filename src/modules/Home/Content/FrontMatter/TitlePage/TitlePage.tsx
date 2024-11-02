import { Image } from 'antd';
import title_image from '/img/titlePage_cover.jpg'
import styles from './TitlePage.module.scss';

const TitlePage: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.education_title}>
                <div className={styles.text}>
                    Ministry of Science and Higher Education
                </div>
                <div className={styles.text}>
                    Astana IT University
                </div>
            </div>

            <div className={styles.authors}>
                <div className={styles.text}>
                    Zhibek Tleshova
                </div>
                <div className={styles.text}>
                    Khanat Kassenov
                </div>
                <div className={styles.text}>
                    Aigerim Urazbekova
                </div>
            </div>

            <div className={styles.title}>
                <div className={styles.text}>
                    Professional English Course: Enhancing Reading competencies
                </div>
            </div>

            <div className={styles.title}>
                <div className={styles.text}>
                    (Teaching textbook on home reading)
                </div>
            </div>

            <Image
                width={550}
                src={title_image}
            />
        </div>
    );
};

export default TitlePage;