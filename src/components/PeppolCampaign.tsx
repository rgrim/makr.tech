'use client';
import Link from 'next/link';
import { Calendar, AlertTriangle, ArrowRight } from 'lucide-react';
import styles from './PeppolCampaign.module.css';
import { useI18n } from '@/i18n/LanguageProvider';

const PeppolCampaign = () => {
  const { t } = useI18n();
  
  return (
    <section className={styles.campaign}>
      <div className={styles.campaignContainer}>
        <div className={styles.campaignContent}>
          <div className={styles.urgencyBadge}>
            <AlertTriangle size={14} />
            <span>{t.peppolCampaign.urgencyBadge}</span>
          </div>
          
          <div className={styles.campaignText}>
            <span className={styles.highlight}>{t.peppolCampaign.highlight}</span> {t.peppolCampaign.mainText}
            <Link href="/peppol" className={styles.ctaLink}>
              {t.peppolCampaign.ctaText} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeppolCampaign;
