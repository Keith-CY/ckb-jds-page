import path from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'

export interface Params {
  team: string
  filename: string
}

export const getJdPaths = () => {
  const teamsDir = path.join(process.cwd(), 'public', 'jds', 'teams')
  const teams = fs.readdirSync(teamsDir)

  const paths: Array<Params> = []

  teams.forEach(team => {
    const filenames = fs.readdirSync(path.join(teamsDir, team)).filter(fn => fn.endsWith('.md'))

    filenames.forEach(filename => {
      paths.push({ team, filename })
    })
  })

  return paths
}

export const jds = getJdPaths().map(({ team, filename }) => {
  const postPath = path.join(process.cwd(), 'public', 'jds', 'teams', team, filename)
  const fileContent = fs.readFileSync(postPath, 'utf-8')
  const { data, content } = matter(fileContent)
  return { team, filename, data, content }
})

