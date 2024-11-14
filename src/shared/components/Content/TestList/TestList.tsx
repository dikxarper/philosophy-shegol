import { Button, ConfigProvider, Form, message, Radio, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import styles from './TestList.module.scss';

interface TestListProps {
    options: OptionProps[];
}

interface OptionProps {
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
        <ConfigProvider
            theme={{
                token: {
                }
            }}
        >
            <Form
                form={form}
                layout="vertical"
                requiredMark={false}
                scrollToFirstError
                onFinish={formOnFinish}
            >
                {options.map((option, optionIndex) => (
                    <Form.Item
                        key={`form-item-${optionIndex}`}
                        name={`radio-group-${optionIndex}`}
                        label={option.question}
                        rules={[
                            { required: true, message: <span><ExclamationCircleOutlined /> This is a required question</span> },
                            {
                                validator(_, value) {
                                    if (value && value === option.correctAnswer) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject();
                                }
                            }
                        ]}
                        validateTrigger="onSubmit"
                        validateFirst
                        style={{ marginBottom: 48 }}
                    >
                        <Radio.Group style={{ scrollMarginTop: 24 }}>
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
                        Check
                    </Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    )
}

export default TestList;