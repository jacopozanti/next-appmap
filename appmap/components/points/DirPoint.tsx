"use client"

type DirPointProps = {
  readonly name: string
  readonly path: string
}

export default function DirPoint({ name, path }: DirPointProps) {
  return (
    <div>
      DIR | { name } | { path }<br/>
    </div>
  )
}