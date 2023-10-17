"use client"

type PagePointProps = {
  readonly name: string
  readonly path: string
}

export default function PagePoint({ name, path }: PagePointProps) {
  return (
    <div>
      PAGE | { name } | { path }<br/>
    </div>
  )
}