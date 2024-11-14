import React from 'react';
import { MenuProps, Menu as AntdMenu } from 'antd';

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
            <div className={styles.anchor} onClick={() => handleScroll("unit-1")}>
                <b>Unit 1.&nbsp;</b>Chapters: "Introduction" and "Robbie"
            </div>,
        children: [
            {
                key: '11',
                type: 'item',
                label:
                    <div className={styles.anchor} onClick={() => handleScroll("unit-11")}>
                        Check your vocabulary and grammar
                    </div>
            },
        ],
    },
    {
        key: '2',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-2")}>
                <b>Unit 2.&nbsp;</b>Chapter: "Runaround"
            </div>,
        children: [
            {
                key: '21',
                type: 'item',
                label:
                    <div className={styles.anchor} onClick={() => handleScroll("unit-21")}>
                        Check your vocabulary and grammar
                    </div>
            },
        ],
    },
    {
        key: '3',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-3")}>
                <b>Unit 3.&nbsp;</b>Chapter: "Reason"
            </div>,
        children: [
            {
                key: '31',
                type: 'item',
                label: <div className={styles.anchor} onClick={() => handleScroll("unit-31")}>
                    Check your vocabulary and grammar
                </div>
            },
        ],
    },
    {
        key: '4',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-4")}>
                <b>Unit 4.&nbsp;</b>Chapter: "Catch That Rabbit"
            </div>,
        children: [
            {
                key: '41',
                type: 'item',
                label: <div className={styles.anchor} onClick={() => handleScroll("unit-41")}>
                    Check your vocabulary and grammar
                </div>
            },
        ],
    },
    {
        key: '5',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-5")}>
                <b>Unit 5.&nbsp;</b>Chapter: "Liar!"
            </div>,
        children: [
            {
                key: '51',
                type: 'item',
                label: <div className={styles.anchor} onClick={() => handleScroll("unit-51")}>
                    Check your vocabulary and grammar
                </div>
            },
        ],
    },
    {
        key: '6',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-6")}>
                <b>Unit 6.&nbsp;</b>Chapter: "Little Lost Robot!"
            </div>,
        children: [
            {
                key: '61',
                type: 'item',
                label: <div className={styles.anchor} onClick={() => handleScroll("unit-61")}>
                    Check your vocabulary and grammar
                </div>
            },
        ],
    },
    {
        key: '7',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-7")}>
                <b>Unit 7.&nbsp;</b>Chapter: "Escape!"
            </div>,
        children: [
            {
                key: '71',
                type: 'item',
                label: <div className={styles.anchor} onClick={() => handleScroll("unit-71")}>
                    Check your vocabulary and grammar
                </div>
            },
        ],
    },
    {
        key: '8',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-8")}>
                <b>Unit 8.&nbsp;</b>Chapter: "Evidence"
            </div>,
        children: [
            {
                key: '81',
                type: 'item',
                label: <div className={styles.anchor} onClick={() => handleScroll("unit-81")}>
                    Check your vocabulary and grammar
                </div>
            },
        ],
    },
    {
        key: '9',
        label:
            <div className={styles.anchor} onClick={() => handleScroll("unit-9")}>
                <b>Unit 9.&nbsp;</b>Chapter: "The Evitable Conflict"
            </div>,
        children: [
            {
                key: '91',
                type: 'item',
                label: <div className={styles.anchor} onClick={() => handleScroll("unit-91")}>
                    Check your vocabulary and grammar
                </div>
            },
        ],
    },
];

const Menu: React.FC = () => {
    return (
        <AntdMenu
            className={styles.menu}
            mode="inline"
            items={items}
        />
    );
};

export default Menu;