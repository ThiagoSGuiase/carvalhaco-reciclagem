import Link from 'next/link';
import { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from '../styles/HomeForm.module.css';

export const FormHome = () => {
  const [ loading, setLoading ] = useState(false);
  return (
    <div className={styles.formHome}>
      {/* <div className={styles.formHome__colLeft}>
        <h3>Entre em contato</h3>
        <p>Temos um time pronto para atender você e esclarecer as suas dúvidas</p>
      </div> */}
      {/* <div className={styles.formHome__colRight}>
        <p>Siga para o nosso formulário <BiRightArrowAlt /></p>
        <Link href="/contato">
          <a>
            <button>
              Formulário
            </button>
          </a>
        </Link>
      </div> */}
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
    </div>
  )
};