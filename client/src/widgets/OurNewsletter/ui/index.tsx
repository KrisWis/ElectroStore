import { WidgetAppearance } from '../../../shared/utils';
import styles from './styles.module.scss';
import React from 'react';
import app_styles from '../../../app/layouts/App.module.scss';
import { Parallax } from 'react-parallax';


const OurNewsletter: React.FC = (): React.JSX.Element => {


    /* Проверка на то, что секция в области видимости */
    const OurNewsletter_ref = React.useRef<HTMLDivElement>(null);

    const [isIntoView, setIsIntoView] = React.useState(false);

    WidgetAppearance(OurNewsletter_ref, setIsIntoView);


    return (
        <div ref={OurNewsletter_ref} className={`${styles.ourNewsletter} ${!isIntoView && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? app_styles.opacity_0 : ''}`}>

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

        </div>
    )
}

export default OurNewsletter;