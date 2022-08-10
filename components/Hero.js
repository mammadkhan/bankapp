import Image from 'next/image'
import styles from '../styles/Hero.module.css';

import Hero_bg from '../public/images/bg-intro-desktop.svg'
import Hero_mobile from '../public/images/bg-intro-mobile.svg'
import phones from '../public/images/image-mockups.png'

const Hero = () => {
  return (
      <main className={styles.hero}>
        <div className={styles.hero_inner}>
          <Hero_bg className={styles.hero_bg_svg}/>
          <Hero_mobile viewBox='0 0 430 500' className={styles.hero_bg_mobile_svg}/>
          <div className={styles.hero_left}>
            <h1 className={styles.hero_title}>Next generation <br /> digital banking</h1>
            <p className={styles.hero_text}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className={styles.hero_button}>Request Invite</button>
          </div>
        </div>
        <div className={styles.hero_phones}>
          {/* <Image src={phones} alt="phones" width={"767px"} height={"939px"}/> */}
        </div>
      </main>
  )
}

export default Hero