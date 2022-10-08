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
      image: "../../../../assets/skills/html.png",
      description: "HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items.",
      link: "https://en.wikipedia.org/wiki/HTML"
    },
    {
      skillName: "CSS",
      image: "../../../../assets/skills/css3.png",
      description: "CSS is the language we use to style an HTML document. It describes how HTML elements should be displayed.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/CSS"
    },
    {
      skillName: "Javascript",
      image: "../../../../assets/skills/javascript.png",
      description: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. It is most well-known as the scripting language for Web pages",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      skillName: "Typescript",
      image: "../../../../assets/skills/typescript.jfif",
      description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale",
      link: "https://www.typescriptlang.org/"
    },
    {
      skillName: "Bootstrap",
      image: "../../../../assets/skills/bootstrap.png",
      description: "Bootstrap is a free front-end framework for faster, easier and responsive web development",
      link: "https://getbootstrap.com/"
    },
    {
      skillName: "Angular",
      image: "../../../../assets/skills/angular.png",
      description: "Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.",
      link: "https://angular.io/docs"
    },
    {
      skillName: "React",
      image: "../../../../assets/skills/React.png",
      description: " React is a JavaScript library that aims to simplify the development of visual interfaces",
      link: "https://reactjs.org/docs/getting-started.html"
    },
    {
      skillName: "Firebase",
      image: "../../../../assets/skills/firebase.png",
      description: "Firebase is an app development platform that helps you build and grow apps",
      link: "https://firebase.google.com/?gclid=Cj0KCQjwyt-ZBhCNARIsAKH1174pmA2W12Dv3x4ULObSJd73OvGLMS2xldCBmlK440Rjo5HUqu8JlGsaAlXvEALw_wcB&gclsrc=aw.ds"
    },
    {
      skillName: "GIT",
      image: "../../../../assets/skills/git.png",
      description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency",
      link: "https://git-scm.com/"
    },
    {
      skillName: "Figma",
      image: "../../../../assets/skills/figma.png",
      description: "Figma is a collaborative web application for interface design",
      link: "https://www.figma.com"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
