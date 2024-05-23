import styles from './styles.module.scss';

const Footer_Electrostore: React.FC = (): React.JSX.Element => {


    return (
        <div className={styles.footer_electrostore}>
            <img src="assets/logo.svg" alt="Наш логотип" className={styles.footer_logo} />
            <p className={styles.footer_electrostore_desc}>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>

            <div className={styles.footer_electrostore_socials}>
                <a href="/" aria-label="Наш facebook аккаунт">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="/" aria-label="Наш twitter аккаунт">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="/" aria-label="Наш youtube канал">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="/" aria-label="Наш pinterest аккаунт">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a>
                <a href="/" aria-label="Наш instagram аккаунт">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer_Electrostore;