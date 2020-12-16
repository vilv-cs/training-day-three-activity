import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MyclientgroupsComponent } from './pages/myclientgroups/myclientgroups.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-profile', component: MyprofileComponent },
  { path: 'my-clients-groups', component: MyclientgroupsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
