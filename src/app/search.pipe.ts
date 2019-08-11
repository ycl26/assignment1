import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from './app.component';
import { filter } from 'minimatch';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: UserData[], Searchname: string): UserData[] {
    if (!users || !Searchname) {
      return users;
    }
    return users.filter(user => user.name.indexOf(Searchname) !== -1);
    // let result = []
    // for (let index = 0; index < users.length; index++) {
    //   const user = users[index];
    //   if(user.name.indexOf(Searchname) !== -1) {
    //     result.push(user)
    //   }
    // }
    // return result;

    // return filter(users, function(user) { return user.name.indexOf(Searchname) !== -1});
  }

  

}

// function filter(array, predicate ) {
//   let result = []
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if( predicate(element)) {
//       result.push(element)
//     }
//   }
//   return result;
// }
