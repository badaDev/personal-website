import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';

const routes: Routes = [
  // {path: '', redirectTo: 'body'},
  {
    path: '', component: BodyComponent,
    children: [
      { path: "", redirectTo: 'home', pathMatch: "prefix" },
      { 
        path: 'home', 
        loadChildren: 
        () => import('./pages/body/home/home.module').then(m => m.HomeModule) 
      },
      { 
        path: 'about', 
        loadChildren: () => import('./pages/body/about/about.module').then(m => m.AboutModule) 
      },
      { path: 'gallery', 
        loadChildren: () => import('./pages/body/gallery/gallery.module').then(m => m.GalleryModule) 
      },
      { 
        path: 'projects', 
        loadChildren: () => import('./pages/body/projects/projects.module').then(m => m.ProjectsModule) 
      },
      { 
        path: 'contact', 
        loadChildren: () => import('./pages/body/contact/contact.module').then(m => m.ContactModule) 
      },
      { path: 'update', 
        loadChildren: () => import('./pages/body/update/update.module').then(m => m.UpdateModule) 
      },
    ]
  },
  
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
