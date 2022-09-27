import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: any = [
    {
      skillName: "HTML",
      image: "",
      description: ""
    },
    {
      skillName: "CSS",
      image: "",
      description: ""
    },
    {
      skillName: "Javascript",
      image: "",
      description: ""
    },
    {
      skillName: "Typescript",
      image: "",
      description: ""
    },
    {
      skillName: "Bootstrap",
      image: "",
      description: ""
    },
    {
      skillName: "Angular",
      image: "",
      description: ""
    },
    {
      skillName: "React",
      image: "",
      description: ""
    },
    {
      skillName: "Firebase",
      image: "",
      description: ""
    },
    {
      skillName: "GIT",
      image: "",
      description: ""
    },
    {
      skillName: "Figma",
      image: "",
      description: ""
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
