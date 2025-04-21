import { IAchievement } from "./IAchievement";
import { ICompany } from "./ICompany";
import { IResponsability } from "./IResponsability";
import { IRole } from "./IRole";

export interface IExperience {
  Id_Experience: number;
  Description_Experience: string;
  DateStart_Experience: Date;
  DateEnd_Experience: Date;
  Role_Experience: IRole;
  Company_Experience: ICompany;
  Experience_Responsibilities: IResponsability;
  Experience_Achievements: IAchievement;
}
