import styles from '../styles/Header.module.css'
import Logo from "../public/images/logo.svg"
import Burger from '../public/images/icon-hamburger.svg'
import Close from '../public/images/icon-close.svg'

const Header = ({isOpen, open, close}) => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_list_item}><a className={styles.navigation_link} href="/">Home</a></li>
          <li className={styles.navigation_list_item}><a className={styles.navigation_link} href="/">About</a></li>
          <li className={styles.navigation_list_item}><a className={styles.navigation_link} href="/">Contact</a></li>
          <li className={styles.navigation_list_item}><a className={styles.navigation_link} href="/">Blog</a></li>
          <li className={styles.navigation_list_item}><a className={styles.navigation_link} href="/">Careers</a></li>
        </ul>
      </nav>
      <button className={styles.cta_button}>Request Invite</button>
      {isOpen ?  <Close className={styles.burger_menu_close} onClick={close}/> : <Burger className={styles.burger_menu} onClick={open}/>}
    </header>
  )
}

export default Header