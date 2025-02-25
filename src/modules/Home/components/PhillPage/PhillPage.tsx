import React from "react";
import { useParams } from "react-router-dom";
import { Image, Flex } from "antd";

import philosophersData from "../phillosophers.json";
import styles from './PhillPage.module.scss';

interface Philosopher {
    name: string;
    born: string;
    died: string;
    philosophy: string;
    philosophy_definition: string;
    notable_works: string[];
    influences: string[];
    influenced: string[];
    key_ideas: Record<string, string>;
}

const PhillPage: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const imgSrc = `img/page/${name}.png`;
    const philosopher: Philosopher | undefined = philosophersData[name as keyof typeof philosophersData];

    if (!philosopher) {
        return <h2>Philosopher not found</h2>;
    }

    return (
        <Flex
            className={styles.container}
            align="start"
            justify="space-between"
            gap="large"
        >
            <Image
                className={styles.img}
                src={imgSrc}
                width={500}
            />
            <div className={styles.info}>
                <h1>{philosopher.name}</h1>
                <p><strong>Рождение:</strong> {philosopher.born}</p>
                <p><strong>Смерть:</strong> {philosopher.died}</p>
                <p><strong>Философия:</strong> {philosopher.philosophy}</p>
                <p><strong>Определение философии:</strong> {philosopher.philosophy_definition}</p>
                <p><strong>Знаковые труды:</strong> {philosopher.notable_works.join(", ")}</p>
                <p><strong>Влияния:</strong> {philosopher.influences.join(", ")}</p>
                <p><strong>Повлиял на:</strong> {philosopher.influenced.join(", ")}</p>
                <h2>Ключевые идеи</h2>
                <ul>    
                    {Object.entries(philosopher.key_ideas).map(([idea, explanation]) => (
                        <li style={{marginBottom: 12}} key={idea}><strong>{idea}:</strong> {explanation}</li>
                    ))}
                </ul>
            </div>
        </Flex>
    );
};

export default PhillPage;