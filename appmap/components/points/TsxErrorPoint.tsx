"use client"

type TsxErrorPointProps = {
  readonly name: string
  readonly path: string
}

export default function TsxErrorPoint({ name, path }: TsxErrorPointProps) {
  return (
    <div>
      TsxErrorPoint | { name } | { path }<br/>
    </div>
  )
}