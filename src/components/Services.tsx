// components/Services.tsx
import styles from './Services.module.css';

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>How We Work Together</h2>
      <p className={styles.servicesSubtitle}>
        A strategic value ladder designed to guide you from complexity to clarity, from planning to execution.
      </p>

      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceNumber}>01</div>
          <h3>Digital Strategy & Process Blueprint</h3>
          <div className={styles.subtitle}>High-Value Strategic Entry Point</div>
          <p>A 2-4 week intensive where we dive deep into your specific challenge. No assumptions—just structured discovery.</p>
          <ul className={styles.serviceFeatures}>
            <li>Stakeholder interviews & process mapping</li>
            <li>Bottleneck identification & optimization design</li>
            <li>Technical recommendations & architecture sketch</li>
            <li>ROI projection & implementation roadmap</li>
            <li>Deliverable: Your "Transformation Blueprint"</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.serviceNumber}>02</div>
          <h3>High-Impact Application Development</h3>
          <div className={styles.subtitle}>From Blueprint to Reality</div>
          <p>End-to-end design, architecture, and development of your custom solution. We don&apos;t just build an app—we build the validated solution from your Blueprint.</p>
          <ul className={styles.serviceFeatures}>
            <li>Scalable Mendix architecture & development</li>
            <li>AI integration for intelligent automation</li>
            <li>User-centric design & intuitive interfaces</li>
            <li>Enterprise-grade security & performance</li>
            <li>Iterative delivery with continuous feedback</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.serviceNumber}>03</div>
          <h3>Team Empowerment & Coaching</h3>
          <div className={styles.subtitle}>Build Internal Capabilities</div>
          <p>Training and mentorship to build your team&apos;s Low-Code capabilities. Turn one-off projects into lasting transformation through knowledge transfer.</p>
          <ul className={styles.serviceFeatures}>
            <li>Low-Code Center of Excellence setup</li>
            <li>Best practices & governance frameworks</li>
            <li>Developer mentoring (beginner to senior)</li>
            <li>Trilingual training (French, English, Dutch)</li>
            <li>Long-term advisory partnerships</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;