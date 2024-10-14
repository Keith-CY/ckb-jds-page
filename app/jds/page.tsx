import { jds } from '@/utils/jds'
import JD from './jd'

const Page = async () => {
  return (
    <main className="max-w-7xl mx-auto p-8 z-10">
      <ul className="flex flex-col gap-4">
        {jds.map((jd) => {
          const key = `${jd.team}-${jd.filename}`
          return (
            <li key={key}>
              <JD
                team={jd.team}
                title={jd.data.title}
                description={jd.data.description}
                salary={jd.data.salary}
                region={jd.data.region}
              />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Page
