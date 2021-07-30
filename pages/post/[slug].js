import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Footer } from "../../components/footer";
import { MenuMobile } from "../../components/menuMobile";
import { getAllPostagems } from "../../lib/dato-cms";

import styles from '../../styles/PostPage.module.css';

function Posts({ post }){
  return (
    <div className={styles.postPage}>
      <Head>
        <title>Post - {post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuMobile />
      <article>
        <h1 className={styles.postPastTitle}>{post.title}</h1>
        <div className={styles.postInfos}>
          <p className={styles.postAuthor}>Por: {post.author}</p>
          <figure className={styles.postImg}>
            <Image src={post.image.url} alt={post.title} width={800} height={500}/>
          </figure>
        </div>
        <div className={styles.postTxt}>
          <ReactMarkdown>{post.postContent}</ReactMarkdown>
        </div>
        <div className={styles.postInfosBottom}>            
          <p>{post.category} /</p>
          <span className={styles.postDate}>{new Date(post.datePost).toLocaleDateString()}</span>
        </div>
      </article>
      <Footer />
    </div>
  )
}

export const getStaticProps = async({ params }) => {
  const slug = params?.slug;
  const posts = await getAllPostagems();
  const post = posts.find((s) => s.slug === slug) || null;

  if(!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      allPosts: posts,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPostagems();
  const slugs = posts.map((s) => ({ params: { slug: s.slug } }));
  
  return {
    paths: slugs,
    fallback: false,
  }
}
export default Posts;