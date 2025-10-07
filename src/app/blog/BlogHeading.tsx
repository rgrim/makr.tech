'use client';

import { useI18n } from '@/i18n/LanguageProvider';
import styles from './Blog.module.css';

export default function BlogHeading() {
  const { t } = useI18n();
  return (
    <>
      <h1 className={styles.title}>{t.blog.title}</h1>
      <p className={styles.subtitle}>{t.blog.subtitle}</p>
    </>
  );
}


