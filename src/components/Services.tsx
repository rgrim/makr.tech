// components/Services.tsx
'use client';
import styles from './Services.module.css';
import { useI18n } from '@/i18n/LanguageProvider';

const Services = () => {
  const { t } = useI18n();
  return (
    <section id="services" className={styles.services}>
      <h2>{t.services.title}</h2>
      <p className={styles.servicesSubtitle}>{t.services.subtitle}</p>

      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceNumber}>01</div>
          <h3>{t.services.s1Title}</h3>
          <div className={styles.subtitle}>{t.services.s1Tag}</div>
          <p>{t.services.s1Text}</p>
          <ul className={styles.serviceFeatures}>
            <li>{t.services.s1f1}</li>
            <li>{t.services.s1f2}</li>
            <li>{t.services.s1f3}</li>
            <li>{t.services.s1f4}</li>
            <li>{t.services.s1f5}</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.serviceNumber}>02</div>
          <h3>{t.services.s2Title}</h3>
          <div className={styles.subtitle}>{t.services.s2Tag}</div>
          <p>{t.services.s2Text}</p>
          <ul className={styles.serviceFeatures}>
            <li>{t.services.s2f1}</li>
            <li>{t.services.s2f2}</li>
            <li>{t.services.s2f3}</li>
            <li>{t.services.s2f4}</li>
            <li>{t.services.s2f5}</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.serviceNumber}>03</div>
          <h3>{t.services.s3Title}</h3>
          <div className={styles.subtitle}>{t.services.s3Tag}</div>
          <p>{t.services.s3Text}</p>
          <ul className={styles.serviceFeatures}>
            <li>{t.services.s3f1}</li>
            <li>{t.services.s3f2}</li>
            <li>{t.services.s3f3}</li>
            <li>{t.services.s3f4}</li>
            <li>{t.services.s3f5}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;