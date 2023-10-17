import { TMapPointType } from "./TMapPointType";

export type TMapPoint = {
  path: string;
  name: string;
  type: TMapPointType;
  children?: TMapPoint[];
}