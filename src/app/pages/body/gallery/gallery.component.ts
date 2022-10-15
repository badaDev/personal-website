import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  myImages = [
    {
      imgName: "../../../../assets/images/KAY_2057.jpg"
    },
    {
      imgName: "../../../../assets/images/KAY_2059.jpg"
    },
    {
      imgName: "../../../../assets/images/KAY_2080.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
