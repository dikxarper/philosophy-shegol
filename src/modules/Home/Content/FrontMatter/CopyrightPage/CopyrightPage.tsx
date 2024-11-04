import { Image } from 'antd';
import styles from './CopyrightPage.module.scss';
import Spacing from '@/shared/components/Content/Spacing';

const CopyrigthPage: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.udc_bbc}>
                UDC 658
                <br />
                BBC 65.291.271я73
            </div>
            <Spacing points={14} />
            <div className={styles.reviewers}>
                <div className={styles.reviewers_title}>
                    Reviewers:
                </div>
                <div>
                    Tazhibayeva S.Zh. – Doctor of Philological Sciences, Professor, L.Gumilyov Eurasian National University.
                </div>
                <div>
                    Burbekova S.Zh. – Candidate of Philological Sciences, Associate professor, Astana IT University
                </div>
            </div>
            <Spacing points={14} count={3} />
            <div className={styles.title}>
                Professional English Course: Home Reading (Manual) /Tleshova Zh., Kassenov Kh.N., Urazbekova A.I. - Astana: Astana IT University, 2022. - 86 p.
            </div>
            <Spacing points={14} count={3} />
            <div className={styles.preface}>
                The manual is intended for undergraduate students in in the field of IT specialists. A feature of the manual is that it contains theoretical and practical material that contributes to the formation of knowledge, practical skills and abilities in reading part. The manual can be used for students of advanced training courses.
            </div>
            <Spacing points={14} count={2} />
            <div className={`${styles.udc_bbc} ${styles.text_right}`}>
                UDC 658
                <br />
                BBC 65.291.271я73
            </div>
            <Spacing points={14} count={1} />
            <div className={styles.approval}>
                The manual was approved and recommended by the decision of the Academic Council of Astana IT University dated September 29, 2022, Protocol No. 2 
            </div>
            <Spacing points={14} count={2} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Image
                    className={styles.isbn}
                    src='/img/isbn.png'
                />
                <div className={styles.copyright}>
                    © Tleshova Zh.K., 2022<br />
                    © Kassenov Kh.N., 2022<br /> 
                    © Urazbekova A.I., 2022
                </div>
            </div>
        </div>
    );
};

export default CopyrigthPage;