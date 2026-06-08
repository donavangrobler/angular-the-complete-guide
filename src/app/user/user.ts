import { Component, computed, EventEmitter, Input, input, output } from '@angular/core';

interface UserType {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter();

  // @Input({ required: true }) user!: { id: string; avatar: string; name: string };

  user = input.required<UserType>();
  selected = input<boolean>(false);
  select = output<string>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
