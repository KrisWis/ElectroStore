import Footer_bottom from '../../../entities/Footer_bottom/ui';
import Footer_upper from '../../../entities/Footer_upper/ui';
import styles from './styles.module.scss';
import React from 'react';

const Footer: React.FC = (): React.JSX.Element => {


    return (
        <footer className={styles.footer}>
            <Footer_upper />
            <Footer_bottom />
        </footer>
    )
}

export default Footer;