import styles from './styles.module.scss';

const Footer_bottom: React.FC = (): React.JSX.Element => {


    return (
        <div className={styles.footer_bottom}>
            <p className={styles.footer_bottom_firstCol}>We ship with:
                <i className="fa fa-github" aria-hidden="true"></i>
                <i className="fa fa-vk" aria-hidden="true"></i>
                Payment Option:
                <i className="fa fa-vcard" aria-hidden="true"></i>
                <i className="fa fa-vcard-o" aria-hidden="true"></i>
            </p>
            <div className={styles.footer_bottom_secondCol}>
                <p>© Copyright 2023 ElectroStore. All rights reserved. HTML Template by <span className={styles.footer_bottom_author}>KrisWis</span></p>
            </div>
        </div>
    )
}

export default Footer_bottom;