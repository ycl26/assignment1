import { Component, OnInit } from '@angular/core';

const INITIAL_USERS_COUNT_PAGE = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['./app.component.css']

})
export class AppComponent implements OnInit {
  countUserPage: number = INITIAL_USERS_COUNT_PAGE;
  startFromUser = 0;
  endOnUser: number = INITIAL_USERS_COUNT_PAGE;
  users: UserData[] = [];
  pages = [];
  activePage = 0;
  order = undefined;
  rigthBalls = [0, 1, 2 ,3 , 4 ,5 ];
   leftBalls  = [];

  constructor() {
    this.users = this.createUsers();
  }

  private createUsers() {
    let users = [];
    for (let i = 1; i <= 100; i++) {
      users.push(createNewUser(i));
    }
    return users;
  }

  ngOnInit() {
    // get the users lenght to handle pagination logic
    let countUserPage = this.countUserPage;
    let countOfUsers = this.users.length;
    this.pages = this.computePages(countUserPage, countOfUsers);
  }

  private computePages(countUserPage: number, countOfUsers: number) {
    let totalPages = countOfUsers / countUserPage;
    let pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  onOrderBy(orderBy: any) {
    this.order = orderBy;

  }

  onChange() {
    // parse to Int from String value that ngModel setted
    this.countUserPage = +this.countUserPage;
    // call computePages
    // inner methos var : countUserPage = countUserPage
    // inner method var : countOfUsers = countOfUsers
    this.pages = this.computePages(this.countUserPage, this.users.length);
    const page = Math.floor(this.startFromUser/this.countUserPage);
    this.onPageClick(page);
  }

  onPageClick(page: number) {
    this.activePage = page;
    this.startFromUser = this.activePage * this.countUserPage;
    this.endOnUser = this.startFromUser + this.countUserPage;
  }

  onMoveRightToLeft(ball) {
    this.rigthBalls = this.rigthBalls.filter( item => item !== ball);
    this.leftBalls.push(ball);
  }

  onMoveLeftToRight(ball) {
    this.leftBalls = this.leftBalls.filter( item => item !== ball);
    this.rigthBalls.push(ball);
  }
}


function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: '' + id,
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
