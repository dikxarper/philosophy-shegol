import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';

import TitlePage from './FrontMatter/TitlePage';
import CopyrigthPage from './FrontMatter/CopyrightPage';
import PartialSpacing from '@/shared/components/Content/PartialSpacing';
import Body from './Body/Body';
import styles from './Content.module.scss';

const Content: React.FC = () => {
    const contentHeight = useSelector((state: RootState) => state.menuSlice.contentHeight)
    
    return (
        <div className={styles.content} style={{height: `${contentHeight}vh`}}> 
            <div className={styles.content_inner}>
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