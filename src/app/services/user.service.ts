import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'; 

import { User } from '../models/User';
@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        nume: 'Hadarau',
        prenume: 'Bogdan',
        email: 'hadarau.bogdan@test.com',
        eActiv: true,
        inregistrare: new Date('01/02/2018 08:30:00'),
        ascunde: true
      },
        {
          nume: 'Grecu',
          prenume: 'Octavian',
          email: 'grecu.octavian@test.com',
          eActiv: false,
          inregistrare: new Date('11/02/2017 08:30:00'),
          ascunde: true
        },
          {
            nume: 'Sandru',
            prenume: 'Vlad',
            email: 'sandru.vlad@test.com',
            eActiv: true,
            inregistrare: new Date('01/01/2017 08:30:00'),
            ascunde: true
          }
    ];
   }

   getData(){
     this.data = new Observable(observer => {
       setTimeout(() => {
        observer.next(1);
       }, 1000);

       setTimeout(() => {
        observer.next(2);
       }, 2000);

       setTimeout(() => {
        observer.next(3);
       }, 3000);

       setTimeout(() => {
        observer.next(4);
       }, 3000);

     });

     return this.data;
   }

   getUsers(): Observable<User[]> {
    return of(this.users);
   }

   addUser(user: User) {
      this.users.unshift(user);
   }

}
