import React from 'react';
import { MenuProps, Typography } from 'antd';
import { Menu as AntdMenu } from 'antd';
import styles from './Menu.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const items: MenuItem[] = [
    {
        key: '1',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-1")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 1.</b> Chapters: "Introduction" and "Robbie"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '11',
                label:
                    <a className={styles.anchor} onClick={() => handleScroll("unit-11")}>
                        <Typography.Text className={styles.text} ellipsis>
                            Check your vocabulary and grammar
                        </Typography.Text>
                    </a>
            },
        ],
    },
    {
        key: '2',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-2")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 2.</b> Chapter: "Runaround"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '21',
                label:
                    <a className={styles.anchor} onClick={() => handleScroll("unit-21")}>
                        <Typography.Text className={styles.text} ellipsis>
                            Check your vocabulary and grammar
                        </Typography.Text>
                    </a>
            },
        ],
    },
    {
        key: '3',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-3")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 3.</b>  Chapter: "Reason"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '31',
                label: <a className={styles.anchor} onClick={() => handleScroll("unit-31")}>
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar
                    </Typography.Text>
                </a>
            },
        ],
    },
    {
        key: '4',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-4")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 4.</b> Chapter: "Catch That Rabbit"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '41',
                label: <a className={styles.anchor} onClick={() => handleScroll("unit-41")}>
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar
                    </Typography.Text>
                </a>
            },
        ],
    },
    {
        key: '5',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-5")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 5.</b> Chapter: "Liar!"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '51',
                label: <a className={styles.anchor} onClick={() => handleScroll("unit-51")}>
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar
                    </Typography.Text>
                </a>
            },
        ],
    },
    {
        key: '6',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-6")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 6.</b> Chapter: "Little Lost Robot!"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '61',
                label: <a className={styles.anchor} onClick={() => handleScroll("unit-61")}>
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar
                    </Typography.Text>
                </a>
            },
        ],
    },
    {
        key: '7',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-7")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 7.</b> Chapter: "Escape!"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '71',
                label: <a className={styles.anchor} onClick={() => handleScroll("unit-71")}>
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar
                    </Typography.Text>
                </a>
            },
        ],
    },
    {
        key: '8',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-8")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 8.</b> Chapter: "Evidence"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '81',
                label: <a className={styles.anchor} onClick={() => handleScroll("unit-81")}>
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar
                    </Typography.Text>
                </a>
            },
        ],
    },
    {
        key: '9',
        label:
            <a className={styles.anchor} onClick={() => handleScroll("unit-9")}>
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 9.</b> Chapter: "The Evitable Conflict"
                </Typography.Text>
            </a>,
        children: [
            {
                key: '81',
                label: <a className={styles.anchor} onClick={() => handleScroll("unit-91")}>
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar
                    </Typography.Text>
                </a>
            },
        ],
    },
];

const Menu: React.FC = () => {

    return (
        <AntdMenu
            className={styles.menu}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
        />
    );
};

export default Menu;