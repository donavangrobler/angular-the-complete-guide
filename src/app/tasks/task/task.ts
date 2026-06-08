import { Component, input, output } from '@angular/core';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';

interface TaskType {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskType>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
