// components/CaseStudy.tsx
'use client';
import styles from './CaseStudy.module.css';
import { useI18n } from '@/i18n/LanguageProvider';
import { Target, Wrench, Rocket } from 'lucide-react';

const CaseStudy = () => {
  const { t } = useI18n();
  return (
    <section id="case-study" className={styles.caseStudy}>
      <h2>{t.caseStudy.title}</h2>
      <p className={styles.caseStudySubtitle}>{t.caseStudy.subtitle}</p>

      <div className={styles.caseStudyContent}>
        <div className={styles.caseSection}>
          <h3><Target size={20} />{t.caseStudy.problemTitle}</h3>
          <p>{t.caseStudy.problemText1}</p>
        </div>

        <div className={styles.caseSection}>
          <h3><Wrench size={20} />{t.caseStudy.actionTitle}</h3>
          <p>{t.caseStudy.actionText1}</p>
          <p>{t.caseStudy.actionText2}</p>
        </div>

        <div className={`${styles.caseSection} ${styles.caseResult}`}>
          <h3><Rocket size={20} />{t.caseStudy.resultTitle}</h3>
          <p>{t.caseStudy.resultIntro}</p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>{t.caseStudy.stat1Label}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15hrs</div>
              <div className={styles.statLabel}>{t.caseStudy.stat2Label}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>&lt;7mo</div>
              <div className={styles.statLabel}>{t.caseStudy.stat3Label}</div>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>{t.caseStudy.closing}</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;