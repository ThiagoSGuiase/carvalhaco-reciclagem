import { useState, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

import imageUrlBuilder from '@sanity/image-url';

import { Menu } from '../components/menu';
import { Footer } from '../components/footer';
import { MenuMobile } from '../components/menuMobile';

import styles from '../styles/BlogPage.module.css';

export default function Blog ({ posts }){

  return (
    <div className={styles.pageBlog}>
      <Head>
        <title>Carvalhaço Reciclagem - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <MenuMobile />
      <h1>Blog</h1>
      <div className={styles.blog}>
        <div className={styles.blogContent}>
          <div className={styles.pageFeed}>
            {mappedPosts.length ? mappedPosts.map((p, index) => (
              <div onClick={() => router.push(`/post/${p.slug.current}`)} key={p.title} className={styles.post}>              
                <Image src={p.mainImage} className={styles.mainImage} width={350} height={350} />
                <div className={styles.cardTxt}>
                  <h3>{p.title}</h3>
                  <span className={styles.postDate}>{new Date(p.publishedAt).toLocaleDateString()}</span>
                  <div className={styles.cardBottom}>                  
                    <span>{p.catego}</span>
                    <span>{p.author}</span>
                  </div>
                  <p>{p.desc.length > 150 ? p.desc.substr(0, 150) + "..." : p.desc}</p>
                </div>
              </div>
            )) : <>No Posts Yet</>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post"]');
  const url = `https://uwk4dif1.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  if (!result.result || !result.result.length){
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};