import { Button, ConfigProvider, Form, message, Radio, Space } from "antd";
import { CloseCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

import styles from './TestList.module.scss';

interface TestListProps {
    options: OptionProps[];
}

export interface OptionProps {
    question: string;
    answers: AnswerProps[];
    correctAnswer: string;
}

interface AnswerProps {
    text: string;
}

const radioValues = [
    'A', 'B', 'C', 'D'
]

const TestList: React.FC<TestListProps> = ({ options }) => {
    const [form] = Form.useForm();

    const formOnFinish = () => {
        message.success('All answers are correct');
    }

    return (
        <ConfigProvider theme={{
            token: {
                fontFamily: 'Roboto',
            }
        }}>
            <Form
                form={form}
                layout="vertical"
                requiredMark={false}
                scrollToFirstError
                onFinish={formOnFinish}
                className={styles["custom-form"]}
            >
                {options.map((option, optionIndex) => (
                    <Form.Item
                        key={`form-item-${optionIndex}`}
                        name={`radio-group-${optionIndex}`}
                        label={option.question}
                        rules={[
                            {
                                required: true,
                                message: <span><ExclamationCircleOutlined /> Жауабы жоқ</span>,
                                validateTrigger: ['onSubmit', 'onChange'],
                            },
                            {
                                validator(_, value) {
                                    if (value && value === option.correctAnswer) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(<span><CloseCircleOutlined style={{ color: 'red' }} /> Дұрыс емес</span>);
                                    }
                                },
                                validateTrigger: 'onSubmit'
                            }
                        ]}
                        validateFirst
                    >
                        <Radio.Group>
                            <Space direction="vertical">
                                {option.answers.map((answer, answerIndex) => (
                                    <Radio
                                        key={`option-${optionIndex}-answer-${answerIndex}`}
                                        value={radioValues[answerIndex]}
                                        style={{ borderColor: 'red' }}
                                    >
                                        {answer.text}
                                    </Radio>
                                ))}
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                ))}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Тексеру
                    </Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    )
}

export default TestList;