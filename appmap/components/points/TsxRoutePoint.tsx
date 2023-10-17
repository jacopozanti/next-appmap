"use client"

type TsxRoutePointProps = {
  readonly name: string
  readonly path: string
}

export default function TsxRoutePoint({ name, path }: TsxRoutePointProps) {
  return (
    <div>
      TsxRoutePoint | { name } | { path }<br/>
    </div>
  )
}