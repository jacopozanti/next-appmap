"use client"

import { TMapPoint } from "../lib/abstraction/TMapPoint"
import MapPoint from "./points/MapPoint"

type AppMapClientProps = {
  readonly rootMapPoint: TMapPoint
}

export default function AppMapClient({ rootMapPoint }: AppMapClientProps) {
  return (
    <div className="w-full">
      <MapPoint mapPointData={rootMapPoint} />
    </div>
  )
}