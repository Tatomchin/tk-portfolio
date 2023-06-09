import { useContext } from 'react';
import { ConData } from '../../App.js'
import styles from './Navbar.module.css'

function NavBTN() {
    const {st_SkillTagTop, st_ContactTagTop, st_ProjectTagTop} = useContext(ConData);
    return (
        <div className={styles.NavSpace}>
            <a href="#Skills"><div className={`${styles.BTN} ${st_SkillTagTop ? styles.HighLightBTN : ''}`}>SKILLS</div></a>
            <a href="#Projects"><div className={`${styles.BTN} ${st_ProjectTagTop ? styles.HighLightBTN : ''}`}>PROJECTS</div></a>
            <a href="#Contact"><div className={`${styles.BTN} ${st_ContactTagTop ? styles.HighLightBTN : ''}`}>CONTACT</div></a>
        </div>
    )
}

export default NavBTN;





