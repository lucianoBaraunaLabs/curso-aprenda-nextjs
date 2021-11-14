import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PageTemplate from 'templates/Page'

export default function AboutPage() {
  const router = useRouter()

  // retonar loading ou qualquer coisa que está sendo criada.
  if (router.isFallback) return null

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

// export const getStaticProps = async () => {
//   const { pages } = await client.request(GET_PAGES)
//   console.log(pages)

//   return {
//     props: {}
//   }
// }
