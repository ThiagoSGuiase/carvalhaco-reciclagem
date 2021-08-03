import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/WhatsApp.module.css';

export const WhatsApp = () => {
  return (
    <div className={styles.WhatsAppPlugin}>
      <a href="https://web.whatsapp.com/send?phone=5571992103020" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  )
};