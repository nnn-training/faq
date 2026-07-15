import { getPostBySlug, getAllPosts } from '@/lib/api'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import Highlight from '@/components/Highlight'
import 'github-markdown-css'

type Params = {
  params: {
    slug: string[]
  }
}

export default async function Post({ params }: Params) {
  // TODO: Next 16 以降 params は非同期

  const post = getPostBySlug(params.slug, [
    'date',
    'title',
    'content',
  ])

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml((post.content as string) || '', params.slug[0] as string)

  return (
    <>
      <Layout>
        <main className="px-5 bg-blue-50 pt-5 pb-20 min-h-screen">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl px-4 pb-20">
            <Highlight html={content} />
          </div>
        </main>
      </Layout>
    </>
  )
}

const markdownToHtml = async (markdown: string, topSlug: string) => {
  const suffix = process.env.NEXT_PUBLIC_GITHUB_PAGES ? `/faq/images/${topSlug}/` : `/images/${topSlug}/`
  markdown = markdown.replace(/\.\/images\//g, suffix)
  const htmlResult = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return htmlResult.toString()
}

export async function generateMetadata({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title']);
  return {
    title: `${post.title} | FAQ`
  };
}

export const generateStaticParams = async () => {
  let posts = getAllPosts()
  return posts.map((post) => ({
    slug: post
  }))
}