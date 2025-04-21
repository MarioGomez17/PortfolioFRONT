import { ICity } from "./ICity";

export interface ICompany {
  Id_Company: number;
  Name_Company: string;
  Boss_Company: string;
  City_Company: ICity;
}
