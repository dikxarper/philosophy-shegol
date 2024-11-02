import TitlePage from './FrontMatter/TitlePage/TitlePage';
import './Content.css';

const Content: React.FC = () => {
    return (
        <div className='content'>
            <div className='content_inner'>
                <TitlePage />
            </div>
        </div>
    );
};

export default Content;