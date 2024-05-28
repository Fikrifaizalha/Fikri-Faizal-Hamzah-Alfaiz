import styles from './HeroStyle.module.css'; // pastikan path-nya sesuai
import heroImg from '../../assets/hero.png'; // pastikan path-nya sesuai

function Hero() {
  return (
    <section id='hero' className={styles.hero}>
      <div>
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;

