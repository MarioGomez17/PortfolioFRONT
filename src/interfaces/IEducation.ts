import { IAcademy } from "./IAcademy";
import { IEducationType } from "./IEducationType";

export interface IEducation {
  Id_Education: number;
  DegreeName_Education: string;
  DegreeFile_Education: string;
  Academy_Education: IAcademy;
  EducationType_Education: IEducationType;
}
