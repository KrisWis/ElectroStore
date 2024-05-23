import styles from './styles.module.scss';
import { FooterSectionProps } from '../types';

const Footer_Section: React.FC<FooterSectionProps> = ({ caption, links }): React.JSX.Element => {

    return (
        <div className={styles.footer_section}>
            <h3 className={styles.footer_section_caption}>{caption}</h3>

            <div className={styles.footer_section_links}>
                {links.map((link) => (
                    <a href={`/${link.toLowerCase()}`} className={styles.footer_section_link} key={link}>{link}</a>
                ))}
            </div>
        </div>
    )
}

export default Footer_Section;