import { getAllPostagems } from "../../lib/dato-cms";

function Posts({ post }){
  return (
    <h1>{post.title}</h1>
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