import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'antd';

import styles from './Header.module.scss';

const { Search } = Input;

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleSearch = (value: string) => {
        navigate(`/philosophy-shegol?search=${value}`);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <Link className={styles.header_link} to={'/philosophy-shegol'}>Философия</Link>
                <div>
                    <Search
                        placeholder="Теріңіз..."
                        allowClear
                        enterButton="Іздеу"
                        size="middle"
                        onSearch={handleSearch}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;