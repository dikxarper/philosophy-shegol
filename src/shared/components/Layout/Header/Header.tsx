import React from 'react';
import './Header.css';
import { Button } from 'antd';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='header_inner'>
                <div>Professional English Course: Enhancing Reading competencies</div>
                <div>
                    <Button type="text" style={{color: 'white'}}>About</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;