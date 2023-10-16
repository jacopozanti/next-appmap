import AppMapClient from "./AppMapClient";
import { MapPoint } from "./AppMapAbstractions";

function getAppMap(): MapPoint {
  const dirTree = require("directory-tree");

  const root: MapPoint = dirTree(
    "./app", 
    {
      attributes: ["type", "extension"],
      extensions: /\.(js|ts|tsx)$/,
      exclude: [/node_modules/, /.git/],
    }
  );

  return root
}

export default function AppMap() {
  const root = getAppMap()

  root.children?.forEach((child) => {
    child.children = undefined
  })

  return (
    <AppMapClient root={root} />
  )
}