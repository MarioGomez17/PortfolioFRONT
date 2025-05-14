import { IDevelopmentArea } from "./IDevelopmentArea";
import { IProgrammingLanguage } from "./IProgrammingLanguage";

export interface ITechnology {
  Id_Technology: number;
  Name_Technology: string;
  Description_Technology: string;
  Logo_Technology: string;
  DevelopmentArea_Technology: IDevelopmentArea;
  ProgrammingLanguage_Technology: IProgrammingLanguage;
}
