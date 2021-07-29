const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPostagems() {
  const data = await fetchCmsAPI(`
    {
      allPostagems {
        id
        title
        slug
        author
        datePost
        postContent
        image {
          id
          url
        }
      }
    }
  `);

  return data.allPostagems;
}

export default {getAllPostagems};