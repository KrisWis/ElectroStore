import Footer_ContactUs from '../Footer_ContactUs/ui';
import Footer_Electrostore from '../Footer_Electrostore/ui';
import Footer_Section from '../Footer_Section/ui';
import styles from './styles.module.scss';

const Footer_upper: React.FC = (): React.JSX.Element => {

    return (
        <div className={styles.footer_upper}>
            <Footer_Electrostore />
            <Footer_Section caption="Quick Links" links={["Home", "About", "Services", "Signle item", "Contact"]} />
            <Footer_Section caption="About" links={["How it works", "About", "Our Packages", "Promotions", "Refer a friend"]} />
            <Footer_Section caption="Help & Info" links={["Track Your Order", "Returns + Exchanges", "Shipping + Delivery", "Contact Us", "Find us easy", "Faqs"]} />
            <Footer_ContactUs />
        </div>
    )
}

export default Footer_upper;