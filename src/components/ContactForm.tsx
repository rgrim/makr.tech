'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.' 
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        setStatus({ 
          type: 'error', 
          message: result.error || 'Une erreur est survenue. Veuillez réessayer.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Une erreur de connexion est survenue. Veuillez réessayer.' 
      });
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.formHeader}>
        <h2>Contactez-moi pour votre diagnostic gratuit</h2>
        <p>
          Remplissez le formulaire ci-dessous et je vous recontacterai dans les 24h pour planifier votre consultation gratuite de 30 minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nom complet <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Votre nom complet"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.label}>
              Entreprise
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={styles.input}
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder="+32 4XX XX XX XX"
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={styles.textarea}
            placeholder="Décrivez votre situation actuelle et vos questions concernant la transition vers Peppol..."
          />
        </div>

        <button 
          type="submit" 
          disabled={status.type === 'loading'}
          className={styles.submitButton}
        >
          {status.type === 'loading' ? (
            <>
              <div className={styles.spinner}></div>
              Envoi en cours...
            </>
          ) : (
            <>
              <Send size={20} />
              Envoyer le message
            </>
          )}
        </button>

        {status.type === 'success' && (
          <div className={styles.statusMessage + ' ' + styles.success}>
            <CheckCircle size={20} />
            {status.message}
          </div>
        )}

        {status.type === 'error' && (
          <div className={styles.statusMessage + ' ' + styles.error}>
            <AlertCircle size={20} />
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
