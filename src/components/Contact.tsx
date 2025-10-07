// components/Contact.tsx
'use client';
import styles from './Contact.module.css';
import { useI18n } from '@/i18n/LanguageProvider';

const Contact = () => {
  const { t } = useI18n();
  return (
    <section id="contact" className={styles.contact}>
      <h2>{t.contact.title}</h2>
      <p>{t.contact.text}</p>
      <a href="mailto:romain.grimmonpre@makr.tech" className={styles.contactEmail}>
        romain.grimmonpre@makr.tech
      </a>
    </section>
  );
};

export default Contact;