import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoctelComponent } from './pages/coctel/coctel.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PlanesComponent } from './pages/planes/planes.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'coctel/:id',component:CoctelComponent},
  {path:'planes',component:PlanesComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
