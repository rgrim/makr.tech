// components/Footer.tsx
'use client';
import styles from './Footer.module.css';
import { useI18n } from '@/i18n/LanguageProvider';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerSection}>
            <h4>{t.footer.company}</h4>
            <p><strong>{t.footer.companyName}</strong></p>
            <p>{t.footer.companyTag}</p>
          </div>
          <div className={styles.footerSection}>
            <h4>{t.footer.details}</h4>
            <p><strong>{t.footer.vat}:</strong> BE 1011.263.897</p>
          </div>
          <div className={styles.footerSection}>
            <h4>{t.footer.banking}</h4>
            <p><strong>{t.footer.iban}:</strong> BE13 3632 4531 2939</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Makr.tech. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;