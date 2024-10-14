'use client'
import Link from 'next/link'
import { BookOpenIcon, DollarSignIcon, MapPinIcon, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import BoxReveal from '@/components/ui/box-reveal'
import ShinyButton from '@/components/ui/shiny-button'

interface Props {
  team: string
  title: string
  description: string
  salary: string
  region: string
}

const JD = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <BoxReveal boxColor="#18181b" duration={0.5}>
            <h2 className="text-4xl font-semibold">{props.title}</h2>
          </BoxReveal>
        </CardTitle>
        <CardDescription>
          <BoxReveal boxColor="#18181b" duration={0.5}>
            <h2>{props.description}</h2>
          </BoxReveal>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex flex-col items-start gap-4 border-t px-6 py-4 sm:items-center sm:justify-between  sm:flex-row">
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center font-semibold gap-2">
            <Users size="16" />
            {props.team}
          </div>
          {props.region ? (
            <div className="flex items-center font-semibold gap-2">
              <MapPinIcon size="16" />
              {props.region}
            </div>
          ) : null}
          {props.salary ? (
            <div className="flex items-center font-semibold gap-2">
              <DollarSignIcon size="16" />
              {props.salary}
            </div>
          ) : null}
        </div>
        <Link href={`/jds/${props.team}/${props.title}`}>
          <ShinyButton>
            <span className="font-bold flex items-center gap-2">
              Learn More
              <BookOpenIcon size="16" />
            </span>
          </ShinyButton>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default JD
