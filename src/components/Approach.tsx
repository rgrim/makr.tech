// components/Approach.tsx
import styles from './Approach.module.css';

const Approach = () => {
  return (
    <section id="approach" className={styles.valuePillars}>
      <h2>My Three-Pillar Approach</h2>
      <div className={styles.pillarsGrid}>
        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}>🎯</div>
          <h3>Strategic Problem Solving</h3>
          <p>
            I don&apos;t just take orders. I&apos;m the person called into complex meetings to find clarity. I optimize business processes before writing a single line of code, ensuring we solve the right problem, not just the obvious one.
          </p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}>⚡</div>
          <h3>Rapid & Robust Execution</h3>
          <p>
            Using Low-Code (Mendix) and AI as my unfair advantage, I build solutions faster and smarter than traditional methods. Solid software architecture that scales with your business ambitions.
          </p>
        </div>

        <div className={styles.pillarCard}>
          <div className={styles.pillarIcon}>👥</div>
          <h3>People-Centric Empowerment</h3>
          <p>
            I don&apos;t just build software, I build consensus. Through coaching, knowledge transfer, and inclusive leadership, I ensure your team adopts, owns, and evolves the solutions we create together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;