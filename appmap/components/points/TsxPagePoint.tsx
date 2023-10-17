"use client"

type TsxPagePointProps = {
  readonly name: string
  readonly path: string
}

export default function TsxPagePoint({ name, path }: TsxPagePointProps) {
  return (
    <div>
      TsxPagePoint | { name } | { path }<br/>
    </div>
  )
}