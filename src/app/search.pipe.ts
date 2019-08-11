import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from './app.component';
import { filter } from 'minimatch';

@Pipe({
  name: 'searchUserBy'
})
export class SearchPipe implements PipeTransform {

  transform(users: UserData[], userPropertyName: string, value: string,): UserData[] {
    if (!users || !value || !userPropertyName) {
      return users;
    }
    return users.filter(user => indexOfCaseInsensitive( user[userPropertyName], value) !== -1);
  }
}

function indexOfCaseInsensitive(str, toFind) {
  return str.toUpperCase().indexOf(toFind.toUpperCase());
}
