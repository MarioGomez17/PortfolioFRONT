import { ITechnology } from "./ITechnology";

export interface IProject {
  Id_Project: number;
  Name_Project: string;
  Description_Project: string;
  URL_Project: string;
  GitHubUrl_Project: string;
  Image_Project: string;
  IsFeatured_Project: boolean;
  Technologies_Project: Array<ITechnology>;
}
