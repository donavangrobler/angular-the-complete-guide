import { Component, input, computed, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  name = input.required<string | undefined>();
  userId = input.required<string | undefined>();
  isAddingTask = signal(false);

  constructor(private tasksService: TasksService) {}

  selectedUserTasks = computed(() => this.tasksService.getUserTasks(this.userId()!));

  onAddTask() {
    this.isAddingTask.set(true);
  }
  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
