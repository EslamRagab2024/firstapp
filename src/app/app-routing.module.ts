import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { EdittaskComponent } from './Components/edittask/edittask.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add-task',component:AddTaskComponent},
  {path:'edittask/:id',component:EdittaskComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
