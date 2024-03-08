import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import React from 'react';

const Footer_Electrostore: React.FC = (): React.JSX.Element => {


    return (
        <div className={styles.footer_electrostore}>
            <img src="assets/logo.svg" className={styles.footer_logo} />
            <p className={styles.footer_electrostore_desc}>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>

            <div className={styles.footer_electrostore_socials}>
                <Link to="/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                </Link>
                <Link to="/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
            </div>
        </div>
    )
}

export default Footer_Electrostore;