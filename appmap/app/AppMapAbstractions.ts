export type FileType = "file" | "directory" | undefined

export interface MapPoint {
  path: string;
  name: string;
  type: FileType;
  children?: MapPoint[];
}

export interface File extends MapPoint {
  type: "file";
  children?: File[];
}

export interface Directory extends MapPoint {
  type: "directory";
  children?: File[];
}