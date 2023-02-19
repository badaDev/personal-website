import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UpdateServiceService } from '../update/update-service.service';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  isLoading: boolean = false;
  allImages: any[] = [];

  constructor(
    private updateService: UpdateServiceService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages() {
    this.isLoading = true;
    this.updateService.getAllImages().subscribe(
      (res) => {
        this.isLoading = false;
        this.allImages = res;
        this.ref.detectChanges();
      },
      (error) => {
        this.isLoading = false;
        alertify.error("Error fetching images");
      }
    )
  }
  

}
