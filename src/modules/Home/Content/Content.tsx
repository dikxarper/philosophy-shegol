import TitlePage from './FrontMatter/TitlePage/TitlePage';
import CopyrigthPage from './FrontMatter/CopyrightPage/CopyrightPage';
import PartialSpacing from '@/shared/components/Content/PartialSpacing';
import './Content.css';
import Introduction from './FrontMatter/Introduction/Introduction';

const Content: React.FC = () => {
    return (
        <div className='content'>
            <div className='content_inner'>
                <PartialSpacing />
                <TitlePage />
                <PartialSpacing count={2} />
                <CopyrigthPage />
                <PartialSpacing count={2} />
                <Introduction />
            </div>
        </div>
    );
};

export default Content;