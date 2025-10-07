// components/Navbar.tsx
'use client'; // Ce composant est interactif (liens), donc on le déclare côté client

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; // On importe nos styles

const Navbar = () => {
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
        <ul className={styles.navLinks}>
          {/* Liens qui font défiler la page d'accueil */}
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#approach">Approach</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#case-study">Results</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/#contact">Contact</Link></li>

          {/* Futurs liens vers les pages dédiées */}
          {/* <li><Link href="/blog">Blog</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;