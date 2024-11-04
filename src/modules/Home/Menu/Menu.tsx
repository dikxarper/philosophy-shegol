import React from 'react';
import { MenuProps, Tooltip, Typography } from 'antd';
import { Menu as AntdMenu } from 'antd';
import styles from './Menu.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: '1',
        label: 
            <Tooltip
                title="Unit 1. Week 1. Reading chapters “Introduction” and “Robbie”"
                placement='right'
            >
                <Typography.Text className={styles.text} ellipsis>
                    Unit 1. Week 1. Reading chapters “Introduction” and “Robbie”
                </Typography.Text>
        </Tooltip>,
        children: [
            { key: '11', label: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio fugiat asperiores nisi explicabo consequatur ex in quaerat nulla harum. Earum magnam doloribus vel aliquid in modi porro molestiae error ab' },
            { key: '12', label: 'Option 2' },
            { key: '13', label: 'Option 3' },
            { key: '14', label: 'Option 4' },
        ],
    },
    {
        key: '2',
        label: 'Navigation Two',
        children: [
            { key: '21', label: 'Option 1' },
            { key: '22', label: 'Option 2' },
            {
                key: '23',
                label: 'Submenu',
                children: [
                    { key: '231', label: 'Option 1' },
                    { key: '232', label: 'Option 2' },
                    { key: '233', label: 'Option 3' },
                ],
            },
            {
                key: '24',
                label: 'Submenu 2',
                children: [
                    { key: '241', label: 'Option 1' },
                    { key: '242', label: 'Option 2' },
                    { key: '243', label: 'Option 3' },
                ],
            },
        ],
    },
    {
        key: '3',
        label: 'Navigation Three',
        children: [
            { key: '31', label: 'Option 1' },
            { key: '32', label: 'Option 2' },
            { key: '33', label: 'Option 3' },
            { key: '34', label: 'Option 4' },
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