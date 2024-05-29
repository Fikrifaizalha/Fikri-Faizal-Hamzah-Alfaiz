import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'; 
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from "../../assets/cv.pdf";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.Container}>
      <div className={styles.colorModeContainer}>
        <img
         className={styles.hero}
         src={heroImg} 
         alt="Profile picture of Fikri Faizal"
        />
        <img
         className={styles.colorMode}
         src={themeIcon}
         alt="Color mode icon" 
         onClick={toggleTheme}
         />
      </div>
      <div className={styles.info}>
        <h1>Fikri Faizal 
          <br /> 
          Hamzah Alfaiz
          </h1>
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://twitter.com/" target='_blank'>
              <img src={twitterIcon} alt='Twitter icon' />
            </a>
            <a href="https://github.com/" target='_blank'>
              <img src={githubIcon} alt='Github icon' />
            </a>
            <a href="https://linkedin.com/" target='_blank'>
              <img src={linkedinIcon} alt='Linkedin icon' />
            </a>
          </span>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex est magni saepe dicta consequuntur!
             Odit dolorum quaerat minima, unde quis molestias, fugiat mollitia molestiae necessitatibus hic recusandae. Quae, quia officia!
          </p>
          <a href={CV} download>
            <button className='hover'>Resume</button>
          </a>
      </div>
    </section>
  );
}

export default Hero;

