import React from "react";
import { useParams } from "react-router-dom";
import { Image, Flex } from "antd";

import philosophersData from "../phillosophers.json";
import styles from './PhillPage.module.scss';
import TestList, { OptionProps } from "../TestList/TestList";

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
    options: OptionProps[];
}

const PhillPage: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const imgSrc = `img/page/${name}.png`;
    const philosopher: Philosopher | undefined = philosophersData[name as keyof typeof philosophersData];

    if (!philosopher) {
        return <h2>Philosopher not found</h2>;
    }

    return (
        <div className={styles.container}>
            <Flex
                align="start"
                justify="space-between"
                gap="large"
            >
                <Image
                    className={styles.img}
                    src={imgSrc}
                    width={450}
                />
                <div className={styles.info}>
                    <h1>{philosopher.name}</h1>
                    <p><strong>Туылды:</strong> {philosopher.born}</p>
                    <p><strong>Қайтыс болды:</strong> {philosopher.died}</p>
                    <p><strong>Философиясы:</strong> {philosopher.philosophy}</p>
                    <p><strong>Философиясының анықтамасы:</strong> {philosopher.philosophy_definition}</p>
                    <p><strong>Көрнекті еңбектері:</strong> {philosopher.notable_works.join(", ")}</p>
                    <p><strong>Оған әсер еткен тұлғалар:</strong> {philosopher.influences.join(", ")}</p>
                    <p><strong>Одан әсер алған тұрғалар:</strong> {philosopher.influenced.join(", ")}</p>
                    <h2>Негізгі идеялар</h2>
                    <ul>    
                        {Object.entries(philosopher.key_ideas).map(([idea, explanation]) => (
                            <li style={{marginBottom: 12}} key={idea}><strong>{idea}:</strong> {explanation}</li>
                        ))}
                    </ul>
                </div>
            </Flex>
            <div className={styles.test}>
                <h2>Біліміңді тексер:</h2>
                <TestList options={philosopher.options} />
            </div>
        </div>
    );
};

export default PhillPage;