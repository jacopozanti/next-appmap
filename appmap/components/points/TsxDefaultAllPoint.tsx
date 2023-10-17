"use client"

type TsxDefaultAllPointProps = {
  readonly name: string
  readonly path: string
}

export default function TsxDefaultAllPoint({ name, path }: TsxDefaultAllPointProps) {
  return (
    <div>
      TsxDefaultAllPoint | { name } | { path }<br/>
    </div>
  )
}