import { ICity } from "./ICity";
import { IContactInformation } from "./IContactInformation";
import { IControlVersion } from "./IControlVersion";
import { IEducation } from "./IEducation";
import { IExperience } from "./IExperience";
import { IIdeAndTool } from "./IIdeAndTool";
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
  Role_Developer: string;
  ShortProfile_Developer: string;
  LongProfile_Developer: string;
  City_Developer: ICity;
  ProgrammingLanguages_Developer: Array<IProgrammingLanguage>;
  Technologies_Developer: Array<ITechnology>;
  IdesAndTools_Developer: Array<IIdeAndTool>;
  ControlsVersion_Developer: Array<IControlVersion>;
  Skills_Developer: Array<ISkill>;
  Languages_Developer: Array<ILanguage>;
  Education_Developer: Array<IEducation>;
  Projects_Developer: Array<IProject>;
  Experience_Developer: Array<IExperience>;
  ContactsInformation_Developer: Array<IContactInformation>;
}
