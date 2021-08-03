import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import ReactMarkdown from 'react-markdown'

import styles from '../styles/blogSection.module.css';

export default function BlogSection({ postagens }) {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogSectionContainer}>
        <h2>Nossas postagens</h2>
        <div className={styles.postsContainer}>
          {postagens.slice( 0, 3 ).map (p => (
              <div onClick={() => router.push(`/post/${p.slug}`)} className={styles.postCard} key={p.id}>
                <Image src={p.image.url} alt={p.title} width={350} height={350} layout='responsive' />
                <div className={styles.postTxt}>
                  <h4>{p.title}</h4>
                  <div className={styles.postTxtCont}>
                    <ReactMarkdown>{p.postContent.length > 150 ? p.postContent.substr(0, 150) + "..." : p.postContent}</ReactMarkdown>
                  </div>
                  <span className={styles.postDate}>{new Date(p.datePost).toLocaleDateString()}</span>
                  <div className={styles.postTxtBottom}>
                    <span>{p.category}</span>
                    <span>{p.author.length > 150 ? p.author.substr(0, 150) + "..." : p.author} </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Link href="/blog">Veja todas as publicações</Link>
      </div>
    </section>
  )
};