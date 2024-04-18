import { Injectable } from '@angular/core';
import { Task } from '../Interfaces/task';
import { DESTRUCTION } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
    tasks: Task []=[

    ]
  constructor() { }
  deletetask(i:number)
  {
    this.tasks.splice(i,1);
  }
  savetask(Name:any,Description :any,date:Date,completed:any)
  {
    this.tasks.push({
      Name,
      Description,
      date,
      completed
    })
  }
  editdata(id :any , item: any )
  {
    this.tasks[id]=item;
  }
  updateTaskStatus(id: number)
  {
    this.tasks[id].completed=!this.tasks[id].completed;
  }
}
