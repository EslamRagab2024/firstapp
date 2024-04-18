import { Component } from '@angular/core';
import { TasksService } from '../../Services/tasks.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public tasksservice:TasksService)
  {

  }
  formatDate(date: any): string {
    // You can customize the date formatting logic here
    return date ? new Date(date).toLocaleDateString() : '';
  }
  deletetask(i:number)
  {
    this.tasksservice.deletetask(i);
  }
  updateTaskStatus(i:number)
  {
    this.tasksservice.updateTaskStatus(i);
  }
}
