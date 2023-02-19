import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UpdateServiceService } from '../update/update-service.service';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isLoading: boolean = false;
  allProjects: any[] = [];

  constructor(
    private updateService: UpdateServiceService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.isLoading = true;
    this.updateService.getAllProjects().subscribe(
      (res) => {
        this.isLoading = false;
        this.allProjects = res;
        this.ref.detectChanges();
        
      },
      (error) => {
        this.isLoading = false;
        alertify.error("Error fetching projects");
      }
    )
  }


}
