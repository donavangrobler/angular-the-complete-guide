import { Component, signal, computed } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = signal(DUMMY_USERS);
  selectedUserId = signal<string>('');

  selectedUser = computed(() => this.users().find((user) => user.id === this.selectedUserId()));

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
