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
  activePage = 1;
  order = undefined;

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
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  onOrderBy(orderBy: any) {
    this.order = orderBy;

  }

  onChange() {
    let countUserPage = +this.countUserPage;
    let countOfUsers = this.users.length;
    // call computePages
    // inner methos var : countUserPage = countUserPage
    // inner method var : countOfUsers = countOfUsers
    this.pages = this.computePages(countUserPage, countOfUsers);
    this.startFromUser = (this.activePage - 1) * this.countUserPage;
    this.endOnUser = this.activePage * this.countUserPage;
  }

  onPageClick(page: number) {
    if (page > 1) {
      this.startFromUser = (page - 1) * this.countUserPage;
      this.endOnUser = page * this.countUserPage;
    } else {
      this.startFromUser = 0;
      this.endOnUser = this.countUserPage;
    }
    this.activePage = page;
  }

  onPreviousClick() {
    this.activePage = this.activePage - 1;
    this.startFromUser = this.startFromUser - this.countUserPage;
    this.endOnUser = this.endOnUser - this.countUserPage;
  }

  onNextClick() {
    this.activePage = this.activePage + 1;
    this.startFromUser = this.startFromUser + this.countUserPage;
    this.endOnUser = this.endOnUser + this.countUserPage;
  }

  onFirstClick() {
    this.activePage = 1;
    this.startFromUser = 0;
    this.endOnUser = this.countUserPage;
  }

  onLastClick() {
    let countUserLastPage = this.users.length % this.countUserPage || this.countUserPage;
    this.activePage = this.pages.length;
    this.startFromUser = this.users.length - countUserLastPage;
    this.endOnUser = this.users.length;
  }

}


function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id,
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
  id: number;
  name: string;
  progress: string;
  color: string;
}
