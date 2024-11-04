import { Image } from 'antd';
import title_image from '/img/titlePage_cover.jpg'
import styles from './TitlePage.module.scss';
import Spacing from '@/shared/components/Content/Spacing';

const TitlePage: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.education_title}>
                Ministry of Science and Higher Education<br />
                Astana IT University
            </div>
            <Spacing points={16} count={2} />
            <div className={styles.authors}>
                Zhibek Tleshova<br />
                Khanat Kassenov<br />
                Aigerim Urazbekova
            </div>
            <Spacing points={16} />
            <div className={styles.title}>
                Professional English Course: Enhancing Reading competencies
            </div>
            <Spacing points={16} />
            <div className={styles.sub_title}>
                (Teaching textbook on home reading)
            </div>

            <Image
                className={styles.title_image}
                src={title_image}
            /> 
            <Spacing points={16} count={14} />
            <div className={styles.info}>
                Astana, 2022
            </div>
        </div>
    );
};

export default TitlePage;