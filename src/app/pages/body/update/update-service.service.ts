import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiConfig } from 'src/app/core/apiConfig';
import { UpdateGallery, UpdateProject, UpdateSkill } from '../models/update-site-interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

constructor(
  private httpClient: HttpClient,
  private apiConfig: ApiConfig
) { }

  addSkills(data: UpdateSkill) {
    return this.httpClient.post(this.apiConfig.addSkills, data);
  }

  getAllSkills() {
    return this.httpClient.get(this.apiConfig.addSkills)
      .pipe(
        map(skills => {
          const skillsArray: any = [];
          for (const key in skills) {
            if (skills.hasOwnProperty(key)) {
              skillsArray.push({ ...skills[key], id: key })
            }
          }
          return skillsArray;
        })
      )
  }

  addImage(data: UpdateGallery) {
    return this.httpClient.post(this.apiConfig.addImageToGalerry, data);
  }

  getAllImages() {
    return this.httpClient.get(this.apiConfig.addImageToGalerry)
      .pipe(
        map(images => {
          const imageArray: any = [];
          for (const key in images) {
            if (images.hasOwnProperty(key)) {
              imageArray.push({ ...images[key], id: key })
            }
          }
          return imageArray;
        })
      )
  }

  addProject(data: UpdateProject) {
    return this.httpClient.post(this.apiConfig.projects, data);
  }

  getAllProjects() {
    return this,this.httpClient.get(this.apiConfig.projects)
      .pipe(
        map(projects => {
          const projectArray: any = [];
          for (const key in projects) {
            if (projects.hasOwnProperty(key)) {
              projectArray.push({ ...projects[key], id: key });
            }
          }
          return projectArray;
        })
      )
  }
}
