import ContentLoader from "react-content-loader";
import styles from '../../../features/Widget_item/ui/styles.module.scss';

export const BestSellers_Skeleton: React.FC<any> = (props) => (
    <ContentLoader
        className={styles.widget_item}
        speed={1}
        width={588}
        height={695}
        viewBox="0 0 588 695"
        backgroundColor="#d1d1d1"
        foregroundColor="#bfbfbf"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="541" height="519" />
        <rect x="0" y="544" rx="11" ry="11" width="541" height="50" />
    </ContentLoader>
)