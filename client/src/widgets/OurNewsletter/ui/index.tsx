import { WidgetAppearance, is_touch_enabled } from '../../../shared/utils';
import styles from './styles.module.scss';
import app_styles from '../../../app/layouts/App.module.scss';
import { Parallax } from 'react-parallax';
import { useEffect, useRef, useState } from 'react';


const OurNewsletter: React.FC = (): React.JSX.Element => {


    /* Проверка на то, что секция в области видимости */
    const OurNewsletter_ref = useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = useState(false);
    const [isAnim, setIsAnim] = useState(false);

    WidgetAppearance(OurNewsletter_ref, setIsIntoView);

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
        <div className={`${app_styles.widget_wrapper} ${!isAnim ? app_styles.loading_height : ''}`} ref={OurNewsletter_ref}>
            {isIntoView && <div className={`${styles.ourNewsletter} ${!isAnim ? app_styles.opacity_0 : ''}`}>

                <div className={styles.ourNewsletter_wrapper}>
                    <Parallax bgImage="images/JoinOurNewslatter/JoinOurNewsletter.webp" strength={250}>
                        <div className={styles.ourNewsletter_parallax} style={{ height: '500px' }}>
                            <div className={styles.ourNewsletter_header}>
                                <h3 className={styles.ourNewsletter_caption}>Join Our Newsletter</h3>
                                <p className={styles.ourNewsletter_desc}>Sign Up for our newsletter and never miss any offers</p>
                            </div>
                            <div className={styles.ourNewsletter_form}>
                                <input placeholder='Your Email Address' className={styles.ourNewsletter_input} />
                                <button className={styles.ourNewsletter_sign}>Sign <span>Up</span></button>
                            </div>
                        </div>
                    </Parallax>
                </div>

            </div>}
        </div>
    )
}

export default OurNewsletter;