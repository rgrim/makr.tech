// components/CaseStudy.tsx
import styles from './CaseStudy.module.css';

const CaseStudy = () => {
  return (
    <section id="case-study" className={styles.caseStudy}>
      <h2>Real Impact, Real Results</h2>
      <p className={styles.caseStudySubtitle}>
        Streamlining Complex Logistics for a Mid-Sized Manufacturer
      </p>

      <div className={styles.caseStudyContent}>
        <div className={styles.caseSection}>
          <h3>🎯 The Problem</h3>
          <p>
            A leading manufacturing firm was losing an estimated <strong>€200k annually</strong> due to inefficient scheduling and manual coordination between their warehouse and shipping departments. Their existing process was a chaotic mix of spreadsheets, emails, and phone calls, leading to costly errors and delays.
          </p>
        </div>

        <div className={styles.caseSection}>
          <h3>🔧 My Action</h3>
          <p>
            Instead of immediately building software, I started by leading a series of <strong>process mapping workshops</strong> with both teams. By simplifying the workflow and identifying key decision points, we designed a streamlined digital process first.
          </p>
          <p>
            Only then did I architect and build a central Mendix application that gave everyone a single source of truth. A key part of the project was <strong>coaching their IT lead</strong>, empowering them to manage and make small modifications themselves.
          </p>
        </div>

        <div className={`${styles.caseSection} ${styles.caseResult}`}>
          <h3>🚀 The Result</h3>
          <p>
            Within 3 months of launch, the transformation was measurable and significant:
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>Reduction in scheduling errors</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15hrs</div>
              <div className={styles.statLabel}>Weekly time saved on planning</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>&lt;7mo</div>
              <div className={styles.statLabel}>Full ROI achieved</div>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            The client&apos;s internal team now feels empowered to continue optimizing their own digital tools—a testament to sustainable transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;