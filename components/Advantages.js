import styles from '../styles/Advantages.module.css';

import Online from '../public/images/icon-online.svg';
import Budgeting from '../public/images/icon-budgeting.svg';
import Onboarding from '../public/images/icon-onboarding.svg';
import Api from '../public/images/icon-api.svg';

const Advantages = () => {
  return (
    <div className={styles.advantages}>
        <h2 className={styles.advantages_heading}>Why choose Easybank?</h2>
        <p className={styles.advantages_heading_text}>We leverage Open Banking to turn your bank account into your financial hub. <br /> Control your finances like never before.</p>
        <div className={styles.advantages_container}>
            <div className={styles.advantage}>
              <div className={styles.advantage_icon}>
                <Online />
              </div>
              <h3 className={styles.advantage_title}>Online Banking</h3>
              <p className={styles.advantage_text}>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advantage_icon}>
                <Budgeting />
              </div>
              <h3 className={styles.advantage_title}>Simple Budgeting</h3>
              <p className={styles.advantage_text}>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advantage_icon}>
                <Onboarding />
              </div>
              <h3 className={styles.advantage_title}>Fast Onboarding</h3>
              <p className={styles.advantage_text}>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div className={styles.advantage}>
              <div className={styles.advantage_icon}>
                <Api />
              </div>
              <h3 className={styles.advantage_title}>Open API</h3>
              <p className={styles.advantage_text}>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
        </div>
    </div>
  )
}

export default Advantages