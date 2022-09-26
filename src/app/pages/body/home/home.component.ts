import { Component, OnInit } from '@angular/core';

import Typewriter from 't-writer.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#FF0063'
    })
    
    writer
      .type('Frontend Developer')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(18)
      .type('Coding Enthusiast')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(17)
      .type('Coach')
      .rest(500)
      .clear()
      .start()
  }

}
