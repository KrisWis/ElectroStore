import styles from './styles.module.scss';

const Footer_ContactUs: React.FC = (): React.JSX.Element => {


    return (
        <div className={styles.footer_ContactUs}>
            <h3 className={styles.footer_ContactUs_caption}>Contact Us</h3>
            <p className={styles.footer_ContactUs_desc}>
                Do you have any questions or suggestions?
                <span className={styles.footer_ContactUs_info}>contact@yourcompany.com</span>
                Do you need support? Give us a call. <span className={styles.footer_ContactUs_info}>+43 720 11 52 78</span>
            </p>
        </div>
    )
}

export default Footer_ContactUs;