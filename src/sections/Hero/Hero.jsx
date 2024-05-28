import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'; 
import themeIcon from '../../assets/sun.svg';
import TwitterIcon from '../../assets/twitter-light.svg';
import GithubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
function Hero() {
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
              <img src={TwitterIcon} alt='Twitter icon' />
            </a>
            <a href="https://github.com/" target='_blank'>
              <img src={GithubIcon} alt='Github icon' />
            </a>
            <a href="https://linkedin.com/" target='_blank'>
              <img src={linkedinIcon} alt='Linkedin icon' />
            </a>
          </span>
      </div>
    </section>
  );
}

export default Hero;

