'use client';
import React from 'react';
import DynamicBackground from './DynamicBackground';
import ContactForm from './ContactForm';
import { Clock, DollarSign, TrendingUp, Building2, Coffee, Check } from 'lucide-react';
import styles from './Peppol.module.css';
import { useI18n } from '../i18n/LanguageProvider';

const Peppol: React.FC = () => {
  const { t } = useI18n();
  
  return (
    <>
      <DynamicBackground />
      <div className={styles.peppolPage}>
        {/* Section Héros */}
        <section className="hero">
          <div className={styles.heroEyebrow}>{t.peppol.heroEyebrow}</div>
          <h1>
            <span className="hero-highlight">{t.peppol.heroTitle1}</span>{t.peppol.heroTitle2}<br />
            {t.peppol.heroTitle3}
          </h1>
          <p>
            {t.peppol.heroDescription}
          </p>
          <a href="#contact" className="cta-button">
            <span style={{display: 'flex', alignItems: 'center'}}>
              <Coffee size={20} style={{marginRight: '8px'}} />
              {t.peppol.heroCta}
            </span>
          </a>
        </section>

        {/* Section Urgence */}
        <section className={styles.urgency}>
          <h2>{t.peppol.urgencyTitle}</h2>
          <p className={styles.urgencyText}>
            {t.peppol.urgencyText}
          </p>
          
          <div className={styles.risksContainer}>
            <h3 className={styles.risksTitle}>{t.peppol.risksTitle}</h3>
            <ul className={styles.risksList}>
              <li><strong>{t.peppol.risk1}</strong></li>
              <li><strong>{t.peppol.risk2}</strong></li>
            </ul>
          </div>

          <div className={styles.statisticsBox}>
            <p className={styles.statisticsText}>
              {t.peppol.statisticsText}
            </p>
          </div>
        </section>

        {/* Section Services */}
        <section className="services">
          <h2>{t.peppol.servicesTitle}</h2>
          <p className={styles.servicesIntro}>
            {t.peppol.servicesIntro}
          </p>

          <div className={`services-grid ${styles.servicesGridTwoCols}`}>
            <div className="service-card">
              <div className="service-number">01</div>
              <h3>{t.peppol.service1Title}</h3>
              <div className="subtitle">{t.peppol.service1Subtitle}</div>
              <p>
                {t.peppol.service1Text}
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <h3>{t.peppol.service2Title}</h3>
              <div className="subtitle">{t.peppol.service2Subtitle}</div>
              <p>
                {t.peppol.service2Text}
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <h3>{t.peppol.service3Title}</h3>
              <div className="subtitle">{t.peppol.service3Subtitle}</div>
              <p>
                {t.peppol.service3Text}
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>
              <h3>{t.peppol.service4Title}</h3>
              <div className="subtitle">{t.peppol.service4Subtitle}</div>
              <p>
                {t.peppol.service4Text}
              </p>
            </div>
          </div>
        </section>

        {/* Section Avantages */}
        <section className="value-pillars">
          <h2>{t.peppol.benefitsTitle}</h2>
          <p className={styles.benefitsIntro}>
            {t.peppol.benefitsIntro}
          </p>

          <div className={`pillars-grid ${styles.pillarsGridFourCols}`}>
            <div className="pillar-card">
              <div className="pillar-icon">
                <Clock size={32} />
              </div>
              <h3>{t.peppol.benefit1Title}</h3>
              <p>
                {t.peppol.benefit1Text}
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <DollarSign size={32} />
              </div>
              <h3>{t.peppol.benefit2Title}</h3>
              <p>
                {t.peppol.benefit2Text}
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <TrendingUp size={32} />
              </div>
              <h3>{t.peppol.benefit3Title}</h3>
              <p>
                {t.peppol.benefit3Text}
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Building2 size={32} />
              </div>
              <h3>{t.peppol.benefit4Title}</h3>
              <p>
                {t.peppol.benefit4Text}
              </p>
            </div>
          </div>
        </section>

        {/* Section CTA Secondaire */}
        <section className="contact">
          <h2>{t.peppol.ctaTitle}</h2>
          <p className={styles.ctaDescription}>
            {t.peppol.ctaDescription}
          </p>

          <div className={styles.benefitsList}>
            <h3 className={styles.benefitsTitle}>{t.peppol.ctaBenefitsTitle}</h3>
            <div className={styles.benefitsItems}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <Check size={16} />
                </div>
                <span>{t.peppol.ctaBenefit1}</span>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <Check size={16} />
                </div>
                <span>{t.peppol.ctaBenefit2}</span>
              </div>
            </div>
          </div>

          <p className={styles.ctaNote}>
            {t.peppol.ctaNote}
          </p>

          <a href="#contact" className="cta-button">
            <span style={{display: 'flex', alignItems: 'center'}}>
              <Coffee size={20} style={{marginRight: '8px'}} />
              {t.peppol.ctaButton}
            </span>
          </a>
        </section>

        {/* Section Contact Form */}
        <section id="contact" className={styles.contactFormSection}>
          <ContactForm />
        </section>

        {/* Section FAQ */}
        <section className="about">
          <h2>{t.peppol.faqTitle}</h2>

          <div className="about-content">
            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>{t.peppol.faq1Question}</h3>
              <p>
                {t.peppol.faq1Answer}
              </p>
            </div>

            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>{t.peppol.faq2Question}</h3>
              <p>
                {t.peppol.faq2Answer}
              </p>
            </div>

            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>{t.peppol.faq3Question}</h3>
              <p>
                {t.peppol.faq3Answer}
              </p>
            </div>

            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>{t.peppol.faq4Question}</h3>
              <p>
                {t.peppol.faq4Answer}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Peppol;
