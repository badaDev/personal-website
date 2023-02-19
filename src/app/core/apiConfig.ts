import { Injectable } from "@angular/core";
@Injectable()
export class ApiConfig {
  public addSkills: string;
  public addImageToGalerry: string;
  public projects: string;
  public message: string;

  constructor() {
    this.addSkills = "https://portfolio-website-f60d7-default-rtdb.firebaseio.com/skills.json";
    this.addImageToGalerry = "https://portfolio-website-f60d7-default-rtdb.firebaseio.com/gallery.json";
    this.projects = "https://portfolio-website-f60d7-default-rtdb.firebaseio.com/projects.json";
    this.message = "https://portfolio-website-f60d7-default-rtdb.firebaseio.com/messages.json";
      }
}
