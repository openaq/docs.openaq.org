import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const entries = await getCollection('docs')

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: `OpenAQ API Docs-${page.data.title}`,
      description: page.data.description,
      bgGradient: [[30, 100, 171],[106, 92, 216]],
      logo: {
        path: './src/assets/logo-dark.png',
        size: [200]
      },
      border: { color: [63, 194, 192], width: 20 },
      padding: 40,
    }
  },
})
