import { IDivision } from "./IDivision";
import { IProgrammingLanguage } from "./IProgrammingLanguage";

export interface ITechnology {
  Id_Technology: number;
  Name_Technology: string;
  Logo_Technology: string;
  ProgrammingLanguage_Technology: IProgrammingLanguage;
  Division_Technology: IDivision;
}
