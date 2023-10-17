"use client"

type TsxLoadingPointProps = {
  readonly name: string
  readonly path: string
}

export default function TsxLoadingPoint({ name, path }: TsxLoadingPointProps) {
  return (
    <div>
      TsxLoadingPoint | { name } | { path }<br/>
    </div>
  )
}