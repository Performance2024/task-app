import { Component } from '@angular/core';
import { TaskService } from '../api/task.service';
import { Task } from '../model/task';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { saxClockOutline } from '@ng-icons/iconsax/outline';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [TaskService],
  viewProviders: [provideIcons({ saxClockOutline })],
})
export class TaskListComponent {
  tasks: Task[] = [];
  isFetchingData: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.isFetchingData = true;
    this.getAllTask();
  }

  getAllTask = () => {
    this.taskService.getTasks('/api/tasks').subscribe((data: Task[]) => {
      this.tasks = data;
      if (this.tasks.length != 0) {
        this.isFetchingData = false;
      }
    });
  };
}
