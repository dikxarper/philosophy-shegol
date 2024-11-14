import TitlePage from './FrontMatter/TitlePage';
import CopyrigthPage from './FrontMatter/CopyrightPage';
import PartialSpacing from '@/shared/components/Content/PartialSpacing';
import Body from './Body/Body';
import styles from './Content.module.scss';

const Content: React.FC = () => {

    return (
        <div className={styles.content}>
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
                <PartialSpacing />
            </div>
        </div>
    );
};

export default Content;