import React from 'react';
import { MenuProps, Tooltip, Typography } from 'antd';
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
        <a onClick={() => handleScroll("unit1")}>
            <Tooltip
                placement='right'
            >
                
                <Typography.Text className={styles.text} ellipsis>
                    <b>Unit 1.</b> Reading chapters “Introduction” and “Robbie”
                </Typography.Text>
                
            </Tooltip>
            </a>
            ,
        children: [
            {
                key: '11', label: <Tooltip
                    title="Check your vocabulary and grammar: I, Robot by Isaac Asimov. Chapters: “Introduction” and  “Robbie”."
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your vocabulary and grammar: I, Robot by Isaac Asimov. Chapters: “Introduction” and  “Robbie”.
                    </Typography.Text>
                </Tooltip>
            },
        ],
    },
    {
        key: '2',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
                <b>Unit2.</b> Chapter: Runaround
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '21', label: <Tooltip
                    title='Check your grammar and vocabulary: I, Robot by I.Asimov. Chapter "Runaround"'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I, Robot by I.Asimov. Chapter "Runaround"
                    </Typography.Text>
                </Tooltip>,
            },
        ],
    },
    {
        key: '3',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
               <b>Unit 3.</b>  Chapter "Reason" from "I, Robot" by Isaak Asimov
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '31', label: <Tooltip
                    title='Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter "Reason"'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter "Reason"
                    </Typography.Text>
                </Tooltip>
            },
        ],
    },
    {
        key: '4',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
                <b>Unit 4.</b> Chapter “Catch That Rabbit” from "I, Robot" by Isaak Asimov
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '41', label: <Tooltip
                    title='Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Catch That Rabbit'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Catch That Rabbit
                    </Typography.Text>
                </Tooltip>
            },
        ],
    },
    {
        key: '5',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
                <b>Unit 5.</b> Chapter “Liar!” from "I, Robot" by Isaak Asimov
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '51', label: <Tooltip
                    title='Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Liar!'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Liar!
                    </Typography.Text>
                </Tooltip>
            },
        ],
    },
    {
        key: '6',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
                <b>Unit 6.</b> Chapter "Little Lost Robot!" from "I, Robot" by Isaak Asimov
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '61', label: <Tooltip
                    title='Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Little Lost Robot'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Little Lost Robot
                    </Typography.Text>
                </Tooltip>
            },
        ],
    },
    {
        key: '7',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
                <b>Unit 7.</b> Chapter "Escape!" from "I, Robot" by Isaak Asimov
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '71', label: <Tooltip
                    title='Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Escape'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Escape
                    </Typography.Text>
                </Tooltip>
            },
        ],
    },
    {
        key: '8',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
                <b>Unit 8.</b> Chapter “Evidence” from "I, Robot" by Isaak Asimov
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '81', label: <Tooltip
                    title='Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Evidence'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: Evidence
                    </Typography.Text>
                </Tooltip>
            },
        ],
    },
    {
        key: '9',
        label: <Tooltip
            placement='right'
        >
            <Typography.Text className={styles.text} ellipsis>
                <b>Unit 9.</b> Chapter “The Evitable Conflict” from “I, Robot” by Isaak Asimov
            </Typography.Text>
        </Tooltip>,
        children: [
            {
                key: '91', label: <Tooltip
                    title='Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: The Evitable Conflict'
                    placement='right'
                >
                    <Typography.Text className={styles.text} ellipsis>
                        Check your grammar and vocabulary: I,Robot by I.Asimov. Chapter: The Evitable Conflict
                    </Typography.Text>
                </Tooltip>
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