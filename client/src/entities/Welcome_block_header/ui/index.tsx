import styles from './styles.module.scss';

export const Welcome_block_header: React.FC = (): React.JSX.Element => {

    return (
        <div className={styles.welcome_block_header}>
            <h4 className={styles.welcome_block_caption}>Welcome</h4>
            <p className={styles.welcome_block_desc}>We're constantly testing new products, researching recent trends in the tech space, and updating our list of cool gadgets accordingly.</p>
        </div>
    )
}
