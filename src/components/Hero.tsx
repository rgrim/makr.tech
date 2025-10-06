// components/Hero.tsx
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroEyebrow}>Business Transformation Architect</div>
      <h1>
        <span className={styles.heroHighlight}>Clarity</span> in Complexity.<br />
        From Business Process<br />
        to Digital Product.
      </h1>
      <p>
        I translate complex business challenges into simple, scalable, and rapidly-deployed digital solutions. Strategic thinking meets technical execution.
      </p>
      <a href="#contact" className={styles.ctaButton}>
        <span>Start Your Transformation</span>
      </a>
    </section>
  );
};

export default Hero;