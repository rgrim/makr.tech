// components/Contact.tsx
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Ready to Transform Your Digital Future?</h2>
      <p>
        Let&apos;s have an honest conversation about your challenges. No sales pitch—just strategic thinking and a clear path forward. I&apos;ll tell you if I&apos;m the right fit, and together we&apos;ll decide on the best approach.
      </p>
      <a href="mailto:romain.grimmonpre@makr.tech" className={styles.contactEmail}>
        romain.grimmonpre@makr.tech
      </a>
    </section>
  );
};

export default Contact;