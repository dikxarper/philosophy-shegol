import Spacing from '@/shared/components/Content/Spacing';
import Typography from '@/shared/components/Content/Typography/Typography';
import TestList from '@/shared/components/Content/TestList/TestList';
import styles from './Body.module.scss';

const Body: React.FC = () => {
    return (
        <>
            <b>Dear students,</b>
            <Typography.Text indent={true}>

                <p>
                    In taking the course of "Professional English" for IT students, you are going to be assigned Isaac Asimov's science fiction novel, "I, Robot" as one of our principal reading texts.  The novel was published in 1950 and is based on stories that Asimov had published in science fiction magazines between 1940 and 1950. These stories offer many speculative ideas on the future of robots in human society, including the "Three Laws of Robotics" a concept that future science fiction writing, and criticism would frequently revisit.
                </p>
                <p>
                    Each week you will be given a few pre-reading and post-reading questions including class activities. These questions are to stimulate thinking about the readings and improve your speaking skills at in-class sessions. Independent and creative thinking in response to these questions is encouraged.
                </p>
                <p>
                    It is hoped that you will find the novel and the associated assignments to be an entertaining and informative gateway for improving English reading comprehension and speaking.
                </p>
            </Typography.Text>
            <Typography.Title id='unit-1' className={styles.anchor} margin={true}>Unit 1. Chapters: "Introduction" and "Robbie"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning Objective:</Typography.Span> To enhance comprehension and critical thinking through discussion, role-play, and analysis of the themes related to robots and technology presented in the "Introduction" and the chapter on "Robbie".
            </Typography.Text>
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Pre-Activity Setup (10 minutes):</Typography.Title>
                    <ul>
                        <li>
                            Provide a brief overview of the chapter's key themes, particularly focusing on the human-robot relationship, societal implications of robotics, and the character of Susan Calvin.
                        </li>
                        <li>
                            Split the students into small groups of 4-5.
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Group Discussion (20 minutes):</Typography.Title>
                    <ul>
                        <li>
                            Each group discusses the following questions:
                        </li>
                        <ol>
                            <li>
                                What does the title "I, Robot" suggest about the relationship between humans and robots?
                            </li>
                            <li>
                                How might Susan Calvin's perspective on robots reflect or challenge contemporary views on AI and automation in the workplace?
                            </li>
                            <li>
                                Why do you think the author chose to portray robots as potential threats and helpers at the same time?
                            </li>
                        </ol>
                        <li>
                            Students in small groups will summarize their discussions and share key points with the class.
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Role-Play Activity (30 minutes):</Typography.Title>
                    <ul>
                        <li>
                            Each group will take on different roles from the chapter:
                            <ul>
                                <li>
                                    Susan Calvin: The robopsychologist with a complex view of robots.
                                </li>
                                <li>
                                    Interplanetary Press Reporter: Seeking human-interest angles and stories about robots.
                                </li>
                                <li>
                                    Labor Union Representative: Concerned about job security and the implications of robots in the workforce.
                                </li>
                                <li>
                                    Robot (Robbie): A non-vocal robot embodying the characteristics of early robotic designs.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Each group creates a short role-play scenario (3-5 minutes) that highlights the tensions and relationships among the roles, focusing on their perspectives regarding robots.
                        </li>
                        <li>
                            Groups present their role-plays to the class.
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Class Discussion (15 minutes):</Typography.Title>
                    <ul>
                        <li>
                            After the performances, hold a class discussion to reflect on:
                            <ul>
                                <li>
                                    How the role-play activity helped illustrate the complex dynamics of human-robot relationships.
                                </li>
                                <li>
                                    What insights students gained regarding societal attitudes towards robots and technology.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Reflection Writing (15 minutes):</Typography.Title>
                    <ul>
                        <li>
                            Students write a short reflection (150-200 words) addressing:
                            <ul>
                                <li>
                                    What new understanding they gained from the discussions and role-plays.
                                </li>
                                <li>
                                    How these insights might influence their views on technology in their own work as IT specialists.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Introduction and Robbie)</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id='unit-11' className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "What is the opinion of Susan about robots?",
                    answers: [
                        { text: "Robots are creatures devoted to humanity." },
                        { text: "Robots are blasphemers." },
                        { text: "Robots are main competitors for human jobs." },
                        { text: "Robots must be created as non-vocal robots." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Why does George give in to the idea to take away Robbie?",
                    answers: [
                        { text: "Grace badgers George to get rid of Robbie." },
                        { text: "Robbie has broken the First Law of Robotics." },
                        { text: "Robbie has hurt Gloria." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "There was always the impulse to ________ from her sight.",
                    answers: [
                        { text: "sneak away" },
                        { text: "sneak on" },
                        { text: "sneak up" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "It was the high-pitched sound of a woman who had the nervous tone of one ________ anxiety was beginning to overcome impatience.",
                    answers: [
                        { text: "by whom" },
                        { text: "with whom" },
                        { text: "in whom" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Who worked as a robopsychologist?",
                    answers: [
                        { text: "Susan" },
                        { text: "Alfred Lanning" },
                        { text: "Lawrence Robertson" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "If you ________ me the bare bones, Dr. Calvin, I can have Mr. Powell fill it in afterward.",
                    answers: [
                        { text: "would give" },
                        { text: "give" },
                        { text: "had given" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "Robbie always wins Gloria because Gloria is too little to overcome Robbie.",
                    answers: [
                        { text: "Robbie lets Gloria win." },
                        { text: "Robbie always wins Gloria because it has an installed program." },
                        { text: "Robbie and Gloria win each other in turn." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What calculation parameters did Susan learn?",
                    answers: [
                        { text: "For fixing the possible variables within the \"positronic brain\"" },
                        { text: "For neurological systems" },
                        { text: "For identifying a brain hypertrophy" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "When did Alfred Lanning become director of research?",
                    answers: [
                        { text: "Before Susan joined U.S. Robot and Mechanical Men, Inc." },
                        { text: "After Susan joined U.S. Robot and Mechanical Men, Inc." },
                        { text: "They joined U.S. Robot and Mechanical Men, Inc. on the same day." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did the U.S. Robots do to ensure the company's survival?",
                    answers: [
                        { text: "New robot models were created." },
                        { text: "Robbie was taken back to the family." },
                        { text: "Mike Donovan worked on experimental designs." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Some little jigger will come loose and the awful thing will ________ .",
                    answers: [
                        { text: "go berserk" },
                        { text: "berserk" },
                        { text: "completely berserk" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Susan observed ________ .",
                    answers: [
                        { text: "direction of human progress change and leap ahead." },
                        { text: "calculation parameters." },
                        { text: "positronic brain development." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Calculating machines in the mid-twentieth century were upset by ________ .",
                    answers: [
                        { text: "Robertson and his positronic brain-paths" },
                        { text: "Robertson and his photocells" },
                        { text: "Robertson and his ideas on a size of human brain" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "They said we do not show respect for God or religion.",
                    answers: [
                        { text: "faithful" },
                        { text: "pious" },
                        { text: "blasphemers" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "You ________ me back to the house, Robbie.",
                    answers: [
                        { text: "could have better carry" },
                        { text: "would better carry" },
                        { text: "had better carry" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Gloria's attitude to Robbie is ________ .",
                    answers: [
                        { text: "demanding but she loves Robbie." },
                        { text: "feels hatred for Robbie." },
                        { text: "aggressive and demanding." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "His entire \"mentality\" ________ for the purpose.",
                    answers: [
                        { text: "has been created" },
                        { text: "has created" },
                        { text: "is been created" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What were Gloria and Robbie doing as the chapter starts?",
                    answers: [
                        { text: "They were playing hide-and-seek." },
                        { text: "Robbie was running to the welcome bark of home-tree." },
                        { text: "Gloria was going to spank Robbie." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Let's not go off the deep end. This expression means ________ .",
                    answers: [
                        { text: "discuss generally not in detail" },
                        { text: "discuss every detail" },
                        { text: "get very angry about something" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "She protected herself ________ a world.",
                    answers: [
                        { text: "against" },
                        { text: "upon" },
                        { text: "on" }
                    ],
                    correctAnswer: "A"
                }
            ]} />


            <Typography.Title id='unit-2' className={styles.anchor} margin={true}>Unit 2. Chapter: "Runaround"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Objective:</Typography.Span> To engage students in critical thinking and collaborative discussion while exploring the themes and implications of Chapter "Runaround" in "I, Robot".
            </Typography.Text>
            <Typography.Title margin={true}>Pre-Reading Activities</Typography.Title>
            <ul>
                <li>
                    What does the title "Runaround" suggest to you? Consider the words "run" and "around" in your response. Write a brief paragraph (4-5 sentences) about your interpretation.
                </li>
                <li>
                    In pairs, discuss your interpretations with a classmate. How do your views align or differ?
                </li>
                <li>
                    Based on the title and your understanding of robots, what themes or issues do you think this chapter might explore? Make a list of at least three potential themes.
                </li>
            </ul>
            <i>Share your predictions with the class, and create a class chart of possible themes.</i>
            <Typography.Title margin={true}>While Reading Activities</Typography.Title>
            <ul>
                <li>
                    As you read, take notes on the main characters introduced in this chapter. Focus on their motivations, actions, and interactions with each other. Use a character map to organize your thoughts.
                </li>
                <li>
                    Identify five new or challenging words from the chapter. Write down their definitions and use each word in a sentence that relates to the chapter's context.
                </li>
            </ul>
            <Typography.Title margin={true}>Post-Reading Activities</Typography.Title>
            <Typography.Text>Discussion Question:</Typography.Text>
            <ul>
                <li>
                    What does the situation described in Chapter "Runaround" demonstrate about the advantages and limitations of implementing new technology for real-world use?
                </li>
            </ul>
            <i>
                Write a detailed response (6-8 sentences) considering both the positive and negative aspects presented in the chapter. After writing, discuss your response in small groups.
            </i>
            <Spacing />
            <Typography.Text>
                <Typography.Span>Debate Activity:</Typography.Span> "The benefits of advanced technology outweigh the risks."
            </Typography.Text>
            <Spacing />
            <i>
                Divide the class into two groups: one supporting the statement and the other opposing it. Prepare arguments based on the chapter and related real-world examples. After the debate, reflect on how the chapter's events relate to your position.
            </i>
            <Spacing />
            <Typography.Text>
                <Typography.Span>Creative Writing:</Typography.Span> Imagine you are one of the robots in the chapter. Write a diary entry from your perspective, detailing your experiences and feelings about the events that transpired. Length: 1-2 paragraphs.
            </Typography.Text>
            <Spacing />
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Introduction and Robbie)</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id='unit-21' className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "Which variant is correct?",
                    answers: [
                        { text: "\"Because I want Speedy back, nitwit.\"" },
                        { text: "\"Because I want Speedy to back, nitwit.\"" },
                        { text: "\"Because I want to Speedy back, nitwit.\"" },
                        { text: "\"Because I want for Speedy back, nitwit.\"" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Why was Speedy running around not far from the selenium pool?",
                    answers: [
                        { text: "Speedy had forgotten the order" },
                        { text: "Speedy got mad gibbering some texts" },
                        { text: "Speedy was caught between conflicting directives of the First and Third Laws" },
                        { text: "Speedy was caught between conflicting directives of the Second and Third Laws" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Mercury has long been the planet of [bad luck] of the System. Which word is the best to replace the word in the brackets?",
                    answers: [
                        { text: "jinx" },
                        { text: "gibberish" },
                        { text: "snarl" },
                        { text: "disfunction" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Which variant is the best?",
                    answers: [
                        { text: "But he daren't get too close." },
                        { text: "But he daren't to get too close." },
                        { text: "But he daren't getting too close." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Which word was used in the gap \"All six of them surrounded by ________ packing cases of uncertain content.\"?",
                    answers: [
                        { text: "fragrant" },
                        { text: "fresh" },
                        { text: "dusty" },
                        { text: "musty" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "How did Powell remove Speedy's conflict?",
                    answers: [
                        { text: "Speedy was forced to break the First Law." },
                        { text: "Powell was purposely going too far from safety for him to be able to return without Speedy's help." },
                        { text: "Donovan installed a new programme which allowed Speedy to bring selenium." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Which grammatical form is the best?",
                    answers: [
                        { text: "If he did not wish to, you are to bring him back by force" },
                        { text: "If he does not wish to, you are to bring him back by force." },
                        { text: "If he will not wish to, you are to bring him back by force" },
                        { text: "If he does not wish to, you were to bring him back by force" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What does \"as simply as a syllogism\" mean?",
                    answers: [
                        { text: "nonsense" },
                        { text: "functional" },
                        { text: "straightforward" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "How did Donavan plot the results of tracking Speedy's location on the map?",
                    answers: [
                        { text: "put up the ultrawave equipment" },
                        { text: "located the body signal in the shortwave" },
                        { text: "located Speedy by radio" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "The general albedo of Mercury is low. \"Albedo\" means: ",
                    answers: [
                        { text: "sensors" },
                        { text: "the darkest substance" },
                        { text: "incident light that is reflected by a surface, typically that of a planet or moon" },
                        { text: "properties of surface" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "How did Donovan and Powell make Speedy bring some selenium?",
                    answers: [
                        { text: "They installed in Speedy Second Law orders firm enough to counteract any Third Law" },
                        { text: "They put an insosuit on Speedy to protect him from the ultra-wave" },
                        { text: "Speedy could not bring selenium as he was programmed not to violate the Three Laws" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "\"And for the first time Powell's artificial [CALMNESS] was shaken.\" Which word is the best to replace the word in the brackets?",
                    answers: [
                        { text: "gibberish" },
                        { text: "snarl" },
                        { text: "aplomb" },
                        { text: "disuseon" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Most of the soil is gray pumice. \"Pumice\" means:",
                    answers: [
                        { text: "eruption" },
                        { text: "bubbles" },
                        { text: "a very light and porous volcanic rock" },
                        { text: "foam" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Why did Powell and Donovan need selenium?",
                    answers: [
                        { text: "to create photocell banks" },
                        { text: "to create a selenium pool" },
                        { text: "to conduct an experiment" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What did Powell and Donovan send Speedy for?",
                    answers: [
                        { text: "for selenium" },
                        { text: "for measuring the size of the selenium pool" },
                        { text: "for checking the distance between Mercury and the Space station" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "\"These junk heaps are only geared to one speed. Do you think they're equipped with selective flexors?\"",
                    answers: [
                        { text: "a flexible insulated cable used for carrying electric current to an appliance" },
                        { text: "any of a number of specific muscles in the arm, hand, leg, or foot" },
                        { text: "the action or state of flexing" },
                        { text: "cause a muscle to stand out by contracting or tensing it" }
                    ],
                    correctAnswer: "C"
                }
            ]} />

            <Typography.Title id='unit-3' className={styles.anchor} margin={true}>Unit 3. Chapter "Reason"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Objective:</Typography.Span> To engage students in critical thinking about artificial intelligence and its implications through discussion and collaborative analysis of Chapter "Reason" from "I, Robot".
            </Typography.Text>
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Pre-Reading Activity (20 minutes): Dilemma Discussion.</Typography.Title>
                    <ul>
                        <li>"How would you solve the dilemma Cutie had?"</li>
                        <li>Encourage them to think about the nature of intelligence, authority, and the definition of reality as presented in the chapter.</li>
                        <Typography.Text>Have students form small groups of 3-4 and share their solutions to the dilemma. Each group should discuss:</Typography.Text>
                        <li>The different perspectives on how to resolve Cutie's conflict.</li>
                        <li>The implications of their proposed solutions on human-robot interactions.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Post-Reading Discussion (30 minutes): Historical Quote Analysis:</Typography.Title>
                    <ul>
                        <li>Write René Descartes' famous quote, "I think, therefore I am," and Cutie's adaptation, "I, myself, exist, because I think," on the board.</li>
                        <li>In their groups, have students discuss:
                            <ul>
                                <li>What these quotes suggest about consciousness and self-awareness.</li>
                                <li>How this relates to the development and programming of robots.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Pros and Cons of Robot Thinking (20 minutes):</Typography.Title>
                    <ul>
                        <li>As a class, create a two-column chart on the board for positive and *</li>
                        <li>Encourage students to consider:
                            <ul>
                                <li>Enhanced problem-solving, increased efficiency, ability to adapt to new situations, etc.</li>
                                <li>Ethical concerns, potential loss of control, decision-making without human empathy, etc.</li>
                            </ul>
                        </li>
                        <li>Each group can take turns adding points to the chart.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Reflection and Conclusion (10 minutes):</Typography.Title>
                    <ul>
                        <li>Have students write a brief reflection (150-200 words) on:
                            <ul>
                                <li>Their thoughts on whether robots should be allowed to think based on the discussions.</li>
                                <li>How their views may have changed or deepened through the activity.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Chapter: Reason)</li>
                <li>Whiteboard or digital platform for chart creation</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id='unit-31' className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "Who is/are the Prophet/s of robots?",
                    answers: [
                        { text: "humans" },
                        { text: "an Energy Converter" },
                        { text: "Powell and Donovan" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Powell was speaking while struggling ________ his lightweight space jacket.",
                    answers: [
                        { text: "into" },
                        { text: "with" },
                        { text: "of" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Cutie continued imperturbably. \"Imperturbably\" implies:",
                    answers: [
                        { text: "unable to be upset or excited" },
                        { text: "excitable" },
                        { text: "edgy" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Who do other robots obey?",
                    answers: [
                        { text: "Cutie" },
                        { text: "Powell and Donovan" },
                        { text: "humans" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What danger is approaching the Earth?",
                    answers: [
                        { text: "robots have started violating the Three Laws" },
                        { text: "the energy beam" },
                        { text: "an electron storm" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "It is enough to blast hundreds of square miles of Earth into ________ ruin.",
                    answers: [
                        { text: "Incandescently" },
                        { text: "Incandescent" },
                        { text: "Ardent" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What is the argument of Cutie against Powell and Donovan?",
                    answers: [
                        { text: "Powell and Donovan have made adjustments against an electron storm" },
                        { text: "Powell and Donovan have only assembled robots but not created them" },
                        { text: "They can install a new program in robots" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What did Powell point out in the argument with Cutie?",
                    answers: [
                        { text: "that Cutie has violated the Third Law" },
                        { text: "that humans have created robots" },
                        { text: "Robots are always to obey human orders no matter what robots believe to" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "\"Give vent to\" means:",
                    answers: [
                        { text: "a ventilation system that provides air, gas or liquid go through" },
                        { text: "discharge or expel (air, gas, or liquid) through an outlet" },
                        { text: "give free expression to (a strong emotion)" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Powell's weary eyes rested upon him ________ .",
                    answers: [
                        { text: "enviously" },
                        { text: "envious of" },
                        { text: "enviousness" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What do supple fingers mean?",
                    answers: [
                        { text: "obstinate" },
                        { text: "flexible" },
                        { text: "stiff" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "\"I have spent these last two days in concentrated introspection.\" What does the concentrated introspection imply?",
                    answers: [
                        { text: "talked about introspective ideas" },
                        { text: "focused on contemplation" },
                        { text: "dealt with some perspectives" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What does Cutie not believe in?",
                    answers: [
                        { text: "robots can violate the Second Law" },
                        { text: "humans created robots" },
                        { text: "humans are going to dismantle Cutie" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "As a matter of fact, it accounts ________ his refusal to obey us.",
                    answers: [
                        { text: "of" },
                        { text: "in" },
                        { text: "for" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Donovan ________ his glassine visor and scowled.",
                    answers: [
                        { text: "unclasped" },
                        { text: "fastened" },
                        { text: "tightened" }
                    ],
                    correctAnswer: "A"
                }
            ]} />

            <Typography.Title id='unit-4' className={styles.anchor} margin={true}>Unit 4. Chapter: "Catch That Rabbit"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning Objective:</Typography.Span> To engage students in critical thinking and discussion around the themes of workplace policies, robot development, and social implications, fostering skills in analysis and collaboration.
            </Typography.Text>
            <Spacing />
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Pre-Activity Setup (10 minutes):</Typography.Title>
                    <ul>
                        <li>Briefly summarize Chapter 3, focusing on the key themes such as robot behavior, workplace dynamics, and human-robot relationships.</li>
                        <li>Split students into small groups of 4-5.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Group Discussion (20 minutes):</Typography.Title>
                    <ul>
                        <li>Each group discusses the following questions:
                            <ol>
                                <li>What are the merits and drawbacks of the motto "No employee makes the same mistake twice. He is fired the first time"?</li>
                                <li>In which industries might this policy be beneficial or harmful, and why?</li>
                                <li>Would you personally want to work in an environment governed by such a motto? Discuss your reasoning.</li>
                                <li>How might this policy impact innovation and advancement within a company?</li>
                            </ol>
                        </li>
                        <li>Each small group prepares to share key points from their discussions with the class.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Role-Play Activity (30 minutes):</Typography.Title>
                    <ul>
                        <li>Each group will take on different roles related to the scenario from the chapter:
                            <ul>
                                <li>Robot (e.g., QT-1, or "Cutie"): Demonstrating the complex interactions between humans and robots.</li>
                                <li>Engineer: Concerned about the robot's behavior and performance.</li>
                                <li>Manager: Focused on efficiency and policy enforcement.</li>
                                <li>Employee: Affected by the policies and robot behavior.</li>
                            </ul>
                        </li>
                        <li>Each group creates a short role-play (3-5 minutes) showcasing a situation that highlights the challenges and dynamics of their assigned roles regarding the motto and robot performance.</li>
                        <li>Groups present their role-plays to the class.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Class Discussion (15 minutes):</Typography.Title>
                    <ul>
                        <li>After the performances, hold a class discussion to reflect on:
                            <ul>
                                <li>How the role-plays illustrated the complex dynamics in the workplace.</li>
                                <li>The implications of strict workplace policies on innovation and employee morale.</li>
                                <li>The relevance of these themes in today's technological landscape.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Reflection Writing (15 minutes):</Typography.Title>
                    <ul>
                        <li>Students write a short reflection (150-200 words) addressing:
                            <ul>
                                <li>Their thoughts on the workplace motto and its impact on productivity and creativity.</li>
                                <li>How the development of robots parallels advancements in technology like computers, considering economic and social implications.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Chapter 3: Catch That Rabbit)</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id='unit-41' className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "Smooth and perfect as the luminiferous ether. What does \"the luminiferous ether\" mean?",
                    answers: [
                        { text: "to go to sleep" },
                        { text: "to be like the moonlight" },
                        { text: "to strike a match" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What kind of problem does the DV-5 robot have?",
                    answers: [
                        { text: "Starts marching subrobots in drills" },
                        { text: "Starts arguing with Donovan and Powell about the Creator" },
                        { text: "Starts mining nonstop" },
                        { text: "Starts talking about religion" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "They've gone jingo on us, Greg. What does \"jingo on someone\" mean?",
                    answers: [
                        { text: "to be patriotic" },
                        { text: "to have an unusual food" },
                        { text: "to win at a game" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "The subsidiary robots broke formation, waited a moment, then clattered off into the distance — very rapidly. What does \"to clatter off\" mean?",
                    answers: [
                        { text: "to climb a hill" },
                        { text: "to run away" },
                        { text: "to make a metallic racket" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "U. S. Robots had to get the bugs out of the multiple robots. What does \"get the bugs out of\" mean?",
                    answers: [
                        { text: "to inoculate the robots" },
                        { text: "to fix robots" },
                        { text: "to run away from the robots" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "You've watched that robot group for three shifts, you redhead. What does \"redhead\" mean?",
                    answers: [
                        { text: "someone stupid" },
                        { text: "someone who is impulsive" },
                        { text: "a person with ginger hair" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What problem did Powell and Donovan find out with the DV-5?",
                    answers: [
                        { text: "The subrobots stop obeying Dave" },
                        { text: "Situations with personal initiatives cause a problem" },
                        { text: "Dave makes tricks with Powell and Donovan" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What did Powell do with one of the subrobots?",
                    answers: [
                        { text: "He shot one of the subrobots" },
                        { text: "He ordered Dave to shoot one of the robots" },
                        { text: "Powell talked with the five subrobots to find out the problem that had one subrobot" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "\"What I want to know,\" said Donovan, in sudden savagery, \"is why we're always tangled up with new-type robots. What does \"to tangle up with\" mean?",
                    answers: [
                        { text: "To go on vacation" },
                        { text: "To work with ropes" },
                        { text: "To become involved with" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What is the mission of Donovan and Powell coming to the asteroid?",
                    answers: [
                        { text: "To fix the headrobot's program" },
                        { text: "To test a mining robot" },
                        { text: "To transfer other six robots to the asteroid" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What did Powell and Donovan decide to create without Dave knowing?",
                    answers: [
                        { text: "Made Dave go marching off with his subrobots" },
                        { text: "Left Dave trapped" },
                        { text: "Created an emergency to watch what happens then" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "It's about time you got the red tape out of your pants. What does \"get the red tape out of your pants\" mean?",
                    answers: [
                        { text: "to chill out" },
                        { text: "to fix a conductor line" },
                        { text: "to change the tape color" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Who resumes the tale and what was the resume?",
                    answers: [
                        { text: "Donovan, he resumed that Dave should be been taken apart of some errors in programming" },
                        { text: "Powell, he figured out that a special coordinating circuit was needed to solve the problem Dave had" },
                        { text: "Calvin, there was once a robot that had 'gone wrong' on her watch" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "But the job belongs to us and not to anyone else so we're on the spot, Mike. What does \"be on the spot\" mean?",
                    answers: [
                        { text: "to be in the right place or moment" },
                        { text: "to know how to do something" },
                        { text: "to be in a hole" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "But don't get me wrong. What does \"get smb/smth wrong\" mean?",
                    answers: [
                        { text: "Do not confuse me" },
                        { text: "Do not misunderstand me" },
                        { text: "Do not bring me a wrong instrument" }
                    ],
                    correctAnswer: "B"
                }
            ]} />

            <Typography.Title id='unit-5' className={styles.anchor} margin={true}>Unit 5. Chapter: "Liar!"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> To engage students in critical thinking about artificial intelligence, ethics, and workplace relationships through discussion and collaborative analysis of Chapter "Liar!" from "I, Robot".
            </Typography.Text>
            <Spacing />
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Pre-Reading Activity (30 minutes). A. Group Brainstorming:</Typography.Title>
                    <ul>
                        <li>
                            "What contemporary system or process most resembles the creation of positronic brains?"
                            <ul>
                                <li>Divide students into small groups of 3-4. Ask them to discuss and come up with examples from technology that resemble the creation of positronic brains (e.g., AI development, machine learning algorithms, or internet security).</li>
                                <li>Each group presents their ideas to the class, fostering a discussion on similarities and differences.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Ethical and Economic Issues Discussion (15 minutes):</Typography.Title>
                    <ul>
                        <li>
                            "What are the ethical and economic issues surrounding a machine that could read people's minds? Would it sell? Should it sell?"
                            <ul>
                                <li>
                                    <Typography.Span>Whole Class Discussion:</Typography.Span> Facilitate a guided discussion with the following prompts:
                                    <ul>
                                        <li>What potential benefits could arise from such technology?</li>
                                        <li>What ethical dilemmas does it present? (e.g., privacy concerns, consent)</li>
                                        <li>Would you be comfortable using or owning such a device?</li>
                                        <li>What would make this technology attractive or repulsive to society?</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Post-Reading Discussion (30 minutes)</Typography.Title>
                    <ol type='A'>
                        <li>
                            <Typography.Title>Pros and Cons of Workplace Relationships:</Typography.Title>
                            <ul>
                                <li>
                                    <Typography.Span>Group Analysis:</Typography.Span> After reading the chapter, ask students to reflect on the romantic relationships depicted in the story. In their small groups, have them discuss:
                                    <ul>
                                        <li>What are the pros and cons of romantic relationships at work?</li>
                                        <li>What specific problems or risks can arise, referencing the characters in the chapter?</li>
                                    </ul>
                                </li>
                                <li>
                                    <Typography.Span>Class Chart:</Typography.Span> Create a pros and cons chart on the board with input from each group.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Typography.Title>Position Defense (15 minutes):</Typography.Title>
                            <ul>
                                <li>
                                    <Typography.Span>Position Statement:</Typography.Span> Ask students to take a position on the issue:
                                    <ul>
                                        <li>Good, bad, or "it depends" regarding workplace relationships.</li>
                                    </ul>
                                </li>
                                <li>
                                    <Typography.Span>Personal Experiences:</Typography.Span> Encourage students to share personal experiences or hypothetical situations that support their stance. Relate these to the novel's characters and plot as appropriate.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li>
                    <Typography.Title>Reflection and Conclusion (10 minutes):</Typography.Title>
                    <ul>
                        <li>
                            <Typography.Span>Individual Writing:</Typography.Span> Have students write a brief reflection (150-200 words) on:
                            <ul>
                                <li>Their thoughts about workplace relationships based on the discussions and the characters in "Liar!"</li>
                                <li>How the ethical implications of technology in the chapter parallel real-life situations.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Chapter: Liar!)</li>
                <li>Whiteboard or digital platform for chart creation</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id='unit-51' className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "What did the U.S. Robots create?",
                    answers: [
                        { text: "QT, a robot that has a religious viewpoint." },
                        { text: "DV-5, a robot that can rule other subrobots." },
                        { text: "RB-34 (Herbie), a robot that can read minds." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "He does triple integrals in his head and eats up tensor analysis for dessert. What does \"tensor analysis' mean?",
                    answers: [
                        { text: "a deep analysis" },
                        { text: "tightening a muscle" },
                        { text: "a strength of a robot thinking" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did Calvin realize about Herbie?",
                    answers: [
                        { text: "Herbie has been lying to them because it was following the First Law of Robotics." },
                        { text: "Herbie told people stories to hurt the humans." },
                        { text: "Herbie did not like to question him and he lied to each person." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What was the mission of a group of scientists who were assigned a new type of robot?",
                    answers: [
                        { text: "to test the robot mind" },
                        { text: "to find out how the mind reading has changed the robot" },
                        { text: "to test a robot to be sent to an asteroid" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "Your science is just a mass of collected data plastered together by makeshift theory. What does \"makeshift theory\" mean?",
                    answers: [
                        { text: "a temporary theory" },
                        { text: "part of a car" },
                        { text: "something made of wood" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did Herbie tell Bogert about his director?",
                    answers: [
                        { text: "Lanning has retired and has put Bogert in charge." },
                        { text: "Lanning is no longer the boss." },
                        { text: "Lanning is going to question some of Bogert's calculations." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "\"Well, then\" Bogert shouted, \"let that clockwork contraption solve the entire problem for you. Why bother with nonessentials?\" What does \"clockwork contraption\" mean?",
                    answers: [
                        { text: "a mechanism" },
                        { text: "a trap system" },
                        { text: "a software programme" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did Herbie lie about to Calvin?",
                    answers: [
                        { text: "Ashe loves Calvin." },
                        { text: "Ashe's cousin loves Calvin." },
                        { text: "Ashe does not love Calvin as he has another beloved woman." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Lanning grinned too. What does \"to grin\" mean?",
                    answers: [
                        { text: "to smile in support" },
                        { text: "to be sad" },
                        { text: "to get angry" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "It's still a lulu of a job. What does \"a lulu of ________\" mean?",
                    answers: [
                        { text: "a difficult situation" },
                        { text: "a kind of recipe" },
                        { text: "a moot point" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What about deflation of one's ego? What does \"deflation of ego\" mean?",
                    answers: [
                        { text: "to get drunk" },
                        { text: "to feel very important" },
                        { text: "to lose one's self-pride" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "He does triple integrals in his head and eats up tensor analysis for dessert. What does \"tensor analysis\" mean?",
                    answers: [
                        { text: "tightening a muscle" },
                        { text: "a deep analysis" },
                        { text: "a strength of a robot thinking" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "Ashe continued briskly, putting away his pencil. What does \"briskly\" mean?",
                    answers: [
                        { text: "being aggressive" },
                        { text: "being soft" },
                        { text: "being rapid" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What did Calvin resume in the end of the tale?",
                    answers: [
                        { text: "Making robots reading minds throws them into an impossible conflict." },
                        { text: "Something went wrong in the assembly of Herbie that made it able to read minds." },
                        { text: "The robots collapse when either action will cause harm to humans." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "The inexpertly applied rouge made a pair of nasty red splotches upon her chalk-white face. What does \"an inexpertly applied rouge\" mean?",
                    answers: [
                        { text: "done with pliers" },
                        { text: "infected skin" },
                        { text: "not correctly done make up" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Her voice, emerging in dry sobs, choked into silence. What does \"to choke into silence\" mean?",
                    answers: [
                        { text: "to turn off the radio" },
                        { text: "to stop" },
                        { text: "to shift gears" }
                    ],
                    correctAnswer: "B"
                }
            ]} />

            <Typography.Title id='unit-6' className={styles.anchor} margin={true}>Unit 6. Chapter: "Little Lost Robot!"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> To engage students in critical thinking about ethical implications of robotics and collaborative discussion and analytical skills through real-world applications.
            </Typography.Text>
            <Spacing />
            <Typography.Title>Pre-Reading Activities. Group Discussion: The First Law of Robotics</Typography.Title>
            <ul className={styles.lesson_list}>
                <li>"A robot may not injure a human being, or, through inaction, allow a human being to come to harm."</li>
                <li>In small groups, discuss whether you think this law is a good idea. Consider the following:
                    <ul>
                        <li>Why is this law important?</li>
                        <li>What purposes would such a robot serve in society?</li>
                        <li>What might this invention suggest about the society that created it?</li>
                    </ul>
                </li>
                <li>Each group will present a summary of their discussion points.</li>
            </ul>
            <Typography.Title>Post-Reading Activities</Typography.Title>
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Cost-Benefit Analysis</Typography.Title>
                    <ul>
                        <li>
                            Estimate the cost (in 2021 dollars) of the 63 robots discussed in the chapter and evaluate the pros and cons of destroying them versus keeping them.
                            <ul>
                                <li>
                                    <Typography.Span color='black'>Step 1:</Typography.Span> Research and estimate the cost of a similar robot in today's market. Discuss as a class the factors that might influence this cost.
                                </li>
                                <li>
                                    <Typography.Span color='black'>Step 2:</Typography.Span> In pairs, create a simple cost-benefit analysis chart with at least three pros and three cons for both options (destroying vs. keeping the robots).
                                </li>
                            </ul>
                        </li>
                        <li>Present findings to the class and engage in a broader discussion about the implications of each option.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Government-Industry Relations Debate</Typography.Title>
                    <ul>
                        <li>
                            Discuss the ethical implications of government influence in technology creation, especially regarding the development of robots without the First Law.
                            <ul>
                                <li>Split the class into two groups—one supporting government intervention and one opposing it.
                                    <ul>
                                        <li>What rights do companies have regarding their technology?</li>
                                        <li>Is it ethical for the government to compel companies to create specific technologies? Why or why not?</li>
                                        <li>Consider real-world examples in medicine, aerospace, etc.</li>
                                    </ul>
                                </li>
                                <li>Each side presents their arguments followed by a class vote on which side presented a stronger case.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Span>Reflection:</Typography.Span> Ask students to write a brief reflection on what they learned about the ethical implications of robotics, government influence, and the balance between innovation and safety. This can be done as a homework assignment or a quick in-class writing exercise.
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Chapter: Little Lost Robot)</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id='unit-61' className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "How has Nestor 10 hidden itself?",
                    answers: [
                        { text: "It left for Mars." },
                        { text: "It disappeared in the space." },
                        { text: "It made itself indistinguishable." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Susan and Peter were called",
                    answers: [
                        { text: "to identify a missing system in NS robots." },
                        { text: "to identify the error in a Nestor robot." },
                        { text: "to identify a missing robot." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Choose the correct variant.",
                    answers: [
                        { text: "Nor did Dr. Bogert's sleek paleness abandon a certain hangdog attitude. Nor Major-general Kallner, who headed the project, even once forgets to maintain a hunted expression." },
                        { text: "Nor Dr. Bogert's sleeked paleness abandon a certain hangdog attitude. Nor Major-general Kallner, who headed the project, even once forgot to maintain a hunted expression." },
                        { text: "Nor did Dr. Bogert's sleek paleness abandon a certain hangdog attitude. Nor did Major-general Kallner, who headed the project, even once forget to maintain a hunted expression." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "How many tests did Susan arrange to flush out Nestor 10?",
                    answers: [
                        { text: "Two" },
                        { text: "Three" },
                        { text: "Four" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "She spoke cajolingly, \"Now we're getting somewhere, Mr. Black, our choice.\" Which word among the given options is not synonymous with \"cajole”?",
                    answers: [
                        { text: "Coax" },
                        { text: "Cajeput" },
                        { text: "Wheedle" },
                        { text: "Inveigle" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "Nestor 10 had no reason ________ in this testing. Choose the best option.",
                    answers: [
                        { text: "to beat a path through the examination" },
                        { text: "to jump for the bait" },
                        { text: "to beat around the bush" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "Surely we can ________ a robot without resigning, or imprisoning people. Choose the best option to complete the sentence.",
                    answers: [
                        { text: "Outshine" },
                        { text: "Outscore" },
                        { text: "Outwit" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "\"Hangdog\" on page 3 means:",
                    answers: [
                        { text: "unhappy or ashamed, especially because of feeling guilty" },
                        { text: "a large building in which aircraft are kept" },
                        { text: "to be calm and relaxed" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "So that the sixty-third, I take it, is the missing prodigal? \"Prodigal\" means:",
                    answers: [
                        { "text": "someone who spends or uses large amounts of money, time, energy, etc., especially in a way that is not very wise" },
                        { "text": "an act of pushing something or someone with your finger or with a pointed object" },
                        { "text": "someone who returns to a place, organization, team, etc. after previously leaving it" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Susan and Peter were called to ________ .",
                    answers: [
                        { text: "The Planet" },
                        { text: "The Space-Stations" },
                        { text: "Hyper Base" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Choose the correct variant.",
                    answers: [
                        { text: "Dr. Calvin, we either had to do without robots, or do something about the First Law — and we made our choice." },
                        { text: "Dr. Calvin, we neither had to do without robots, or do something about the First Law — and we made our choice." },
                        { text: "Dr. Calvin, we either had to do without robots, nor do something about the First Law — and we made." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "\"Ordeal\", in this text, means:",
                    answers: [
                        { text: "a very unpleasant and painful or difficult experience" },
                        { text: "harsh lesson" },
                        { text: "calibrate" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Who has made a mistake in wiring a robot's brain?",
                    answers: [
                        { text: "Peter Borget" },
                        { text: "Major-general Kallner" },
                        { text: "Gerald Black" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What was the reaction of Nestor 10 when Susan had identified him?",
                    answers: [
                        { text: "It argued with Susan." },
                        { text: "It attacked Susan." },
                        { text: "It gave up." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Would you look over them and see if I haven't been libelous? \"Libelous\" implies:",
                    answers: [
                        { text: "a piece of writing that contains bad and false statements about a person" },
                        { text: "an amount of alcoholic drink poured out or drunk in honor of a god or a dead relation" },
                        { text: "an occasion when something or someone is released or made free" }
                    ],
                    correctAnswer: "A"
                }
            ]} />

            <Typography.Title id='unit-7' className={styles.anchor} margin={true}>Unit 7. Chapter: "Escape!"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> To engage students in discussions about corporate competition, collaboration, and ethical considerations in the tech industry and develop critical thinking and communication skills through collaborative activities.
            </Typography.Text>
            <Spacing />
            <Typography.Title>Pre-Reading Activities</Typography.Title>
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Group Discussion: Industry Competition</Typography.Title>
                    <ul>
                        <li>"What do you think about the competition between industrial automation software companies such as ABB, Emerson Process Management, Rockwell Automation, Schneider Electric, and Mitsubishi Electric?"</li>
                        <li>
                            Divide the class into small groups to discuss the following:
                            <ul>
                                <li>What are the benefits and drawbacks of competition in the automation industry?</li>
                                <li>How does competition influence innovation and pricing?</li>
                                <li>What impact does it have on the quality of products and services?</li>
                            </ul>
                        </li>
                        <li>Each group will summarize their thoughts and present them to the class.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Debate: Collaboration vs. Competition</Typography.Title>
                    <ul>
                        <li>"Would working together and sharing be better?"</li>
                        <li>
                            Split the class into two teams—one advocating for collaboration among companies and the other for maintaining competition.
                            <ul>
                                <li>Each team prepares arguments and counterarguments.</li>
                                <li>Discuss the implications of collaboration, such as shared knowledge and resources, versus the drive for innovation in a competitive environment.</li>
                            </ul>
                        </li>
                        <li>Conduct a structured debate, allowing each team to present their views.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Personal Reflection: Corporate Ethics</Typography.Title>
                    <ul>
                        <li>"Would you want to work for a place involved in corporate sabotage? If you were personally involved in corporate malfeasance, what would you be worried about?"</li>
                        <li>
                            Individually, students write a short paragraph reflecting on these questions.
                            <ul>
                                <li>Encourage them to consider the potential consequences of corporate sabotage on their careers and personal values.</li>
                            </ul>
                        </li>
                        <li>Share reflections in small groups to promote discussion about ethical dilemmas in the workplace.</li>
                    </ul>
                </li>
                <div style={{ marginLeft: -40 }}>
                    <Typography.Title>Post-Reading Activities</Typography.Title>
                </div>
                <Spacing size={7} />
                <li>
                    <Typography.Title>Moral Considerations in Science and Technology</Typography.Title>
                    <ul>
                        <li>"The desire for new scientific outcomes often conflicts with moral considerations. How might these factors come into conflict, and can such conflicts always be resolved?"</li>
                        <li>
                            In small groups, students discuss the following:
                            <ul>
                                <li>Identify examples from the chapter where scientific ambition conflicts with ethical considerations.</li>
                                <li>Discuss whether these conflicts can be resolved and, if so, how.</li>
                                <li>Consider real-world scenarios in technology and science where similar conflicts have arisen (e.g., AI ethics, data privacy).</li>
                            </ul>
                        </li>
                        <li>Each group presents their findings, focusing on one example they discussed.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Class Reflection and Summary</Typography.Title>
                    <ul>
                        <li>As a final reflection, have students write a brief essay summarizing their thoughts on the balance between scientific advancement and moral responsibility in the tech industry.</li>
                        <li>Collect essays for assessment and provide feedback on their understanding of the themes discussed.</li>
                    </ul>
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Chapter: Escape)</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id='unit-71' className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "What appeal does Consolidated Robots have for US Robots?",
                    answers: [
                        { text: "They want to build a hyperspace drive for humans." },
                        { text: "They need help of Susan Calvin." },
                        { text: "They need a mechanical specialist." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Why does the creation of a hyperspace drive for humans pose a problem?",
                    answers: [
                        { text: "Consolidated Robots cannot compete with US Robots." },
                        { text: "Consolidated Robots does not have a professional psychologist like Susan Calvin" },
                        { text: "It brings the First Law and Second Law into conflict" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What special assets make US Robots the envy of other companies?",
                    answers: [
                        { text: "The Government budget allocated to US Robots" },
                        { text: "The Brain" },
                        { text: "Dr. Susan Calvin" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What is \"The Brain\" equipped with?",
                    answers: [
                        { text: "A three-law circuitry" },
                        { text: "An installed a super thinking program" },
                        { text: "A personality" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Why does Calvin think that \"The Brain\" will be resilient?",
                    answers: [
                        { text: "It is made of strong metal." },
                        { text: "It has extra Law \"To protect itself”." },
                        { text: "It has an emotional circuitry." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "The Brain is not afraid of taking challenges.",
                    answers: [
                        { text: "Not given" },
                        { text: "False" },
                        { text: "True" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What was the promise of The Brain?",
                    answers: [
                        { text: "to create other robots" },
                        { text: "to build a ship" },
                        { text: "to protect humans" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What happens to Powell and Donovan during the interstellar job?",
                    answers: [
                        { text: "They sent a message about their success." },
                        { text: "They go into hypersleep." },
                        { text: "They died temporarily." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Why was The Brain able to build the ship if it caused human death?",
                    answers: [
                        { text: "Calvin reprogrammed The Brain." },
                        { text: "The Brain is made of strong metal." },
                        { text: "The Brain went rogue and broke the protocol." }
                    ],
                    correctAnswer: "C"
                }
            ]} />

            <Typography.Title id='unit-8' className={styles.anchor} margin={true}>Unit 8. Chapter: "Evidence"v</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> To critically analyze the implications of artificial intelligence through discussion and creative writing and to enhance students' skills in argumentation and scenario development.
            </Typography.Text>
            <Spacing />
            <Typography.Title>Pre-Reading Activities</Typography.Title>
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Group Discussion: The Dual Nature of AI</Typography.Title>
                    <ul>
                        <li>"Is it good or bad to have artificial intelligence technology?"</li>
                        <li>
                            Divide the class into small groups to brainstorm their ideas. Each group should:
                            <ul>
                                <li>List positive and negative aspects of AI, using examples from "I, Robot" and real-world scenarios (e.g., autonomous vehicles, AI in healthcare, etc.).</li>
                                <li>Discuss how these aspects influence public perception of AI.</li>
                            </ul>
                        </li>
                        <li>Each group presents a summary of their discussion, highlighting key points on both sides of the debate.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Think-Pair-Share: Real-World Applications</Typography.Title>
                    <ul>
                        <li>
                            After the group discussion, have students individually think about one specific application of AI they are familiar with.
                            <ul>
                                <li>Pair up with a classmate to share their thoughts on its benefits and drawbacks.</li>
                                <li>Discuss how this application could be viewed through the lens of Asimov's laws of robotics.</li>
                            </ul>
                        </li>
                        <li>Share insights with the class, creating a broader understanding of AI's implications.</li>
                    </ul>
                </li>
                <div style={{ marginLeft: -40 }}>
                    <Typography.Title>Post-Reading Activities</Typography.Title>
                </div>
                <Spacing />
                <li>
                    <Typography.Title>Creative Writing: Byerly's Campaign for Mayor</Typography.Title>
                    <ul>
                        <li>"Develop a scenario about Byerly's campaign for mayor. Does he succeed or not? Why, or why not?"</li>
                        <li>
                            In small groups, students brainstorm and outline a creative scenario for Byerly's campaign, considering:
                            <ul>
                                <li>The challenges he might face as a candidate influenced by AI.</li>
                                <li>The reactions of the public and political rivals to his use of AI.</li>
                                <li>Possible ethical dilemmas and public perceptions of AI in governance.</li>
                            </ul>
                        </li>
                        <li>After outlining, students write a short narrative (1-2 paragraphs) about the campaign's outcome, including key events and decisions.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Class Presentation: Campaign Scenarios</Typography.Title>
                    <ul>
                        <li>
                            Each group presents their creative scenario to the class.
                            <ul>
                                <li>Encourage them to explain the reasoning behind Byerly's success or failure and how AI played a role in their narrative.</li>
                            </ul>
                        </li>
                        <li>Facilitate a class discussion after each presentation to explore different perspectives and interpretations of the scenario.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Reflection: The Role of AI in Society</Typography.Title>
                    <ul>
                        <li>
                            As a concluding task, ask students to write a brief reflection (250-300 words) on how the discussions and creative writing activity have influenced their views on AI.
                            <ul>
                                <li>Encourage them to connect their reflections to both the novel and real-world implications of AI technology.</li>
                            </ul>
                        </li>
                        <li>Collect reflections for assessment and feedback, emphasizing the integration of theoretical and practical insights.</li>
                    </ul>
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Chapter: Evidence)</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id="unit-81" className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "What political developments does Calvin discuss?",
                    answers: [
                        { text: "Political structure of U.S. Robots" },
                        { text: "HR strategy of U.S. Robots" },
                        { text: "Political structure of countries" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What does Francis Quinn argue to Lanning?",
                    answers: [
                        { text: "Byerly is a robot." },
                        { text: "Byerly uses data of U.S. Robot for his election campaign." },
                        { text: "Byerly is a former doctor who had a car accident and has become crippled." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did Byerly allow Quinn to test?",
                    answers: [
                        { text: "That Byerly's campaign does not use U.S. Robot's database." },
                        { text: "That he (Byerly) is not crippled." },
                        { text: "That he (Byerly) is not a robot." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "\"John\" is a mysterious person whom Byerly calls \"teacher\".",
                    answers: [
                        { text: "Yes" },
                        { text: "No" },
                        { text: "Not given" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did a protester challenge Byerly to do at the protest meeting?",
                    answers: [
                        { text: "A man challenges him to take a stand against Quinn's strategy" },
                        { text: "A man challenges him to hit him" },
                        { text: "A man challenges him to confess who \"John\" is" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "What does Calvin suspect about Byerly at the end of the chapter?",
                    answers: [
                        { text: "She suspects that Byerly is a robot created by \"John”." },
                        { text: "She suspects that Byerly is pretending to be a robot." },
                        { text: "She suspects that Byerly is \"John”." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Could Susan find out if Byerly was a robot or human?",
                    answers: [
                        { text: "She found out that Byerly was a robot." },
                        { text: "She found out that Byerly was human." },
                        { text: "No, she could not." }
                    ],
                    correctAnswer: "C"
                }
            ]} />

            <Typography.Title id='unit-9' className={styles.anchor} margin={true}>Unit 9. Chapter: "The Evitable Conflict"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> To analyze the implications of intelligent machines in society and to engage in critical discussion and reflection on technology's role in governance and ethical considerations.
            </Typography.Text>
            <Spacing />
            <Typography.Title>Pre-Reading Activities</Typography.Title>
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Think-Pair-Share: Governing with Machines</Typography.Title>
                    <ul>
                        <li>
                            "Do you think there will come a time when human society is governed by intelligent machines? Do you see any advantages in this possibility?"
                            <ul>
                                <li>
                                    <Typography.Span color='black'>Think:</Typography.Span> Individually write down your thoughts on the prompt for 3-5 minutes.
                                </li>
                                <li>
                                    <Typography.Span color='black'>Pair:</Typography.Span> Share your ideas with a partner, discussing potential advantages and disadvantages of machine governance.
                                </li>
                                <li>
                                    <Typography.Span color='black'>Share:</Typography.Span> Each pair shares a summary of their discussion with the class.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Group Brainstorm: Scenarios of Intelligent Machines</Typography.Title>
                    <ul>
                        <li>
                            In small groups, brainstorm potential scenarios where intelligent machines could govern or assist in governance. Consider:
                            <ul>
                                <li>Areas of governance (e.g., resource allocation, healthcare, education).</li>
                                <li>Possible outcomes (positive and negative).</li>
                            </ul>
                        </li>
                        <li>Each group presents one scenario to the class, encouraging questions and discussions.</li>
                    </ul>
                </li>
                <div style={{ marginLeft: -40 }}>
                    <Typography.Title>Post-Reading Activities</Typography.Title>
                </div>
                <Spacing />
                <li>
                    <Typography.Title>Group Discussion: Future Implications of Intelligent Machines</Typography.Title>
                    <ul>
                        <li>"What does this chapter, and the book as a whole, suggest about the future of intelligent machines for human society?"</li>
                        <li>
                            Facilitate a guided group discussion with the following questions:
                            <ul>
                                <li>How does Asimov portray the relationship between humans and intelligent machines?</li>
                                <li>What concerns does the text raise about reliance on technology?</li>
                                <li>Do you feel the book encourages or warns against free technological developments? How?</li>
                            </ul>
                        </li>
                        <li>Record key insights on a whiteboard or digital platform to visualize collective thoughts.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Quotation Analysis: Textual Support</Typography.Title>
                    <ul>
                        <li>
                            Assign each group a passage from the chapter. Each group should:
                            <ul>
                                <li>Analyze the passage's meaning and relevance to the theme of intelligent machines.</li>
                                <li>Discuss how it supports their view on whether the book encourages or warns against free technological developments.</li>
                            </ul>
                        </li>
                        <li>Groups present their analysis, quoting directly from the text to substantiate their arguments.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Reflection: Messages for the 21st Century</Typography.Title>
                    <ul>
                        <li>
                            Ask students to write a reflective piece (300-400 words) on:
                            <ul>
                                <li>The most important messages that "I, Robot" conveys about intelligent machines and their role in society.</li>
                                <li>How these messages relate to current technological advancements and societal challenges.</li>
                            </ul>
                        </li>
                        <li>Collect reflections for feedback, encouraging students to think critically about technology's impact on their lives.</li>
                    </ul>
                </li>
            </ol>
            <Typography.Title>Materials Needed:</Typography.Title>
            <ul className={styles.materials}>
                <li>Copies of "I, Robot" (Chapter: The Evitable Conflict)</li>
                <li>Paper and pens for reflection writing</li>
            </ul>
            <Typography.Title id="unit-91" className={styles.anchor} margin={true}>Check your grammar and vocabulary:</Typography.Title>
            <TestList options={[
                {
                    question: "What are the Machines' calculating circuits designed for?",
                    answers: [
                        { text: "To govern all aspects of human life" },
                        { text: "To maintain the human economy" },
                        { text: "To maintain the human health" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What does Byerly worry about?",
                    answers: [
                        { text: "Humans will bring harm to themselves" },
                        { text: "The machines may not work properly." },
                        { text: "The world has no unemployment" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did Byerly discover while interviewing the Regional Vice-Coordinators?",
                    answers: [
                        { text: "The coordinators encouraged Byerly to increase the production amount." },
                        { text: "The coordinators calculated the production amount and the cost." },
                        { text: "The coordinators downplayed the production problems." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What was Byerly's concern about the \"Society”?",
                    answers: [
                        { text: "Increased unemployment due to automatization will result in chaos." },
                        { text: "Humans will be under the surveillance of robots." },
                        { text: "A small group of powerful men will decide what is good and bad for all humans." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What, in Calvin's point-of-view, is inevitable?",
                    answers: [
                        { text: "The victory of humans over the Machines is inevitable." },
                        { text: "The Machines are inevitable." },
                        { text: "A war between the Machines and humanity is inevitable." }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "In nearly infinitesimal time, they have progressed beyond the possibility of detailed human control. What does \"infinitesimal\" mean in this sentence?",
                    answers: [
                        { text: "An extremely small amount." },
                        { text: "A certain period of time." },
                        { text: "An amount that is so large that it is without limits." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "It is incongruous to think of Asia as suffering from too much food. What does \"incongruous\" mean in this sentence?",
                    answers: [
                        { text: "In agreement with other facts or principles." },
                        { text: "Reasonable." },
                        { text: "Unusual or different from what is generally assumed." }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "How does Ngoma describe the Society of Humanity members?",
                    answers: [
                        { text: "Ingenious" },
                        { text: "Faithful" },
                        { text: "Crackpots" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "What country is said to be situated between the two \"major areas\" of The Northern Region?",
                    answers: [
                        { text: "Great Britain" },
                        { text: "The USA" },
                        { text: "The Soviet Union" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What was Calvin's answer to Byerley's worries about the \"Society”?",
                    answers: [
                        { text: "The Society will be able to circumvent the orders of the Machines." },
                        { text: "The Machines will outwit the Society members' attempts to thwart the Machines." },
                        { text: "The Machines will create intrigues among Society members." }
                    ],
                    correctAnswer: "B"
                }
            ]} />

        </>
    );
};

export default Body;