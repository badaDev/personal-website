import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './pages/shared/sidenav/sidenav.component';
import { BodyComponent } from './pages/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
