import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from './app.component';

@Pipe({
  name: 'usersWithM'
})
export class UsersWithMPipe implements PipeTransform {

  transform(users: UserData[], active: boolean): UserData[] {
    if (!users || !active) {
      return users;
    }
    return users.filter(user => user.name.toUpperCase().startsWith('M'));
  }
}
