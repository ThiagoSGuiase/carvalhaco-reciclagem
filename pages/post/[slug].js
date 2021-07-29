import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Menu } from '../../components/menu';
import { MenuMobile } from '../../components/menuMobile';
import { Footer } from '../../components/footer';

export const Post = () => {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <MenuMobile />
      <div className={styles.main}>
        <h1>{title}</h1>
        {/* {imageUrl && <img className={styles.mainImage} src={imageUrl} />} */}
        <div className={styles.postInfo}>
          <span>{new Date(date).toLocaleDateString()}</span>
          <span>{author}</span>
        </div>
        <div className={styles.body}>
          <BlockContent blocks={body} />
        </div>
      </div>
      <Footer />
    </>
  )
};