import { Component, 
         OnInit, 
         ChangeDetectionStrategy, 
         Output, 
         EventEmitter, 
         HostListener 
        } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from "@angular/animations";
import { navbarData } from './nav-data';
import { SidenavToggle } from './sidenav-toggle';




@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SidenavToggle> = new EventEmitter();

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  collapsed = false;
  screenWidth = 0
  navData = navbarData;
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
