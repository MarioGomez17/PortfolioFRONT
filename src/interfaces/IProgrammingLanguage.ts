import { IDevelopmentArea } from "./IDevelopmentArea";

export interface IProgrammingLanguage {
  Id_ProgrammingLanguage: number;
  Name_ProgrammingLanguage: string;
  Description_ProgrammingLanguage: string;
  Logo_ProgrammingLanguage: string;
  DevelopmentArea_ProgrammingLanguage: IDevelopmentArea;
}
