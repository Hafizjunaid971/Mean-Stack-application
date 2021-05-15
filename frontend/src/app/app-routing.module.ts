import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [


  {
    path: "",
    redirectTo: "listings",
    pathMatch: "full"
  },
  {
  component:AboutComponent, path:'about'

  },
  {
    component:ContactusComponent, path:'contact'

  },
  {
    component:GalleryComponent, path:'gallery'

},
  {
    path: "listings",
    loadChildren: () =>
      import("./listing/listing.module").then(m => m.ListingModule)
      //ListingModule export huwa ha yahan listing routing module se
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
