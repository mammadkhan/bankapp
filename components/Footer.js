import styles from '../styles/Footer.module.css'

import Logo from '../public/images/logo-footer.svg'
import Facebook from '../public/images/icon-facebook.svg'
import Youtube from '../public/images/icon-youtube.svg'
import Twitter from '../public/images/icon-twitter.svg'
import Pinterest from '../public/images/icon-pinterest.svg'
import Instagram from '../public/images/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_left}>
            <div className={styles.footer_logo_socials}>
                <div className={styles.footer_left_logo}>
                    <Logo />
                </div>
                <div className={styles.footer_left_socials}>
                    <a href="/"><Facebook className={styles.footer_social}/></a>
                    <a href="/"><Youtube className={styles.footer_social}/></a>
                    <a href="/"><Twitter className={styles.footer_social}/></a>
                    <a href="/"><Pinterest className={styles.footer_social}/></a>
                    <a href="/"><Instagram className={styles.footer_social}/></a>
                </div>
            </div>
            <div className={styles.footer_links}>
                <ul className={styles.footer_list}>
                    <li className={styles.footer_list_item}><a href="/">About Us</a></li>
                    <li className={styles.footer_list_item}><a href="/">Careers</a></li>
                    <li className={styles.footer_list_item}><a href="/">Contact</a></li>
                    <li className={styles.footer_list_item}><a href="/">Support</a></li>
                    <li className={styles.footer_list_item}><a href="/">Blog</a></li>
                    <li className={styles.footer_list_item}><a href="/">Privacy Policy</a></li>
                </ul>
            </div>
        </div>

        <div className={styles.footer_right}>
            <button className={styles.footer_button}>Request Invite</button>
            <p className={styles.footer_copyright}>© Easybank. All Rights Reserved</p>
        </div>

    </footer>
  )
}

export default Footer