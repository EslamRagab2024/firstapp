import { Component } from '@angular/core';
import { TasksService } from '../../Services/tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  constructor(public tasksservice:TasksService ,private router:Router)
  {

  }
  savetask(Name:any,Description:any,date:any)
  {
    let completed:boolean=false;
    this.tasksservice.savetask(Name.value,Description.value,date.value,completed);
    this.router.navigate(['/'])
  }
}
