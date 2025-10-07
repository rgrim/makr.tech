// components/About.tsx
'use client';
import Image from 'next/image';
import styles from './About.module.css';
import { useI18n } from '@/i18n/LanguageProvider';

const About = () => {
  const { t } = useI18n();
  return (
    <section id="about" className={styles.about}>
      <h2>{t.about.title}</h2>
      <div className={styles.aboutLayout}>
      {/* Desktop image */}
      <Image
        src="/montageRomain.png"
        alt={t.about.photoAlt}
        width={1200}
        height={800}
        className={`${styles.aboutPhoto} ${styles.desktopOnly}`}
      />
      {/* Mobile image */}
      <Image
        src="/photo_romain.jpg"
        alt={t.about.photoAlt}
        width={600}
        height={600}
        className={`${styles.aboutPhoto} ${styles.mobileOnly}`}
        priority
      />

      <div className={styles.aboutContent}>
        <div className={styles.aboutCard}>
          <p>{t.about.card1}</p>
        </div>
        <div className={styles.aboutCard}>
          <p>{t.about.card2}</p>
        </div>
        <div className={styles.aboutCard}>
          <p>{t.about.card3}</p>
        </div>
        <div className={styles.aboutCard}>
          <p>{t.about.card4}</p>
          <a 
            href="https://www.linkedin.com/in/romaingrimmonpre/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkedinLink}
          >
            {t.about.linkedin}
          </a>
        </div>
      </div>
    </div>  
    </section>
  );
};

export default About;