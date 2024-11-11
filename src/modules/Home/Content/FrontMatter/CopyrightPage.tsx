import { Image } from 'antd';
import isbn_image from '/img/isbn.png'
import Spacing from '@/shared/components/Content/Spacing';
import Typography from '@/shared/components/Content/Typography/Typography';

const CopyrigthPage: React.FC = () => {
    return (
        <>
            <Typography.Title color='black'>
                UDC 658
                <br />
                BBC 65.291.271я73
            </Typography.Title>
            <Spacing />
            <Typography.Text indent={true}>
                <div style={{textTransform: 'uppercase'}}>
                    Reviewers:
                </div>
                <div>
                    Tazhibayeva S.Zh. – Doctor of Philological Sciences, Professor, L.Gumilyov Eurasian National University. 
                </div>
                <div>
                    Burbekova S.Zh. – Candidate of Philological Sciences, Associate professor, Astana IT University
                </div>
            </Typography.Text>
            <Spacing count={3} />
            <Typography.Text indent={true}>
                Professional English Course: Home Reading (Manual) /Tleshova Zh., Kassenov Kh.N., Urazbekova A.I. - Astana: Astana IT University, 2022. - 86 p.
            </Typography.Text>
            <Spacing count={3} />
            <Typography.Text indent={true}>
                The manual is intended for undergraduate students in in the field of IT specialists. A feature of the manual is that it contains theoretical and practical material that contributes to the formation of knowledge, practical skills and abilities in reading part. The manual can be used for students of advanced training courses.
            </Typography.Text>
            <Spacing count={2} />
            <Typography.Title color='black' style={{textAlign: 'right'}}>
                UDC 658
                <br />
                BBC 65.291.271я73
            </Typography.Title>
            <Spacing />
            <Typography.Text indent={true}>
                The manual was approved and recommended by the decision of the Academic Council of Astana IT University dated September 29, 2022, Protocol No. 2 
            </Typography.Text>
            <Spacing count={2} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Image
                    src={isbn_image}
                    width={150}
                    preview={false}
                />
                <div>
                    © Tleshova Zh.K., 2022<br />
                    © Kassenov Kh.N., 2022<br />
                    © Urazbekova A.I., 2022
                </div>
            </div>
        </>
    );
};

export default CopyrigthPage;