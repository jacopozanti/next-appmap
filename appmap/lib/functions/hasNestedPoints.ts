import { TMapPoint } from "../abstraction/TMapPoint";

export default function hasNestedPoints(mapPoint: TMapPoint) {
  console.log(mapPoint)

  if (
    mapPoint.type !== "directory" || 
    mapPoint.children === undefined
  ) {
    return false
  }

  mapPoint.children.forEach((child) => {
    if (child.type === "directory") return true
  })

  return false
}