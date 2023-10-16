"use client"

import { MapPoint } from "./AppMapAbstractions"

interface AppMapClientProps {
  root: MapPoint
}

export default function AppMapClient({ root }: AppMapClientProps) {
  return (
    <>{ JSON.stringify(root) }</>
  )
}