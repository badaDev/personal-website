import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  myProjects = [
    {
      id: 1,
      projectName: "Mobile Hair Salon",
      projectImg: "../../../../assets/projects/Screenshot (93).png",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quo! Minus quae culpa consequuntur dolores velit at, laborum voluptatum delectus maiores libero praesentium assumenda amet voluptatibus nulla quisquam qui voluptates.",
      techUsed: "HTML, CSS, JS, Bootstrap"
    },
    {
      id: 2,
      projectName: "Mobile Hair Salon",
      projectImg: "../../../../assets/projects/Screenshot (93).png",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quo! Minus quae culpa consequuntur dolores velit at, laborum voluptatum delectus maiores libero praesentium assumenda amet voluptatibus nulla quisquam qui voluptates.",
      techUsed: "HTML, CSS, JS, Bootstrap"
    },
    {
      id: 3,
      projectName: "Mobile Hair Salon",
      projectImg: "../../../../assets/projects/Screenshot (93).png",
      projectDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quo! Minus quae culpa consequuntur dolores velit at, laborum voluptatum delectus maiores libero praesentium assumenda amet voluptatibus nulla quisquam qui voluptates.",
      techUsed: "HTML, CSS, JS, Bootstrap"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
