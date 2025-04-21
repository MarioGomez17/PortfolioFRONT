import { ICountry } from "./ICountry";

export interface IDepartment {
  Id_Department: number;
  Name_Department: string;
  Country_Department: ICountry;
}
