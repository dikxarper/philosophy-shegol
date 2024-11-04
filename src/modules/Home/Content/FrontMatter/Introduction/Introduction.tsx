import Spacing from "@/shared/components/Content/Spacing";
import styles from './Introduction.module.scss';

const Introduction: React.FC = () => {
    return (
        <div className={styles.main}>
            <b>Dear students, </b>
            <p>
                In taking the course of “Professional English” for IT students, you are going to be assigned Isaac Asimov’s science fiction novel, “I, Robot” as one of our principal reading texts.  The novel was published in 1950 and is based on stories that Asimov had published in science fiction magazines between 1940 and 1950. These stories offer many speculative ideas on the future of robots in human society, including the “Three Laws of Robotics,” a concept that future science fiction writing, and criticism would frequently revisit.
            </p>
            <p>
                Each week you will be given a few pre-reading and post-reading questions including class activities. These questions are to stimulate thinking about the readings and improve your speaking skills at in-class sessions. Independent and creative thinking in response to these questions is encouraged.  
            </p>
            <p>
                It is hoped that you will find the novel and the associated assignments to be an entertaining and informative gateway for improving English reading comprehension and speaking.
            </p>
            
        </div>
    );
};

export default Introduction;