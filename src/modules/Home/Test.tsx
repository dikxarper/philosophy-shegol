import TestList from "@/shared/components/Content/TestList/TestList";

const Test: React.FC = () => {
    return (
        <>
            <TestList options={[
                {
                    question: "What is Susan's opinion about robots?",
                    answers: [
                        { text: "Robots are creatures devoted to humanity." },
                        { text: "Robots are blasphemers." },
                        { text: "Robots are main competitors for human jobs." },
                        { text: "Robots must be created as non-vocal robots." },
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What is the primary use of AI?",
                    answers: [
                        { text: "For data analysis." },
                        { text: "For automating tasks." },
                        { text: "For entertainment." },
                        { text: "For creating art." },
                    ],
                    correctAnswer: "B"
                }
            ]} />
        </>
    );
}

export default Test;