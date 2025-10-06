// components/About.tsx
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Romain Grimmonpré</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutCard}>
          <p>
            <strong>Certified Mendix Expert and Coach</strong>, I am a passionate architect of innovative digital solutions. My goal: to translate your business challenges into high-performing and intuitive applications using Low-Code and AI.
          </p>
        </div>
        <div className={styles.aboutCard}>
          <p>
            <strong>Volunteer firefighter</strong> – commitment and solving complex problems under pressure are at the core of my DNA. The same urgency and systematic approach I bring to emergencies, I apply to your business challenges.
          </p>
        </div>
        <div className={styles.aboutCard}>
          <p>
            <strong>Trilingual communicator</strong> – I speak French, English, and Dutch fluently, enabling seamless collaboration across diverse teams, markets, and stakeholders.
          </p>
        </div>
        <div className={styles.aboutCard}>
          <p>
            <strong>Business-minded technologist</strong> – I&apos;m often called into complex business meetings outside my technical domain because I bridge the gap between strategy and execution. I listen, clarify, and deliver.
          </p>
          <a 
            href="https://www.linkedin.com/in/romaingrimmonpre/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.linkedinLink}
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;