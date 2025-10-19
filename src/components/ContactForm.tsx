'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './ContactForm.module.css';
import { useI18n } from '../i18n/LanguageProvider';

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
  const { t } = useI18n();
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
          message: t.contactForm.successMessage
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
          message: result.error || t.contactForm.errorMessage
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: t.contactForm.connectionError
      });
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.formHeader}>
        <h2>{t.contactForm.title}</h2>
        <p>
          {t.contactForm.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              {t.contactForm.nameLabel} <span className={styles.required}>{t.contactForm.required}</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder={t.contactForm.namePlaceholder}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              {t.contactForm.emailLabel} <span className={styles.required}>{t.contactForm.required}</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder={t.contactForm.emailPlaceholder}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.label}>
              {t.contactForm.companyLabel}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={styles.input}
              placeholder={t.contactForm.companyPlaceholder}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              {t.contactForm.phoneLabel}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder={t.contactForm.phonePlaceholder}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            {t.contactForm.messageLabel} <span className={styles.required}>{t.contactForm.required}</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={styles.textarea}
            placeholder={t.contactForm.messagePlaceholder}
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
              {t.contactForm.submitLoading}
            </>
          ) : (
            <>
              <Send size={20} />
              {t.contactForm.submitButton}
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
