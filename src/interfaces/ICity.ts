import { IDepartment } from "./IDepartment";

export interface ICity {
  Id_City: number;
  Name_City: string;
  UrlMaps_City: string;
  Department_City: IDepartment;
}
