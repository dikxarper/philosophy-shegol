import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <Link className={styles.header_link} to={'/'}>Проект по Философии</Link>
                {/* <Link className={styles.header_link} to={'/e-book-academy/about'}>About</Link> */}
            </div>
        </header>
    );
};

export default Header;