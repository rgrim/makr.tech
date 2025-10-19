// components/Approach.tsx
'use client';
import styles from './Approach.module.css';
import { useI18n } from '@/i18n/LanguageProvider';
import { Target, Zap, Users } from 'lucide-react';

const Approach = () => {
  const { t } = useI18n();
  return (
    <section id="approach" className={styles.valuePillars}>
      <h2>{t.approach.title}</h2>
      <div className={styles.pillarsGrid}>
        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><Target size={24} color="var(--mediterranean-blue)" /></div>
          <h3>{t.approach.p1Title}</h3>
          <p>{t.approach.p1Text}</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><Zap size={24} color="var(--mediterranean-blue)" /></div>
          <h3>{t.approach.p2Title}</h3>
          <p>{t.approach.p2Text}</p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}><Users size={24} color="var(--mediterranean-blue)" /></div>
          <h3>{t.approach.p3Title}</h3>
          <p>{t.approach.p3Text}</p>
        </div>
      </div>
    </section>
  );
};

export default Approach;