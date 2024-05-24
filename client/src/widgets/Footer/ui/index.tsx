import { useRef, useState, useEffect } from 'react';
import Footer_bottom from '../../../entities/Footer_bottom/ui';
import Footer_upper from '../../../entities/Footer_upper/ui';
import { WidgetAppearance, is_touch_enabled } from '../../../shared/utils';
import styles from './styles.module.scss';
import app_styles from '../../../app/layouts/App.module.scss';

const Footer: React.FC = (): React.JSX.Element => {

    /* Проверка на то, что секция в области видимости */
    const footer_ref = useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = useState(false);
    const [isAnim, setIsAnim] = useState(false);

    WidgetAppearance(footer_ref, setIsIntoView);

    useEffect(() => {
        if (isIntoView) {
            setTimeout(() => {
                setIsAnim(true);
            }, 100);
        }
    }, [isIntoView])

    /* На смартфонах компонент появляется через несколько секунд */
    useEffect(() => {
        if (is_touch_enabled()) {
            setTimeout(() => {
                setIsIntoView(true);
            }, 6000);
        }
    }, [])

    return (
        <footer className={`${!isAnim ? app_styles.loading_height : ''} ${styles.footer_wrapper}`} ref={footer_ref}>
            {isIntoView && <div className={`${styles.footer} ${!isAnim ? app_styles.opacity_0 : ''}`}>
                <Footer_upper />
                <Footer_bottom />
            </div>}
        </footer>
    )
}

export default Footer;