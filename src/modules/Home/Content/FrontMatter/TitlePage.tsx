import { Image } from 'antd';
import title_image from '/img/titlePage_cover.jpg'
import Spacing from '@/shared/components/Content/Spacing';
import Typography from '@/shared/components/Content/Typography/Typography';

const TitlePage: React.FC = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Typography.Title size={16} style={{textTransform: 'uppercase'}}>
                Ministry of Science and Higher Education<br />
                Astana IT University
            </Typography.Title>
            <Spacing size={16} count={2} />
            <Typography.Title size={16} style={{textTransform: 'uppercase'}}>
                Zhibek Tleshova<br />
                Khanat Kassenov<br />
                Aigerim Urazbekova
            </Typography.Title>
            <Spacing size={16} />
            <Typography.Title size={16}>
                Professional English Course: Enhancing Reading competencies
            </Typography.Title>
            <Spacing size={16} />
            <Typography.Title size={16}>
                (Teaching textbook on home reading)
            </Typography.Title>
            <Spacing size={7} />
            <Image
                src={title_image}
                width={550}
                preview={false}
            /> 
            <Spacing size={16} count={14} />
            <Typography.Title size={16}>
                Astana, 2022
            </Typography.Title>
        </div>
    );
};

export default TitlePage;