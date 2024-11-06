import { Image } from 'antd';
import title_image from '/img/titlePage_cover.jpg'
import Spacing from '@/shared/components/Content/Spacing';
import Title from '@/shared/components/Content/Title';

const TitlePage: React.FC = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Title size={16} color='blue' weight='bold' style={{textTransform: 'uppercase'}}>
                Ministry of Science and Higher Education<br />
                Astana IT University
            </Title>
            <Spacing size={16} count={2} />
            <Title size={16} color='blue' weight='bold' style={{textTransform: 'uppercase'}}>
                Zhibek Tleshova<br />
                Khanat Kassenov<br />
                Aigerim Urazbekova
            </Title>
            <Spacing size={16} />
            <Title size={16} color='blue' weight='bold'>
                Professional English Course: Enhancing Reading competencies
            </Title>
            <Spacing size={16} />
            <Title size={16} color='blue' weight='bold'>
                (Teaching textbook on home reading)
            </Title>
            <Spacing size={7} />
            <Image
                src={title_image}
                width={550}
            /> 
            <Spacing size={16} count={14} />
            <Title size={16} color='blue' weight='bold'>
                Astana, 2022
            </Title>
        </div>
    );
};

export default TitlePage;