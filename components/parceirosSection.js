import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import styles from '../styles/Parceiros.module.css';

import Amado from '../assets/parceiros/amado.png';
import Arcelor from '../assets/parceiros/arcelor.png';
import Empa from '../assets/parceiros/empa.png';
import Gerdau from '../assets/parceiros/gerdau.png';
import Palladium from '../assets/parceiros/palladium.png';
import Vap from '../assets/parceiros/vap.png';

export const Parceiros = () => {
  return (
    <div className={styles.parceirosSection}>
      <h2>Parceiros</h2>
      <div className={styles.parceirosLogos}>
        <Image src={Arcelor} alt={"logo da Arcelor Mittal"}/>
        <Image src={Empa} alt={"logo da Empa Grupo Teixeira Duarte"} />
        <Image src={Gerdau} alt={"logo da Gerdau"} />
        <Image src={Vap} alt={"logo da Vap Ambiental"} />
        <Image src={Palladium} alt={"logo da Palladium Hotel Group"} />
        <Image src={Amado} alt={"logo da Amado"} />
      </div>
      <div className={styles.faleConosco}>
        <h3>Fale conosco</h3>
        <p>Entre em contato pelas redes sociais ou Whatsapp.</p>
        <div className={styles.faleIcons}>
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
    </div>
  )
}