import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

import logoNav from '../assets/carvalhaco-logo-header.png';

export const Menu = (prop) => {
  const router = useRouter();
  
  return (
    <header className={styles.main}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <Image className={styles.logoHeader} src={logoNav}  alt="Logo da Carvalhaço"/>
          </a>
        </Link>
        <nav className={styles.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/servicos">
            <a>Serviços</a>
          </Link>
          <Link href="/empresa">
            <a>Empresa</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </nav>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  )
};