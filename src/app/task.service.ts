import { Injectable } from '@angular/core';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private idCounter = 1;
  private tasks: Task[] = [];

  constructor() {}

  public getTasks(): Task[] {
    return this.tasks;
  }

  public addTask(title: string) {
    if (title) {
      const newTask: Task = {
        id: this.idCounter++,
        title: title,
        isCompleted: true,
      };
      this.tasks.push(newTask);
      console.log(this.tasks);
    }
  }

  public toggleTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.isCompleted = !task.isCompleted;
    }
    console.log(this.tasks);
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
