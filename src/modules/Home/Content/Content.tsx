import TitlePage from './FrontMatter/TitlePage';
import CopyrigthPage from './FrontMatter/CopyrightPage';
import PartialSpacing from '@/shared/components/Content/PartialSpacing';
import Body from './Body/Body';
import './Content.css';

const Content: React.FC = () => {
    return (
        <div className='content'>
            <div className='content_inner'>
                <PartialSpacing />
                <TitlePage />
                <PartialSpacing />
                <hr />
                <PartialSpacing />
                <CopyrigthPage />
                <PartialSpacing />
                <hr />
                <PartialSpacing />
                <Body />
            </div>
        </div>
    );
};

export default Content;