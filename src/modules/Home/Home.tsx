import { Flex } from 'antd';

import Card from './components/Card/Card';
import './Home.css';

import Socrates_img from '/img/card/socrates.png';
import Plato_img from '/img/card/plato.png';
import Aristole_img from '/img/card/aristole.png';
import Kant_img from '/img/card/kant.png'
import Nietzsche_img from '/img/card/nietzsche.png'
import Marx_img from '/img/card/marx.png'
import Kierkegaard_img from '/img/card/kierkegaard.png'
import Goethe_img from '/img/card/goethe.png'
import Schopenhauer_img from '/img/card/schopenhauer.png'

const Home: React.FC = () => {
    return (
        <div>
            <Flex justify='space-around' style={{ marginBottom: 16 }}>
                <Card img_url={Socrates_img} name='Сократ' url_name='socrates'/>
                <Card img_url={Plato_img} name='Платон' url_name='plato'/>
                <Card img_url={Aristole_img} name='Аристотель' url_name='aristotle'/>
            </Flex>
            <Flex justify='space-around' style={{ marginBottom: 16 }}>
                <Card img_url={Nietzsche_img} name='Фридрих Ницше' url_name='nietzsche'/>
                <Card img_url={Kant_img} name='Иммануил Кант' url_name='kant'/>
                <Card img_url={Kierkegaard_img} name='Сёрен Кьеркегор' url_name='kierkegaard'/>
            </Flex>
            <Flex justify='space-around' style={{ marginBottom: 16 }}>
                <Card img_url={Goethe_img} name='Иоганн Вольфганг фон Гёте' url_name='goethe'/>
                <Card img_url={Schopenhauer_img} name='Артур Шопенгауэр' url_name='schopenhauer'/>
                <Card img_url={Marx_img} name='Карл Маркс' url_name='marx'/>
            </Flex>
        </div>
    );
};

export default Home;