import { useState } from "react";
import Head from "next/head";
import { MenuMobile } from "../components/menuMobile";
import { Footer } from '../components/footer';
import styles from '../styles/Contato.module.css';

export default function Contato() {
  const [ loading, setLoading ] = useState(false);

  return (
    <>
      <Head>
        <title>Carvalhaço Reciclagem - Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuMobile />
      <form className={styles.form} action="https://formsubmit.co/carvalhaco.forms@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://www.carvalhacoreciclagem.com.br/obrigado" />
        <h1>Formulário de Contato</h1>
        <div className={styles.formContent}>
          <label htmlFor='name' className={styles.hiddenLabel}>Nome</label>
          <input id="name" name="name" type="text" placeholder="Seu nome" required />

          <label htmlFor="phone" className={styles.hiddenLabel}>Telefone</label>
          <input id="phone" name="phone" type="text" placeholder="Telefone/Whatsapp" required />

          <label htmlFor="email" className={styles.hiddenLabel}>E-mail</label>
          <input id="email" name="email" type="text" placeholder="Seu E-mail" required />

          <label htmlFor="company" className={styles.hiddenLabel}>Empresa</label>
          <input id="company" name="company" type="text" placeholder="Empresa (Opcional)" />

          <label htmlFor="message" className={styles.hiddenLabel}>Mensagem</label>
          <textarea id="message" name="message" type="text" placeholder="Mensagem" required />

          <button type="submit">Enviar</button>
          { loading ? (
          <div className="loading">
            <span>Enviando...</span>
            <div className="spinner"></div>
          </div>
          ) : ''}
        </div>        
      </form>
      <Footer />
    </>
  )
};