import Head from 'next/head';
import router, { useRouter } from 'next/router';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import { Footer } from '../components/footer';
import { MenuMobile } from '../components/menuMobile';

import { getAllPostagems } from '../lib/dato-cms';

import styles from '../styles/BlogPage.module.css';

export default function Blog ({postagens}){
  
  return (
    <div className={styles.pageBlog}>
      <Head>
        <title>Carvalhaço Reciclagem - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuMobile />
      <h1>Blog</h1>
      <div className={styles.blog}>
        <div className={styles.blogContent}>
          <div className={styles.pageFeed}>
            {postagens.map (p => (
              <div onClick={() => router.push(`/post/${p.slug}`)} className={styles.post} key={p.id}>
                <Image src={p.image.url} alt={p.title} width={500} height={500} className={styles.postImg}/>
                <div className={styles.cardTxt}>
                  <h3>{p.title}</h3>
                  <div className={styles.postCont}>
                    <ReactMarkdown>{p.postContent.length > 250 ? p.postContent.substr(0, 250) + "..." : p.postContent}</ReactMarkdown>
                  </div>
                  <span className={styles.postDate}>{new Date(p.datePost).toLocaleDateString()}</span>
                  <div className={styles.cardBottom}>
                    <span>{p.category}</span>
                    <span>{p.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const postagens = await getAllPostagems();

  return {
    props: {
      postagens,
    },
    revalidate: 120,
  };
};
