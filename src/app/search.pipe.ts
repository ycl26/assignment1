import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from './app.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: UserData[], Searchname: string): UserData[] {
    if (!users || !Searchname) {
      return users;
    }
return users.filter(user=>user.name.indexOf(Searchname) !==-1);
  }

}
