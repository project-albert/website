import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { TogetherHomeComponent } from "./together/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'together', component: TogetherHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
