import { useState, useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuMobile } from '../components/menuMobile';
import { EmpresaSection } from '../components/empresaSection';
import { FormHome } from '../components/homeForm';
import { Footer } from '../components/footer';
import { ServicesHome } from '../components/servicesSection';
import { Parceiros } from '../components/parceirosSection';

import BannerImage from '../assets/banner-home.jpg';
import ImageLogo from '../assets/carvalhaco-logo-2.jpg';

import styles from '../styles/Home.module.css';

import BlogSection from '../components/BlogSection'
import { getAllPostagems } from '../lib/dato-cms';

export default function Home({postagens}) {
  console.log(postagens)
  return (
    <>
    <Head>
        <title>Carvalhaço Reciclagem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuMobile />
      <div className={styles.banner}>
        <Image className={styles.bannerImg} src={BannerImage} />
      </div>
      <div className={styles.bannerMobile}>
        <Image className={styles.bannerImgMobile} src={BannerImage} />
      </div>
      <EmpresaSection />
      <FormHome />
      <ServicesHome />
      <BlogSection postagens={postagens} />
      <Parceiros />
      <Footer />
    </>
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