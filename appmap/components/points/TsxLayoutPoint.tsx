"use client"

type TsxLayoutPointProps = {
  readonly name: string
  readonly path: string
}

export default function TsxLayoutPoint({ name, path }: TsxLayoutPointProps) {
  return (
    <div>
      TsxLayoutPoint | { name } | { path }<br/>
    </div>
  )
}