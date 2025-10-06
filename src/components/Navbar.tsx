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
          <li><a href="/#home">Home</a></li>
          <li><a href="/#approach">Approach</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#case-study">Results</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact</a></li>

          {/* Futurs liens vers les pages dédiées */}
          {/* <li><Link href="/blog">Blog</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;