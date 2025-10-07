// components/Hero.tsx
'use client';
import styles from './Hero.module.css';
import { useI18n } from '@/i18n/LanguageProvider';

const Hero = () => {
  const { t } = useI18n();
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroEyebrow}>{t.hero.eyebrow}</div>
      <h1>
        <span className={styles.heroHighlight}>{t.hero.highlight}</span> {t.hero.line2}<br />
        {t.hero.line3}
      </h1>
      <p>
        {t.hero.sub}
      </p>
      <a href="#contact" className={styles.ctaButton}>
        <span>{t.hero.cta}</span>
      </a>
    </section>
  );
};

export default Hero;