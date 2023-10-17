"use client"

import { TMapPoint } from "@/lib/abstraction/TMapPoint"
import AppPoint from "./AppPoint"
import hasNestedPoints from "@/lib/functions/hasNestedPoints"
import DirPoint from "./DirPoint"
import PagePoint from "./PagePoint"
import TsxLayoutPoint from "./TsxLayoutPoint"
import TsxLoadingPoint from "./TsxLoadingPoint"
import TsxPagePoint from "./TsxPagePoint"
import TsxErrorPoint from "./TsxErrorPoint"
import TsxDefaultPoint from "./TsxDefaultPoint"
import TsxDefaultAllPoint from "./TsxDefaultAllPoint"
import TsxRoutePoint from "./TsxRoutePoint"
import UnknownPoint from "./UnknownPoint"

function getRightPoint(mapPointData: TMapPoint) {
  const { type, name, path } = mapPointData

  if (type === "directory" && name === "app")
    return <AppPoint />

  if (type === "directory" && hasNestedPoints(mapPointData))
    return (
      <DirPoint
        name={name}
        path={path}
      />
    )

  if (type === "directory")
    return (
      <PagePoint
        name={name}
        path={path}
      />
    )

  if (type === "file") {
    if (name === "layout.tsx") return <TsxLayoutPoint name={name} path={path} />
    if (name === "loading.tsx") return <TsxLoadingPoint name={name} path={path} />
    if (name === "page.tsx") return <TsxPagePoint name={name} path={path} />
    if (name === "error.tsx") return <TsxErrorPoint name={name} path={path} />
    if (name === "default.tsx") return <TsxDefaultPoint name={name} path={path} />
    if (name === "defaultAll.tsx") return <TsxDefaultAllPoint name={name} path={path} />
    if (name === "route.tsx") return <TsxRoutePoint name={name} path={path} />
  }

  return <UnknownPoint name={name} path={path} />
}

type MapPointProps = {
  readonly mapPointData: TMapPoint
  readonly depth?: number
}

export default function MapPoint({ mapPointData, depth }: MapPointProps) {
  const _depth = (depth === undefined) ? 0 : depth + 1;
  const rightPoint = getRightPoint(mapPointData)

  return (
    <>
      { rightPoint }

      {
        mapPointData.children?.map((child, index) => {
          return (
            <MapPoint 
              key={index}
              mapPointData={child} 
              depth={_depth}
            />
          )
        })
      }
    </>
  )
}