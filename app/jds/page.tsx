import { jds } from '@/utils/jds'
import Link from 'next/link'


const Page = async () => {
  return <main>
    {jds.map(jd => {
      const key = `${jd.team}-${jd.filename}`
      return <section key={key}>
        <h1>
          {jd.data.title}
        </h1>
        <p>{jd.data.description}</p>
        <Link href={`/jds/${jd.team}/${jd.data.title}`}>{jd.data.title}</Link>
      </section>
    })}
  </main>
}

export default Page
