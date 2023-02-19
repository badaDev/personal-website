import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetSkills } from '../models/getSkills';
import { UpdateServiceService } from '../update/update-service.service';

import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isLoading = false;
  allSkills: any[] = [];

  constructor(
    private updateService: UpdateServiceService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllSkills();
  }

  getAllSkills() {
    this.isLoading = true;
    this.updateService.getAllSkills().subscribe(
      (res) => {
        this.isLoading = false;
        this.allSkills = res;
        this.ref.detectChanges();
      },
      (error) => {
        this.isLoading = false;
        alertify.error("Error fetching skills");
      }
    )
    this.changeIsLoading();
    console.log(this.isLoading, 'is loading');
  }

  changeIsLoading() {
    this.isLoading = false;
  }
}
