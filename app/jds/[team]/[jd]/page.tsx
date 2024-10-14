import { remark } from 'remark'
import html from 'remark-html'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { getJdPaths, jds } from '@/utils/jds'
import styles from './style.module.css'
import { CircleUserIcon, DollarSignIcon, MapPinIcon, Users } from 'lucide-react'

interface Params {
  team: string
  jd: string
}

export const generateStaticParams = getJdPaths

export const generateMetadata = async ({ params }: { params: Params }) => {
  const title = decodeURIComponent(params.jd)
  const post = jds.find((jd) => jd.team === params.team && jd.data.title === title)
  return {
    title: `${title} | ${params.team} | Opportunities in CKB`,
    description: post?.data.description,
  }
}

const Page = async ({ params }: { params: Params }) => {
  const title = decodeURIComponent(params.jd)
  const post = jds.find((jd) => jd.team === params.team && jd.data.title === title)

  if (!post) {
    return <div>Not found</div>
  }

  const processedContent = await remark().use(html).process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <main className="z-10">
      <Card className="max-w-7xl mx-auto p-8 z-10">
        <CardHeader>
          <CardTitle>
            <h1 className="text-4xl font-bold mb-2">{post.data.title}</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center font-semibold gap-2">
                <Users size="16" />
                {post.team}
              </div>
              {post.data.region ? (
                <div className="flex items-center font-semibold gap-2">
                  <MapPinIcon size="16" />
                  {post.data.region}
                </div>
              ) : null}
              {post.data.salary ? (
                <div className="flex items-center font-semibold gap-2">
                  <DollarSignIcon size="16" />
                  {post.data.salary}
                </div>
              ) : null}
            </div>
          </CardTitle>
        </CardHeader>
        <CardDescription>
          <h2>{post.data.description}</h2>
        </CardDescription>
        <hr className="mt-4" />

        <CardContent>
          <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </CardContent>

        <CardFooter className="flex justify-end border-t py-4 ">
          <div className="flex gap-2">
            <CircleUserIcon />
            Contact: {post.data.contact}
          </div>
        </CardFooter>
      </Card>
    </main>
  )
}

export default Page
