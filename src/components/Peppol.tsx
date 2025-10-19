import React from 'react';
import DynamicBackground from './DynamicBackground';
import { Clock, DollarSign, TrendingUp, Building2, Coffee, Check } from 'lucide-react';
import styles from './Peppol.module.css';

const Peppol: React.FC = () => {
  return (
    <>
      <DynamicBackground />
      <div className={styles.peppolPage}>
        {/* Section Héros */}
        <section className="hero">
          <div className={styles.heroEyebrow}>Facturation Électronique 2026</div>
          <h1>
            <span className="hero-highlight">Soyez Prêt</span>, Sans Stress.<br />
            La transition vers Peppol simplifiée
          </h1>
          <p>
            Dès le 1er janvier 2026, la facturation électronique structurée devient obligatoire en Belgique pour toutes les entreprises B2B. Ne laissez pas cette échéance complexe devenir un obstacle. Je vous accompagne pour une transition simple, conforme et avantageuse.
          </p>
          <a href="#contact" className="cta-button">
            <span style={{display: 'flex', alignItems: 'center'}}>
              <Coffee size={20} style={{marginRight: '8px'}} />
              Prenez rendez-vous pour votre diagnostic gratuit de 30 min
            </span>
          </a>
        </section>

        {/* Section Urgence */}
        <section className={styles.urgency}>
          <h2>Le 1er Janvier 2026, Tout Change. Êtes-vous Concerné ?</h2>
          <p className={styles.urgencyText}>
            La nouvelle loi impose à toutes les entreprises assujetties à la TVA d'émettre et de recevoir des factures via le réseau sécurisé Peppol, au format UBL. Ignorer cette transition n'est pas une option.
          </p>
          
          <div className={styles.risksContainer}>
            <h3 className={styles.risksTitle}>Les risques en cas de non-conformité sont importants :</h3>
            <ul className={styles.risksList}>
              <li><strong>Amendes Forfaitaires :</strong> Jusqu'à 5 000 € en cas d'infractions répétées.</li>
              <li><strong>Refus de Déduction de la TVA :</strong> Un impact direct et majeur sur votre trésorerie.</li>
            </ul>
          </div>

          <div className={styles.statisticsBox}>
            <p className={styles.statisticsText}>
              Ne faites pas partie des statistiques. Actuellement, plus de 50% des PME belges ne sont pas encore prêtes, et ce chiffre atteint 64% dans le secteur de la construction en Wallonie. N'attendez pas le dernier moment.
            </p>
          </div>
        </section>

        {/* Section Services */}
        <section className="services">
          <h2>Votre Transition, Guidée de A à Z</h2>
          <p className={styles.servicesIntro}>
            Je vous propose un accompagnement sur mesure pour naviguer cette réforme en toute sérénité. Mon service s'articule autour de 4 étapes clés pour garantir votre conformité et optimiser vos processus.
          </p>

          <div className={`services-grid ${styles.servicesGridTwoCols}`}>
            <div className="service-card">
              <div className="service-number">01</div>
              <h3>Audit et Diagnostic Complet</h3>
              <div className="subtitle">État des lieux personnalisé</div>
              <p>
                Nous commençons par un état des lieux de vos systèmes actuels. J'analyse votre logiciel comptable, vos volumes de facturation et vos processus internes pour définir un plan d'action personnalisé.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>
              <h3>Sélection et Implémentation de la Solution Idéale</h3>
              <div className="subtitle">Intégration technique complète</div>
              <p>
                Le marché propose de nombreuses solutions (Odoo, Billit, Trustup Pro, etc.). Je vous aide à choisir l'outil le plus adapté à vos besoins et à votre budget, puis je pilote son intégration technique avec vos systèmes existants et le réseau Peppol.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>
              <h3>Formation de vos Équipes</h3>
              <div className="subtitle">Adoption garantie</div>
              <p>
                Le succès de la transition repose sur son adoption par vos collaborateurs. J'organise des sessions de formation pratiques pour garantir une prise en main rapide et efficace du nouveau système.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>
              <h3>Optimisation et Conformité Continue</h3>
              <div className="subtitle">Accompagnement long terme</div>
              <p>
                Mon accompagnement ne s'arrête pas à l'installation. Je vous aide à mettre en place un archivage électronique sécurisé pour 7 ans, comme l'exige la loi, et je vous conseille pour maximiser les aides financières disponibles.
              </p>
            </div>
          </div>
        </section>

        {/* Section Avantages */}
        <section className="value-pillars">
          <h2>Transformez cette Obligation en une Véritable Opportunité</h2>
          <p className={styles.benefitsIntro}>
            Au-delà de la simple conformité, le passage à la facturation électronique est un levier de performance pour votre entreprise.
          </p>

          <div className={`pillars-grid ${styles.pillarsGridFourCols}`}>
            <div className="pillar-card">
              <div className="pillar-icon">
                <Clock size={32} />
              </div>
              <h3>Gagnez du temps</h3>
              <p>
                Réduisez le temps de traitement de vos factures de 30%.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <DollarSign size={32} />
              </div>
              <h3>Faites des économies</h3>
              <p>
                Diminuez vos coûts d'impression, d'envoi et d'archivage de 50% à 70%.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Améliorez votre trésorerie</h3>
              <p>
                Profitez d'un suivi en temps réel et de relances automatisées pour réduire les retards de paiement.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Building2 size={32} />
              </div>
              <h3>Profitez d'aides fiscales</h3>
              <p>
                Bénéficiez d'une déduction de 20% pour investissement numérique et jusqu'à 120% sur les frais de logiciels (2024-2027).
              </p>
            </div>
          </div>
        </section>

        {/* Section CTA Secondaire */}
        <section className="contact">
          <h2>Discutons de Votre Projet Autour d'un Café</h2>
          <p className={styles.ctaDescription}>
            L'incertitude est le principal frein à l'action. C'est pourquoi je vous offre <strong>30 minutes de consultation gratuite</strong> pour faire le point sur votre situation spécifique.
          </p>

          <div className={styles.benefitsList}>
            <h3 className={styles.benefitsTitle}>Pendant ce rendez-vous, nous allons :</h3>
            <div className={styles.benefitsItems}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <Check size={16} />
                </div>
                <span>Évaluer votre niveau de préparation actuel</span>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <Check size={16} />
                </div>
                <span>Esquisser les premières étapes de votre plan de transition</span>
              </div>
            </div>
          </div>

          <p className={styles.ctaNote}>
            Cet échange est sans engagement et a pour seul but de vous apporter de la clarté.
          </p>

          <a href="#contact" className="cta-button">
            <span style={{display: 'flex', alignItems: 'center'}}>
              <Coffee size={20} style={{marginRight: '8px'}} />
              Je réserve mon état des lieux gratuit de 30 minutes
            </span>
          </a>
        </section>

        {/* Section FAQ */}
        <section className="about">
          <h2>Questions Fréquentes</h2>

          <div className="about-content">
            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>1. Mon entreprise est-elle vraiment obligée de passer à la facturation électronique ?</h3>
              <p>
                L'obligation concerne toutes les entreprises assujetties à la TVA pour leurs transactions B2B. Seules les micro-entreprises réalisant moins de 25 000 € de chiffre d'affaires et effectuant uniquement des opérations exonérées de TVA peuvent être exemptées sous conditions strictes.
              </p>
            </div>

            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>2. Est-ce que l'envoi de factures en PDF par e-mail est suffisant ?</h3>
              <p>
                Non. À partir de 2026, un simple PDF ne sera plus considéré comme une facture électronique conforme. La loi impose l'utilisation d'un format structuré (XML UBL) via le réseau Peppol pour garantir un traitement automatisé.
              </p>
            </div>

            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>3. Quels sont les logiciels compatibles en Belgique ?</h3>
              <p>
                De nombreuses solutions belges comme Accountable, Billit, Trustup Pro, Odoo ou Yuki sont déjà compatibles avec Peppol. Le choix dépend de la taille de votre entreprise, de vos besoins et de votre budget.
              </p>
            </div>

            <div className={`about-card ${styles.faqCard}`}>
              <h3 className={styles.faqTitle}>4. Quel est le coût de cette transition ?</h3>
              <p>
                Les coûts varient selon la solution choisie. Cependant, des aides fiscales importantes existent pour alléger l'investissement, notamment une déduction de 120% sur les frais de logiciels pour les PME et une déduction de 20% pour l'investissement numérique.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Peppol;
