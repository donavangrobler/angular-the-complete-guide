import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-the-complete-guide');
  users = signal(DUMMY_USERS);

  onSelectUser(id: string) {
    console.log('Selected user ID:', id);
  }
}
