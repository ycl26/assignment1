import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from './app.component';

@Pipe({
  name: 'searchProgress'
})
export class SearchProgressPipe implements PipeTransform {

  transform(users: UserData[], Searchprogress: string): UserData[] {
    if (!users || !Searchprogress) {
      return users;
    }
return users.filter(user=>user.progress.indexOf(Searchprogress) !==-1);
  }

}
