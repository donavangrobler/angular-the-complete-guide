import { Component, input, computed, signal } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

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
  tasks = signal([
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]);

  selectedUserTasks = computed(() => this.tasks().filter((task) => task.userId === this.userId()));
  onCompleteTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
  onAddTask() {
    this.isAddingTask.set(true);
  }
  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
  onAddNewTask(newTask: { title: string; summary: string; dueDate: string }) {
    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: `t${Math.random()}`,
        userId: this.userId()!,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate,
      },
    ]);
    this.isAddingTask.set(false);
  }
}
