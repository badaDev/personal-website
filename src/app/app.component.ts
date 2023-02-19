import { Component } from '@angular/core';
import { SidenavToggle } from './pages/shared/sidenav/sidenav-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nurudeen-bada';

  isSideNavCollapsed = false;
  screenWidth = 0

  


  onToggleSideNav(data: SidenavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
}
}
