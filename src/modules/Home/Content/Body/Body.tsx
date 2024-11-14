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
                    In taking the course of “Professional English” for IT students, you are going to be assigned Isaac Asimov’s science fiction novel, “I, Robot” as one of our principal reading texts.  The novel was published in 1950 and is based on stories that Asimov had published in science fiction magazines between 1940 and 1950. These stories offer many speculative ideas on the future of robots in human society, including the “Three Laws of Robotics,” a concept that future science fiction writing, and criticism would frequently revisit.
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
                <Typography.Span>Learning Objective:</Typography.Span> to enhance comprehension and critical thinking through discussion, role-play, and analysis of the themes related to robots and technology presented in the “Introduction” and the chapter on “Robbie”.
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
                    question: "What is the opinion of Susan about robots? (1 Point)",
                    answers: [
                        { text: "Robots are creatures devoted to humanity." },
                        { text: "Robots are blasphemers." },
                        { text: "Robots are main competitors for human jobs." },
                        { text: "Robots must be created as non-vocal robots." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Why does George give in to the idea to take away Robbie? (1 Point)",
                    answers: [
                        { text: "Grace badgers George to get rid of Robbie." },
                        { text: "Robbie has broken the First Law of Robotics." },
                        { text: "Robbie has hurt Gloria." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "There was always the impulse to ____________ from her sight. (1 Point)",
                    answers: [
                        { text: "sneak away" },
                        { text: "sneak on" },
                        { text: "sneak up" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "It was the high-pitched sound of a woman who had the nervous tone of one ________ anxiety was beginning to overcome impatience. (1 Point)",
                    answers: [
                        { text: "by whom" },
                        { text: "with whom" },
                        { text: "in whom" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Who worked as a robopsychologist? (1 Point)",
                    answers: [
                        { text: "Susan" },
                        { text: "Alfred Lanning" },
                        { text: "Lawrence Robertson" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "If you _______ me the bare bones, Dr. Calvin, I can have Mr. Powell fill it in afterward. (1 Point)",
                    answers: [
                        { text: "would give" },
                        { text: "give" },
                        { text: "had given" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "Robbie always wins Gloria because Gloria is too little to overcome Robbie. (1 Point)",
                    answers: [
                        { text: "Robbie lets Gloria win." },
                        { text: "Robbie always wins Gloria because it has an installed program." },
                        { text: "Robbie and Gloria win each other in turn." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What calculation parameters did Susan learn? (1 Point)",
                    answers: [
                        { text: "For fixing the possible variables within the 'positronic brain'" },
                        { text: "For neurological systems" },
                        { text: "For identifying a brain hypertrophy" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "When did Alfred Lanning become director of research? (1 Point)",
                    answers: [
                        { text: "Before Susan joined U.S. Robot and Mechanical Men, Inc." },
                        { text: "After Susan joined U.S. Robot and Mechanical Men, Inc." },
                        { text: "They joined U.S. Robot and Mechanical Men, Inc. on the same day." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What did the U.S. Robots do to ensure the company’s survival? (1 Point)",
                    answers: [
                        { text: "New robot models were created." },
                        { text: "Robbie was taken back to the family." },
                        { text: "Mike Donovan worked on experimental designs." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Some little jigger will come loose and the awful thing will __________. (1 Point)",
                    answers: [
                        { text: "go berserk" },
                        { text: "berserk" },
                        { text: "completely berserk" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Susan observed ___________ (1 Point)",
                    answers: [
                        { text: "direction of human progress change and leap ahead." },
                        { text: "calculation parameters." },
                        { text: "positronic brain development." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Calculating machines in the mid-twentieth century were upset by… (1 Point)",
                    answers: [
                        { text: "Robertson and his positronic brain-paths" },
                        { text: "Robertson and his photocells" },
                        { text: "Robertson and his ideas on a size of human brain" }
                    ],
                    correctAnswer: "B"
                },
                {
                    question: "They said we do not show respect for God or religion. (1 Point)",
                    answers: [
                        { text: "faithful" },
                        { text: "pious" },
                        { text: "blasphemers" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "You _________ me back to the house, Robbie. (1 Point)",
                    answers: [
                        { text: "could have better carry" },
                        { text: "would better carry" },
                        { text: "had better carry" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "Gloria’s attitude to Robbie is… (1 Point)",
                    answers: [
                        { text: "demanding but she loves Robbie." },
                        { text: "feels hatred for Robbie." },
                        { text: "aggressive and demanding." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "His entire ‘mentality’ __________for the purpose. (1 Point)",
                    answers: [
                        { text: "has been created" },
                        { text: "has created" },
                        { text: "is been created" }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "What were Gloria and Robbie doing as the chapter starts? (1 Point)",
                    answers: [
                        { text: "They were playing hide-and-seek." },
                        { text: "Robbie was running to the welcome bark of home-tree." },
                        { text: "Gloria was going to spank Robbie." }
                    ],
                    correctAnswer: "A"
                },
                {
                    question: "Let’s not go off the deep end. This expression means… (1 Point)",
                    answers: [
                        { text: "discuss generally not in detail" },
                        { text: "discuss every detail" },
                        { text: "get very angry about something" }
                    ],
                    correctAnswer: "C"
                },
                {
                    question: "She protected herself _________ a world. (1 Point)",
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
                <Typography.Span>Objective:</Typography.Span> To engage students in critical thinking and collaborative discussion while exploring the themes and implications of Chapter "Runaround" in "I, Robot."
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
                Divide the class into two groups: one supporting the statement and the other opposing it. Prepare arguments based on the chapter and related real-world examples. After the debate, reflect on how the chapter’s events relate to your position.
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
            <ol className={styles.check_list}>
                <li>
                    Which variant is correct? (1 Point)
                    <ol type='A'>
                        <li>“Because I want Speedy back, nitwit.”</li>
                        <li>“Because I want Speedy to back, nitwit.”</li>
                        <li>“Because I want to Speedy back, nitwit.”</li>
                        <li>“Because I want for Speedy back, nitwit.”</li>
                    </ol>
                </li>
                <li>
                    Why was Speedy running around not far from the selenium pool? (1 Point)
                    <ol type='A'>
                        <li>Speedy had forgotten the order</li>
                        <li>Speedy got mad gibbering some texts</li>
                        <li>Speedy was caught between conflicting directives of the First and Third Laws</li>
                        <li>Speedy was caught between conflicting directives of the Second and Third Laws</li>
                    </ol>
                </li>
                <li>
                    Mercury has long been the planet of [bad luck] of the System. Which word is the best to replace the word in the brackets? (1 Point)
                    <ol type='A'>
                        <li>jinx</li>
                        <li>gibberish</li>
                        <li>snarl</li>
                        <li>disfunction</li>
                    </ol>
                </li>
                <li>
                    Which variant is the best? (1 Point)
                    <ol type='A'>
                        <li>But he daren’t get too close.</li>
                        <li>But he daren’t to get too close.</li>
                        <li>But he daren’t getting too close.</li>
                    </ol>
                </li>
                <li>
                    Which word was used in the gap “All six of them surrounded by_________ packing cases of uncertain content.”? (1 Point)
                    <ol type='A'>
                        <li>fragrant</li>
                        <li>fresh</li>
                        <li>dusty</li>
                        <li>musty</li>
                    </ol>
                </li>
                <li>
                    How did Powell remove Speedy’s conflict? (1 Point)
                    <ol type='A'>
                        <li>Speedy was forced to break the First Law</li>
                        <li>Powell was purposely going too far from safety for him to be able to return without Speedy’s help</li>
                        <li>Donovan installed a new programme which allowed Speedy to bring selenium</li>
                    </ol>
                </li>
                <li>
                    Which grammatical form is the best? (1 Point)
                    <ol type='A'>
                        <li>If he did not wish to, you are to bring him back by force</li>
                        <li>If he does not wish to, you are to bring him back by force.</li>
                        <li>If he will not wish to, you are to bring him back by force</li>
                        <li>If he does not wish to, you were to bring him back by force</li>
                    </ol>
                </li>
                <li>
                    What does “as simply as a syllogism” mean? (1 Point)
                    <ol type='A'>
                        <li>nonsense</li>
                        <li>functional</li>
                        <li>straightforward</li>
                    </ol>
                </li>
                <li>
                    How did Donavan plot the results of tracking Speedy’s location on the map? (1 Point)
                    <ol type='A'>
                        <li>put up the ultrawave equipment</li>
                        <li>located the body signal in the shortwave</li>
                        <li>located Speedy by radio</li>
                    </ol>
                </li>
                <li>
                    The general albedo of Mercury is low. “Albedo” means… (1 Point)
                    <ol type='A'>
                        <li>sensors</li>
                        <li>the darkest substance</li>
                        <li>incident light that is reflected by a surface, typically that of a planet or moon</li>
                        <li>properties of surface</li>
                    </ol>
                </li>
                <li>
                    How did Donovan and Powell make Speedy bring some selenium? (1 Point)
                    <ol type='A'>
                        <li>They installed in Speedy Second Law orders firm enough to counteract any Third Law</li>
                        <li>They put an insosuit on Speedy to protect him from the ultra-wave</li>
                        <li>Speedy could not bring selenium as he was programmed not to violate the Three Laws</li>
                    </ol>
                </li>
                <li>
                    “And for the first time Powell’s artificial [CALMNESS] was shaken.” Which word is the best to replace the word in the brackets? (1 Point)
                    <ol type='A'>
                        <li>gibberish</li>
                        <li>snarl</li>
                        <li>aplomb</li>
                        <li>disuseon</li>
                    </ol>
                </li>
                <li>
                    Most of the soil is gray pumice. “Pumice” means… (1 Point)
                    <ol type='A'>
                        <li>eruption</li>
                        <li>bubbles</li>
                        <li>a very light and porous volcanic rock</li>
                        <li>foam</li>
                    </ol>
                </li>
                <li>
                    Why did Powell and Donovan need selenium? (1 Point)
                    <ol type='A'>
                        <li>to create photocell banks</li>
                        <li>to create a selenium pool</li>
                        <li>to conduct an experiment</li>
                    </ol>
                </li>
                <li>
                    What did Powell and Donovan send Speedy for? (1 Point)
                    <ol type='A'>
                        <li>for selenium</li>
                        <li>for measuring the size of the selenium pool</li>
                        <li>for checking the distance between Mercury and the Space station</li>
                    </ol>
                </li>
                <li>
                    “These junk heaps are only geared to one speed. Do you think they’re equipped with selective flexors?” (1 Point)
                    <ol type='A'>
                        <li>a flexible insulated cable used for carrying electric current to an appliance.</li>
                        <li>any of a number of specific muscles in the arm, hand, leg, or foot.</li>
                        <li>the action or state of flexing</li>
                        <li>cause a muscle to stand out by contracting or tensing it</li>
                    </ol>
                </li>
            </ol>
            <Typography.Title id='unit-3' className={styles.anchor} margin={true}>Unit 3. Chapter "Reason"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Objective:</Typography.Span> To engage students in critical thinking about artificial intelligence and its implications through discussion and collaborative analysis of Chapter "Reason" from "I, Robot."
            </Typography.Text>
            <ol className={styles.lesson_list}>
                <li>
                    <Typography.Title>Pre-Reading Activity (20 minutes): Dilemma Discussion.</Typography.Title>
                    <ul>
                        <li>"How would you solve the dilemma Cutie had?"</li>
                        <li>Encourage them to think about the nature of intelligence, authority, and the definition of reality as presented in the chapter.</li>
                        <Typography.Text>Have students form small groups of 3-4 and share their solutions to the dilemma. Each group should discuss:</Typography.Text>
                        <li>The different perspectives on how to resolve Cutie’s conflict.</li>
                        <li>The implications of their proposed solutions on human-robot interactions.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Post-Reading Discussion (30 minutes): Historical Quote Analysis:</Typography.Title>
                    <ul>
                        <li>Write René Descartes' famous quote, "I think, therefore I am," and Cutie’s adaptation, "I, myself, exist, because I think," on the board.</li>
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
            <ol className={styles.check_list}>
                <li>
                    Who is/are the Prophet/s of robots? (1 Point)
                    <ol type='A'>
                        <li>humans</li>
                        <li>an Energy Converter</li>
                        <li>Powell and Donovan</li>
                    </ol>
                </li>
                <li>
                    Powell was speaking while struggling _________ his lightweight space jacket. (1 Point)
                    <ol type='A'>
                        <li>into</li>
                        <li>with</li>
                        <li>of</li>
                    </ol>
                </li>
                <li>
                    Cutie continued imperturbably. “Imperturbably” implies: (1 Point)
                    <ol type='A'>
                        <li>unable to be upset or excited</li>
                        <li>excitable</li>
                        <li>edgy</li>
                    </ol>
                </li>
                <li>
                    Who do other robots obey? (1 Point)
                    <ol type='A'>
                        <li>Cutie</li>
                        <li>Powell and Donovan</li>
                        <li>humans</li>
                    </ol>
                </li>
                <li>
                    What danger is approaching the Earth? (1 Point)
                    <ol type='A'>
                        <li>robots have started violating the Three Laws</li>
                        <li>the energy beam</li>
                        <li>an electron storm</li>
                    </ol>
                </li>
                <li>
                    It is enough to blast hundreds of square miles of Earth into _______________ ruin. (1 Point)
                    <ol type='A'>
                        <li>Incandescently</li>
                        <li>Incandescent</li>
                        <li>Ardent</li>
                    </ol>
                </li>
                <li>
                    What is the argument of Cutie against Powell and Donovan? (1 Point)
                    <ol type='A'>
                        <li>Powell and Donovan have made adjustments against an electron storm</li>
                        <li>Powell and Donovan have only assembled robots but not created them</li>
                        <li>They can install a new program in robots</li>
                    </ol>
                </li>
                <li>
                    What did Powell point out in the argument with Cutie? (1 Point)
                    <ol type='A'>
                        <li>that Cutie has violated the Third Law</li>
                        <li>that humans have created robots</li>
                        <li>Robots are always to obey human orders no matter what robots believe to</li>
                    </ol>
                </li>
                <li>
                    “Give vent to” means: (1 Point)
                    <ol type='A'>
                        <li>a ventilation system that provides air, gas or liquid go through</li>
                        <li>discharge or expel (air, gas, or liquid) through an outlet</li>
                        <li>give free expression to (a strong emotion)</li>
                    </ol>
                </li>
                <li>
                    Powell’s weary eyes rested upon him _________ (1 Point)
                    <ol type='A'>
                        <li>enviously</li>
                        <li>envious of</li>
                        <li>enviousness</li>
                    </ol>
                </li>
                <li>
                    What do supple fingers mean? (1 Point)
                    <ol type='A'>
                        <li>obstinate</li>
                        <li>flexible</li>
                        <li>stiff</li>
                    </ol>
                </li>
                <li>
                    “I have spent these last two days in concentrated introspection.” What does the concentrated introspection imply? (1 Point)
                    <ol type='A'>
                        <li>talked about introspective ideas</li>
                        <li>focused on contemplation</li>
                        <li>dealt with some perspectives</li>
                    </ol>
                </li>
                <li>
                    What does Cutie not believe in? (1 Point)
                    <ol type='A'>
                        <li>robots can violate the Second Law</li>
                        <li>humans created robots</li>
                        <li>humans are going to dismantle Cutie</li>
                    </ol>
                </li>
                <li>
                    As a matter of fact, it accounts _____ his refusal to obey us. (1 Point)
                    <ol type='A'>
                        <li>of</li>
                        <li>in</li>
                        <li>for</li>
                    </ol>
                </li>
                <li>
                    Donovan __________ his glassine visor and scowled. (1 Point)
                    <ol type='A'>
                        <li>unclasped</li>
                        <li>fastened</li>
                        <li>tightened</li>
                    </ol>
                </li>
            </ol>
            <Typography.Title id='unit-4' className={styles.anchor} margin={true}>Unit 4. Chapter: "Catch That Rabbit"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning Objective:</Typography.Span> to engage students in critical thinking and discussion around the themes of workplace policies, robot development, and social implications, fostering skills in analysis and collaboration.
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
                                <li>Engineer: Concerned about the robot’s behavior and performance.</li>
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
                                <li>The relevance of these themes in today’s technological landscape.</li>
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
            <ol className={styles.check_list}>
                <li>
                    Smooth and perfect as the luminiferous ether. What does ‘the luminiferous ether’ mean? (1 Point)
                    <ol type='A'>
                        <li>to go to sleep</li>
                        <li>to be like the moonlight</li>
                        <li>to strike a match</li>
                    </ol>
                </li>
                <li>
                    What kind of problem does the DV-5 robot have? (1 Point)
                    <ol type='A'>
                        <li>Starts marching subrobots in drills</li>
                        <li>Starts arguing with Donovan and Powell about the Creator</li>
                        <li>Starts mining nonstop</li>
                        <li>Starts talking about religion</li>
                    </ol>
                </li>
                <li>
                    They’ve gone jingo on us, Greg. What does ‘jingo on someone’ mean? (1 Point)
                    <ol type='A'>
                        <li>to be patriotic</li>
                        <li>to have an unusual food</li>
                        <li>to win at a game</li>
                    </ol>
                </li>
                <li>
                    The subsidiary robots broke formation, waited a moment, then clattered off into the distance — very rapidly. What does ‘to clatter off’ mean? (1 Point)
                    <ol type='A'>
                        <li>to climb a hill</li>
                        <li>to run away</li>
                        <li>to make a metallic racket</li>
                    </ol>
                </li>
                <li>
                    U. S. Robots had to get the bugs out of the multiple robots. What does ‘get the bugs out of’ mean? (1 Point)
                    <ol type='A'>
                        <li>to inoculate the robots</li>
                        <li>to fix robots</li>
                        <li>to run away from the robots</li>
                    </ol>
                </li>
                <li>
                    You’ve watched that robot group for three shifts, you redhead. What does ‘redhead’ mean? (1 Point)
                    <ol type='A'>
                        <li>someone stupid</li>
                        <li>someone who is impulsive</li>
                        <li>a person with ginger hair</li>
                    </ol>
                </li>
                <li>
                    What problem did Powell and Donovan find out with the DV-5? (1 Point)
                    <ol type='A'>
                        <li>The subrobots stop obeying Dave</li>
                        <li>Situations with personal initiatives cause a problem</li>
                        <li>Dave makes tricks with Powell and Donovan</li>
                    </ol>
                </li>
                <li>
                    What did Powell do with one of the subrobots? (1 Point)
                    <ol type='A'>
                        <li>He shot one of the subrobots</li>
                        <li>He ordered Dave to shoot one of the robots</li>
                        <li>Powell talked with the five subrobots to find out the problem that had one subrobot</li>
                    </ol>
                </li>
                <li>
                    “What I want to know,” said Donovan, in sudden savagery, “is why we’re always tangled up with new-type robots. What does ‘to tangle up with’ mean? (1 Point)
                    <ol type='A'>
                        <li>To go on vacation</li>
                        <li>To work with ropes</li>
                        <li>To become involved with</li>
                    </ol>
                </li>
                <li>
                    What is the mission of Donovan and Powell coming to the asteroid? (1 Point)
                    <ol type='A'>
                        <li>To fix the headrobot’s program</li>
                        <li>To test a mining robot</li>
                        <li>To transfer other six robots to the asteroid</li>
                    </ol>
                </li>
                <li>
                    What did Powell and Donovan decide to create without Dave knowing? (1 Point)
                    <ol type='A'>
                        <li>Made Dave go marching off with his subrobots</li>
                        <li>Left Dave trapped</li>
                        <li>Created an emergency to watch what happens then</li>
                    </ol>
                </li>
                <li>
                    It’s about time you got the red tape out of your pants. What does ‘get the red tape out of your pants’ mean? (1 Point)
                    <ol type='A'>
                        <li>to chill out</li>
                        <li>to fix a conductor line</li>
                        <li>to change the tape color</li>
                    </ol>
                </li>
                <li>
                    Who resumes the tale and what was the resume? (1 Point)
                    <ol type='A'>
                        <li>Donovan, he resumed that Dave should be been taken apart of some errors in programming</li>
                        <li>Powell, he figured out that a special coordinating circuit was needed to solve the problem Dave had</li>
                        <li>Calvin, there was once a robot that had “gone wrong” on her watch</li>
                    </ol>
                </li>
                <li>
                    But the job belongs to us and not to anyone else so we’re on the spot, Mike. What does ‘be on the spot’ mean? (1 Point)
                    <ol type='A'>
                        <li>to be in the right place or moment</li>
                        <li>to know how to do something</li>
                        <li>to be in a hole</li>
                    </ol>
                </li>
                <li>
                    But don’t get me wrong. What does ‘get smb/smth wrong’ mean? (1 Point)
                    <ol type='A'>
                        <li>Do not confuse me</li>
                        <li>Do not misunderstand me</li>
                        <li>Do not bring me a wrong instrument</li>
                    </ol>
                </li>
            </ol>
            <Typography.Title id='unit-5' className={styles.anchor} margin={true}>Unit 5. Chapter: "Liar!"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> to engage students in critical thinking about artificial intelligence, ethics, and workplace relationships through discussion and collaborative analysis of Chapter "Liar!" from "I, Robot."
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
            <ol className={styles.check_list}>
                <li>
                    What did the U.S. Robots create? (1 Point)
                    <ol type='A'>
                        <li>QT, a robot that has a religious viewpoint</li>
                        <li>DV-5, a robot that can rule other subrobots</li>
                        <li>RB-34 (Herbie), a robot that can read minds</li>
                    </ol>
                </li>
                <li>
                    He does triple integrals in his head and eats up tensor analysis for dessert.” What does “tensor analysis” mean? (1 Point)
                    <ol type='A'>
                        <li>a deep analysis</li>
                        <li>tightening a muscle</li>
                        <li>a strength of a robot thinking</li>
                    </ol>
                </li>
                <li>
                    What did Calvin realize about Herbie? (1 Point)
                    <ol type='A'>
                        <li>Herbie has been lying to them because it was following the First Law of Robotics</li>
                        <li>Herbie told people stories to hurt the humans</li>
                        <li>Herbie did not like to question him and he lied to each person</li>
                    </ol>
                </li>
                <li>
                    What was the mission of a group of scientists who were assigned a new type of robot? (1 Point)
                    <ol type='A'>
                        <li>to test the robot mind</li>
                        <li>to find out how the mind reading has changed the robot</li>
                        <li>to test a robot to be sent to an asteroid</li>
                    </ol>
                </li>
                <li>
                    Your science is just a mass of collected data plastered together by makeshift theory. What does “makeshift theory” mean? (1 Point)
                    <ol type='A'>
                        <li>a temporary theory</li>
                        <li>part of a car</li>
                        <li>something made of wood</li>
                    </ol>
                </li>
                <li>
                    What did Herbie tell Bogert about his director? (1 Point)
                    <ol type='A'>
                        <li>Lanning has retired and has put Bogert in charge</li>
                        <li>Lanning is no longer the boss</li>
                        <li>Lanning is going to question some of Bogert’s calculations</li>
                    </ol>
                </li>
                <li>
                    “Well, then,” Bogert shouted, “let that clockwork contraption solve the entire problem for you. Why bother with nonessentials?” What does “clockwork contraption” mean? (1 Point)
                    <ol type='A'>
                        <li>a mechanism</li>
                        <li>a trap system</li>
                        <li>a software programme</li>
                    </ol>
                </li>
                <li>
                    What did Herbie lie about to Calvin? (1 Point)
                    <ol type='A'>
                        <li>Ashe loves Calvin</li>
                        <li>Ashe’s cousin loves Calvin</li>
                        <li>Ashe does not love Calvin as he has another beloved woman</li>
                    </ol>
                </li>
                <li>
                    Lanning grinned too. What does “to grin” mean? (1 Point)
                    <ol type='A'>
                        <li>to smile in support</li>
                        <li>to be sad</li>
                        <li>to get angry</li>
                    </ol>
                </li>
                <li>
                    “It’s still a lulu of a job.” What does “a lulu of…” mean? (1 Point)
                    <ol type='A'>
                        <li>a difficult situation</li>
                        <li>a kind of recipe</li>
                        <li>a moot point</li>
                    </ol>
                </li>
                <li>
                    What about deflation of one’s ego? What does “deflation of ego” mean? (1 Point)
                    <ol type='A'>
                        <li>to get drunk</li>
                        <li>to feel very important</li>
                        <li>to lose one’s self-pride</li>
                    </ol>
                </li>
                <li>
                    He does triple integrals in his head and eats up tensor analysis for dessert.” What does “tensor analysis” mean? (1 Point)
                    <ol type='A'>
                        <li>tightening a muscle</li>
                        <li>a deep analysis</li>
                        <li>a strength of a robot thinking</li>
                    </ol>
                </li>
                <li>
                    Ashe continued briskly, putting away his pencil. What does “briskly” mean? (1 Point)
                    <ol type='A'>
                        <li>Being aggressive</li>
                        <li>Being soft</li>
                        <li>Being rapid</li>
                    </ol>
                </li>
                <li>
                    What did Calvin resume in the end of the tale? (1 Point)
                    <ol type='A'>
                        <li>Making robots reading minds throws them into an impossible conflict</li>
                        <li>Something went wrong in the assembly of Herbie that made it able to read minds</li>
                        <li>The robots collapse when either action will cause harm to humans</li>
                    </ol>
                </li>
                <li>
                    The inexpertly applied rouge made a pair of nasty red splotches upon her chalk-white face. What does “an inexpertly applied rouge” mean? (1 Point)
                    <ol type='A'>
                        <li>done with pliers</li>
                        <li>infected skin</li>
                        <li>not correctly done make up</li>
                    </ol>
                </li>
                <li>
                    Her voice, emerging in dry sobs, choked into silence. What does “to choke into silence” mean? (1 Point)
                    <ol type='A'>
                        <li>to turn off the radio</li>
                        <li>to stop</li>
                        <li>to shift gears</li>
                    </ol>
                </li>
            </ol>
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
                                    <Typography.Span color='black'>Step 1:</Typography.Span> Research and estimate the cost of a similar robot in today’s market. Discuss as a class the factors that might influence this cost.
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
            <ol className={styles.check_list}>
                <li>
                    How has Nestor 10 hidden itself? (1 Point)
                    <ol type='A'>
                        <li>It left for Mars.</li>
                        <li>It disappeared in the space.</li>
                        <li>It made itself indistinguishable.</li>
                    </ol>
                </li>
                <li>
                    Susan and Peter were called (1 Point)
                    <ol type='A'>
                        <li>To identify a missing system in NS robots</li>
                        <li>To identify the error in a Nestor robot</li>
                        <li>To identify a missing robot</li>
                    </ol>
                </li>
                <li>
                    Choose the correct variant. (1 Point)
                    <ol type='A'>
                        <li>Nor did Dr. Bogert’s sleek paleness abandon a certain hangdog attitude. Nor Major-general Kallner, who headed the project, even once forgets to maintain a hunted expression.</li>
                        <li>Nor Dr. Bogert’s sleeked paleness abandon a certain hangdog attitude. Nor Major-general Kallner, who headed the project, even once forgot to maintain a hunted expression.</li>
                        <li>Nor did Dr. Bogert’s sleek paleness abandon a certain hangdog attitude. Nor did Major-general Kallner, who headed the project, even once forget to maintain a hunted expression.</li>
                    </ol>
                </li>
                <li>
                    How many tests did Susan arrange to flush out Nestor 10? (1 Point)
                    <ol type='A'>
                        <li>Two</li>
                        <li>Three</li>
                        <li>Four</li>
                    </ol>
                </li>
                <li>
                    She spoke cajolingly, “Now we’re getting somewhere, Mr. Black. our choice. Which word among the given options is not synonymous with “cajole”? (1 Point)
                    <ol type='A'>
                        <li>Coax</li>
                        <li>Cajeput</li>
                        <li>Wheedle</li>
                        <li>Inveigle</li>
                    </ol>
                </li>
                <li>
                    Nestor 10 had no reason ___________________ in this testing. Choose the best option. (1 Point)
                    <ol type='A'>
                        <li>to beat a path through the examination</li>
                        <li>to jump for the bait</li>
                        <li>to beat around the bush</li>
                    </ol>
                </li>
                <li>
                    Surely we can _______ a robot without resigning, or imprisoning people. Choose the best option to complete the sentence. (1 Point)
                    <ol type='A'>
                        <li>Outshine</li>
                        <li>Outscore</li>
                        <li>Outwit</li>
                    </ol>
                </li>
                <li>
                    “Hangdog” on page 3 means... (1 Point)
                    <ol type='A'>
                        <li>unhappy or ashamed, especially because of feeling guilty.</li>
                        <li>a large building in which aircraft are kept</li>
                        <li>to be calm and relaxed</li>
                    </ol>
                </li>
                <li>
                    “So that the sixty-third, I take it, is the missing prodigal?” ‘Prodigal’ means (1 Point)
                    <ol type='A'>
                        <li>someone who spends or uses large amounts of money, time, energy, etc., especially in a way that is not very wise</li>
                        <li>an act of pushing something or someone with your finger or with a pointed object</li>
                        <li>someone who returns to a place, organization, team, etc. after previously leaving it</li>
                    </ol>
                </li>
                <li>
                    Susan and Peter were called to…. (1 Point)
                    <ol type='A'>
                        <li>The Planet</li>
                        <li>The Space-Stations</li>
                        <li>Hyper Base</li>
                    </ol>
                </li>
                <li>
                    Choose the correct variant. (1 Point)
                    <ol type='A'>
                        <li>Dr. Calvin, we either had to do without robots, or do something about the First Law — and we made our choice.</li>
                        <li>Dr. Calvin, we neither had to do without robots, or do something about the First Law — and we made our choice.</li>
                        <li>Dr. Calvin, we either had to do without robots, nor do something about the First Law — and we made.</li>
                    </ol>
                </li>
                <li>
                    Calvin felt she could not face the ordeal for a third time. “Ordeal”, in this text, means: (1 Point)
                    <ol type='A'>
                        <li>a very unpleasant and painful or difficult experience</li>
                        <li>harsh lesson</li>
                        <li>calibrate</li>
                    </ol>
                </li>
                <li>
                    Who has made a mistake in wiring a robot’s brain (1 Point)
                    <ol type='A'>
                        <li>Peter Borget</li>
                        <li>Major-general Kallner</li>
                        <li>Gerald Black</li>
                    </ol>
                </li>
                <li>
                    What was the reaction of Nestor 10 when Susan had identified him? (1 Point)
                    <ol type='A'>
                        <li>It argued with Susan</li>
                        <li>It attacked Susan</li>
                        <li>It gave up</li>
                    </ol>
                </li>
                <li>
                    “Would you look over them and see if I haven’t been libelous?” “libelous” implies: (1 Point)
                    <ol type='A'>
                        <li>a piece of writing that contains bad and false statements about a person</li>
                        <li>an amount of alcoholic drink poured out or drunk in honor of a god or a dead relation</li>
                        <li>an occasion when something or someone is released or made free</li>
                    </ol>
                </li>
            </ol>
            <Typography.Title id='unit-7' className={styles.anchor} margin={true}>Unit 7. Chapter: "Escape!"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> to engage students in discussions about corporate competition, collaboration, and ethical considerations in the tech industry and develop critical thinking and communication skills through collaborative activities.
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
            <ol className={styles.check_list}>
                <li>
                    What appeal does Consolidated Robots have for US Robots? (1 Point)
                    <ol type='A'>
                        <li>They want to build a hyperspace drive for humans.</li>
                        <li>They need help of Susan Calvin.</li>
                        <li>They need a mechanical specialist.</li>
                    </ol>
                </li>
                <li>
                    Why does the creation of a hyperspace drive for humans pose a problem? (1 Point)
                    <ol type='A'>
                        <li>Consolidated Robots cannot compete with US Robots.</li>
                        <li>Consolidated Robots does not have a professional psychologist like Susan Calvin.</li>
                        <li>It brings the First Law and Second Law into conflict.</li>
                    </ol>
                </li>
                <li>
                    What special assets make US Robots the envy of other companies? (1 Point)
                    <ol type='A'>
                        <li>The Government budget allocated to US Robots.</li>
                        <li>The Brain.</li>
                        <li>Dr. Susan Calvin.</li>
                    </ol>
                </li>
                <li>
                    What is “The Brain” equipped with? (1 Point)
                    <ol type='A'>
                        <li>A three-law circuitry.</li>
                        <li>An installed super thinking program.</li>
                        <li>A personality.</li>
                    </ol>
                </li>
                <li>
                    Why does Calvin think that “The Brain” will be resilient? (1 Point)
                    <ol type='A'>
                        <li>It is made of strong metal.</li>
                        <li>It has an extra Law “To protect itself”.</li>
                        <li>It has an emotional circuitry.</li>
                    </ol>
                </li>
                <li>
                    The Brain is not afraid of taking challenges. (1 Point)
                    <ol type='A'>
                        <li>Not given</li>
                        <li>False</li>
                        <li>True</li>
                    </ol>
                </li>
                <li>
                    What was the promise of The Brain? (1 Point)
                    <ol type='A'>
                        <li>To create other robots.</li>
                        <li>To build a ship.</li>
                        <li>To protect humans.</li>
                    </ol>
                </li>
                <li>
                    What happens to Powell and Donovan during the interstellar job? (1 Point)
                    <ol type='A'>
                        <li>They sent a message about their success.</li>
                        <li>They go into hypersleep.</li>
                        <li>They died temporarily.</li>
                    </ol>
                </li>
                <li>
                    Why was The Brain able to build the ship if it caused human death? (1 Point)
                    <ol type='A'>
                        <li>Calvin reprogrammed The Brain.</li>
                        <li>The Brain is made of strong metal.</li>
                        <li>The Brain went rogue and broke the protocol.</li>
                    </ol>
                </li>
            </ol>
            <Typography.Title id='unit-8' className={styles.anchor} margin={true}>Unit 8. Chapter: "Evidence"v</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span> to critically analyze the implications of artificial intelligence through discussion and creative writing and to enhance students' skills in argumentation and scenario development.
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
                    <Typography.Title>Creative Writing: Byerly’s Campaign for Mayor</Typography.Title>
                    <ul>
                        <li>"Develop a scenario about Byerly’s campaign for mayor. Does he succeed or not? Why, or why not?"</li>
                        <li>
                            In small groups, students brainstorm and outline a creative scenario for Byerly's campaign, considering:
                            <ul>
                                <li>The challenges he might face as a candidate influenced by AI.</li>
                                <li>The reactions of the public and political rivals to his use of AI.</li>
                                <li>Possible ethical dilemmas and public perceptions of AI in governance.</li>
                            </ul>
                        </li>
                        <li>After outlining, students write a short narrative (1-2 paragraphs) about the campaign’s outcome, including key events and decisions.</li>
                    </ul>
                </li>
                <li>
                    <Typography.Title>Class Presentation: Campaign Scenarios</Typography.Title>
                    <ul>
                        <li>
                            Each group presents their creative scenario to the class.
                            <ul>
                                <li>Encourage them to explain the reasoning behind Byerly’s success or failure and how AI played a role in their narrative.</li>
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
            <ol className={styles.check_list}>
                <li>
                    What political developments does Calvin discuss? (1 Point)
                    <ol type='A'>
                        <li>Political structure of U.S. Robots</li>
                        <li>HR strategy of U.S. Robots</li>
                        <li>Political structure of countries</li>
                    </ol>
                </li>
                <li>
                    What does Francis Quinn argue to Lanning? (1 Point)
                    <ol type='A'>
                        <li>Byerly is a robot.</li>
                        <li>Byerly uses data of U.S. Robot for his election campaign.</li>
                        <li>Byerly is a former doctor who had a car accident and has become crippled.</li>
                    </ol>
                </li>
                <li>
                    What did Byerly allow Quinn to test? (1 Point)
                    <ol type='A'>
                        <li>That Byerly’s campaign does not use U.S. Robot’s database</li>
                        <li>That he (Byerly) is not crippled</li>
                        <li>That he (Byerly) is not a robot</li>
                    </ol>
                </li>
                <li>
                    “John” is a mysterious person whom Byerly calls “teacher”. (1 Point)
                    <ol type='A'>
                        <li>Yes</li>
                        <li>No</li>
                        <li>Not given</li>
                    </ol>
                </li>
                <li>
                    What did a protester challenge Byerly to do at the protest meeting? (1 Point)
                    <ol type='A'>
                        <li>A man challenges him to take a stand against Quinn’s strategy</li>
                        <li>A man challenges him to hit him</li>
                        <li>A man challenges him to confess who “John” is</li>
                    </ol>
                </li>
                <li>
                    What does Calvin suspect about Byerly at the end of the chapter? (1 Point)
                    <ol type='A'>
                        <li>She suspects that Byerly is a robot created by “John”</li>
                        <li>She suspects that Byerly is pretending to be a robot</li>
                        <li>She suspects that Byerly is “John.”</li>
                    </ol>
                </li>
                <li>
                    Could Susan find out if Byerly was a robot or human? (1 Point)
                    <ol type='A'>
                        <li>She found out that Byerly was a robot.</li>
                        <li>She found out that Byerly was human.</li>
                        <li>No, she could not.</li>
                    </ol>
                </li>
            </ol>
            <Typography.Title id='unit-9' className={styles.anchor} margin={true}>Unit 9. Chapter: "The Evitable Conflict"</Typography.Title>
            <Typography.Text>
                <Typography.Span>Learning objectives:</Typography.Span>to analyze the implications of intelligent machines in society and to engage in critical discussion and reflection on technology's role in governance and ethical considerations.
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
            <ol className={styles.check_list}>
                <li>
                    What are the Machines’ calculating circuits designed for? (1 Point)
                    <ol type='A'>
                        <li>To govern all aspects of human life</li>
                        <li>To maintain the human economy</li>
                        <li>To maintain human health</li>
                    </ol>
                </li>
                <li>
                    What does Byerly worry about? (1 Point)
                    <ol type='A'>
                        <li>Humans will bring harm to themselves</li>
                        <li>The machines may not work properly</li>
                        <li>The world has no unemployment</li>
                    </ol>
                </li>
                <li>
                    What did Byerly discover while interviewing the Regional Vice-Coordinators? (1 Point)
                    <ol type='A'>
                        <li>The coordinators encouraged Byerly to increase the production amount</li>
                        <li>The coordinators calculated the production amount and the cost</li>
                        <li>The coordinators downplayed the production problems</li>
                    </ol>
                </li>
                <li>
                    What was Byerly’s concern about the “Society”? (1 Point)
                    <ol type='A'>
                        <li>Increased unemployment due to automatization will result in chaos</li>
                        <li>Humans will be under the surveillance of robots</li>
                        <li>A small group of powerful men will decide what is good and bad for all humans</li>
                    </ol>
                </li>
                <li>
                    What, in Calvin’s point-of-view, is inevitable? (1 Point)
                    <ol type='A'>
                        <li>The victory of humans over the Machines is inevitable</li>
                        <li>The Machines are inevitable</li>
                        <li>A war between the Machines and humanity is inevitable</li>
                    </ol>
                </li>
                <li>
                    “In nearly infinitesimal time, they have progressed beyond the possibility of detailed human control.” What does “infinitesimal” mean in this sentence? (1 Point)
                    <ol type='A'>
                        <li>An extremely small amount</li>
                        <li>A certain period of time</li>
                        <li>An amount that is so large that it is without limits</li>
                    </ol>
                </li>
                <li>
                    “It is incongruous to think of Asia as suffering from too much food.” What does “incongruous” mean in this sentence? (1 Point)
                    <ol type='A'>
                        <li>In agreement with other facts or principles</li>
                        <li>Reasonable</li>
                        <li>Unusual or different from what is generally assumed</li>
                    </ol>
                </li>
                <li>
                    How does Ngoma describe the Society of Humanity members? (1 Point)
                    <ol type='A'>
                        <li>Ingenious</li>
                        <li>Faithful</li>
                        <li>Crackpots</li>
                    </ol>
                </li>
                <li>
                    What country is said to be situated between the two “major areas” of The Northern Region? (1 Point)
                    <ol type='A'>
                        <li>Great Britain</li>
                        <li>The USA</li>
                        <li>The Soviet Union</li>
                    </ol>
                </li>
                <li>
                    What was Calvin’s answer to Byerley’s worries about the “Society”? (1 Point)
                    <ol type='A'>
                        <li>The Society will be able to circumvent the orders of the Machines</li>
                        <li>The Machines will outwit the Society members’ attempts to thwart the Machines</li>
                        <li>The Machines will create intrigues among Society members</li>
                    </ol>
                </li>
            </ol>
            <Spacing count={10} />
        </>
    );
};

export default Body;