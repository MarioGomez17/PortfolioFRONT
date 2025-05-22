import { IAcademy } from "./IAcademy";
import { IEducationAchievement } from "./IEducationAchievement";
import { IEducationPlace } from "./IEducationPlace";
import { IEducationType } from "./IEducationType";

export interface IEducation {
  Id_Education: number;
  DegreeName_Education: string;
  Description_Education: string;
  Date_Education: string;
  DegreeFile_Education: string;
  Academy_Education: IAcademy;
  EducationType_Education: IEducationType;
  EducationPlace_Education: IEducationPlace;
  Achievements_Education: Array<IEducationAchievement>;
}