"use client"

type TsxDefaultPointProps = {
  readonly name: string
  readonly path: string
}

export default function TsxDefaultPoint({ name, path }: TsxDefaultPointProps) {
  return (
    <div>
      TsxDefaultPoint | { name } | { path }<br/>
    </div>
  )
}