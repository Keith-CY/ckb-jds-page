import { remark } from 'remark'
import html from 'remark-html'
import { getJdPaths, jds } from '@/utils/jds'

export const generateStaticParams = getJdPaths

const Page = async ({ params }: { params: { team: string, jd: string } }) => {
  const title = decodeURIComponent(params.jd)
  const post = jds.find(jd => jd.team === params.team && jd.data.title === title)

  if (!post) {
    return <div>Not found</div>
  }

  const processedContent = await remark().use(html).process(post.content)
  const contentHtml = processedContent.toString()

  return <main>
    <h1>{post.data.title}</h1>
    <h2>{post.data.description}</h2>
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
  </main>

}

export default Page
