import AppMapClient from "./AppMapClient";
import { TMapPoint } from "../lib/abstraction/TMapPoint";

function getRootMapPoint(): TMapPoint {
  const dirTree = require("directory-tree");

  const rootMapPoint: TMapPoint = dirTree(
    "./app", 
    {
      attributes: ["type", "extension"],
      exclude: [/node_modules/, /.git/],
    }
  );

  return rootMapPoint
}

export default function AppMap() {
  const rootMapPoint = getRootMapPoint()

  rootMapPoint.children?.forEach((child) => {
    child.children = undefined
  })

  return (
    <AppMapClient rootMapPoint={rootMapPoint} />
  )
}