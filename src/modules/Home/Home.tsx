import Menu  from './Menu/Menu';
import Content from './Content/Content';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="wrapper">
            <Menu />
            <Content />
        </div>
    );
};

export default Home;