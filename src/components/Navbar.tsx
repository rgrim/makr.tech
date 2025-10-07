// components/Navbar.tsx
'use client'; // Ce composant est interactif (liens), donc on le déclare côté client

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css'; // On importe nos styles
import { useI18n } from '@/i18n/LanguageProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
        <Image
            src="/logo_makr.png" // Chemin depuis le dossier public
            alt="Makr.tech Logo"
            width={945} // Largeur réelle de votre logo en pixels
            height={546} // Hauteur réelle de votre logo en pixels
            priority // Indique à Next.js de charger cette image en priorité
          />
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open main menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

        <ul className={styles.navLinks}>
          {/* Liens qui font défiler la page d'accueil */}
          <li><Link href="/#home">{t.nav.home}</Link></li>
          <li><Link href="/#approach">{t.nav.approach}</Link></li>
          <li><Link href="/#services">{t.nav.services}</Link></li>
          <li><Link href="/#case-study">{t.nav.results}</Link></li>
          <li><Link href="/#about">{t.nav.about}</Link></li>
          <li><Link href="/blog">{t.nav.blog}</Link></li>
          <li><Link href="/#contact">{t.nav.contact}</Link></li>

          {/* Futurs liens vers les pages dédiées */}
          {/* <li><Link href="/blog">Blog</Link></li> */}
        </ul>
        
        <div
          id="primary-navigation"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul>
            <li><Link href="/#home" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link></li>
            <li><Link href="/#approach" onClick={() => setIsMenuOpen(false)}>{t.nav.approach}</Link></li>
            <li><Link href="/#services" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</Link></li>
            <li><Link href="/#case-study" onClick={() => setIsMenuOpen(false)}>{t.nav.results}</Link></li>
            <li><Link href="/#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</Link></li>
            <li><Link href="/blog" onClick={() => setIsMenuOpen(false)}>{t.nav.blog}</Link></li>
            <li><Link href="/#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</Link></li>
          </ul>
        </div>
        
        {/* Language switcher */}
        <div className={styles.langSwitcher}>
          <button
            type="button"
            onClick={() => setLocale('en')}
            aria-pressed={locale === 'en'}
            className={locale === 'en' ? styles.langActive : ''}
          >EN</button>
          <button
            type="button"
            onClick={() => setLocale('fr')}
            aria-pressed={locale === 'fr'}
            className={locale === 'fr' ? styles.langActive : ''}
          >FR</button>
          <button
            type="button"
            onClick={() => setLocale('nl')}
            aria-pressed={locale === 'nl'}
            className={locale === 'nl' ? styles.langActive : ''}
          >NL</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;