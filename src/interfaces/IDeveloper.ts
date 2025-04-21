import { ICity } from "./ICity";
import { IEducation } from "./IEducation";
import { IExperience } from "./IExperience";
import { ILanguage } from "./ILanguage";
import { IProgrammingLanguage } from "./IProgrammingLanguage";
import { IProject } from "./IProject";
import { ISkill } from "./ISkill";
import { ITechnology } from "./ITechnology";

export interface IDeveloper {
  Id_Developer: number;
  Name_Developer: string;
  LastName_Developer: string;
  Email_Developer: string;
  Phone_Developer: string;
  LinkedinName_Developer: string;
  LinkedinUrl_Developer: string;
  GitHubName_Developer: string;
  GitHubUrl_Developer: string;
  City_Developer: ICity;
  Description_Developer: string;
  ProgrammingLanguages_Developer: Array<IProgrammingLanguage>;
  Technologies_Developer: Array<ITechnology>;
  Languages_Developer: Array<ILanguage>;
  Education_Developer: Array<IEducation>;
  Skills_Developer: Array<ISkill>;
  Projects_Developer: Array<IProject>;
  Experience_Developer: Array<IExperience>;
}
