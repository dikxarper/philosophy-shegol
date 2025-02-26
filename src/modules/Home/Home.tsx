import React from 'react';
import { useLocation } from 'react-router-dom';
import { Flex } from 'antd';

import Card from './components/Card/Card';

import Socrates_img from '/img/card/socrates.png';
import Plato_img from '/img/card/plato.png';
import Aristole_img from '/img/card/aristole.png';
import Kant_img from '/img/card/kant.png';
import Nietzsche_img from '/img/card/nietzsche.png';
import Marx_img from '/img/card/marx.png';
import Kierkegaard_img from '/img/card/kierkegaard.png';
import Goethe_img from '/img/card/goethe.png';
import Schopenhauer_img from '/img/card/schopenhauer.png';

const philosophers = [
    { img: Socrates_img, name: 'Сократ', url: 'socrates' },
    { img: Plato_img, name: 'Платон', url: 'plato' },
    { img: Aristole_img, name: 'Аристотель', url: 'aristotle' },
    { img: Nietzsche_img, name: 'Фридрих Ницше', url: 'nietzsche' },
    { img: Kant_img, name: 'Иммануил Кант', url: 'kant' },
    { img: Kierkegaard_img, name: 'Сёрен Кьеркегор', url: 'kierkegaard' },
    { img: Goethe_img, name: 'Иоганн Вольфганг фон Гёте', url: 'goethe' },
    { img: Schopenhauer_img, name: 'Артур Шопенгауэр', url: 'schopenhauer' },
    { img: Marx_img, name: 'Карл Маркс', url: 'marx' }
];

const Home: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';

    const filteredPhilosophers = philosophers.filter(philosopher =>
        philosopher.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Flex justify='space-around' gap="middle" wrap='wrap' style={{ marginTop: 16 }}>
                {filteredPhilosophers.map(({ img, name, url }) => (
                    <Card key={url} img_url={img} name={name} url_name={url} />
                ))}
            </Flex>
        </div>
    );
};

export default Home;