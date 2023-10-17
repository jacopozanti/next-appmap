"use client"

type UnknownPointProps = {
  readonly name: string
  readonly path: string
}

export default function UnknownPoint({ name, path }: UnknownPointProps) {
  return (
    <div>
      UnknownPoint | { name } | { path }<br/>
    </div>
  )
}