import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../../task.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  public tasks: Task[] = [];
  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks() {
    this.tasks = [...this.taskService.getTasks()];
  }

  public addTask(value: string) {
    this.taskService.addTask(value);
    this.getTasks();
  }
  public toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }
  public deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.getTasks();
  }
}
