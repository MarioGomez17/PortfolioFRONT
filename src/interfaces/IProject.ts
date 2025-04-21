import { ITechnology } from "./ITechnology";

export interface IProject {
  Id_Project: number;
  Name_Project: string;
  Description_Project: string;
  URL_Project: string;
  Technologies_Project: Array<ITechnology>;
}
