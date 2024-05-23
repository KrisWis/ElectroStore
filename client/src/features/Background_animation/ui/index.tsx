import styles from './styles.module.scss';

const Background_animation: React.FC = (): React.JSX.Element => {

    return (
        <div className={styles.background_animation}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Background_animation;