// components/Footer.tsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <p><strong>Makr bv</strong></p>
            <p>Business Transformation Architecture</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Business Details</h4>
            <p><strong>VAT Number:</strong> BE 1011.263.897</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Banking</h4>
            <p><strong>IBAN:</strong> BE13 3632 4531 2939</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Makr.tech. All rights reserved. | Built with passion for transformation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;