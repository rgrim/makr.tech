// components/Navbar.tsx
'use client'; // Ce composant est interactif (liens), donc on le déclare côté client

import Link from 'next/link';
import styles from './Navbar.module.css'; // On importe nos styles

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Makr.tech
        </Link>
        <ul className={styles.navLinks}>
          {/* Liens qui font défiler la page d'accueil */}
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#approach">Approach</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#case-study">Results</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#contact">Contact</Link></li>

          {/* Futurs liens vers les pages dédiées */}
          {/* <li><Link href="/blog">Blog</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;