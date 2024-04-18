import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { TasksService } from '../../Services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrl: './edittask.component.css'
})
export class EdittaskComponent implements OnInit{
  taskid:any;
  mytask:any;
  constructor(private rout:ActivatedRoute,public tasksservice:TasksService,private router:Router)
  {

  }
  editdata()
  {
    this.tasksservice.editdata(this.taskid,this.mytask);
    this.router.navigate(['/'])
  }
  ngOnInit(): void {
      this.taskid=Number(this.rout.snapshot.paramMap.get('id'));
      //alert(this.taskid);
      this.mytask=this.tasksservice.tasks[this.taskid]
      //alert(this.mytask.Name);
  }
 
}