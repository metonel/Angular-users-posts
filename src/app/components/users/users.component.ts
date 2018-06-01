import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User [];   //matrice de useri care ii definita mai jos
  user: User = {    //un user gol, care ii folosit cand se adauga un user nou
    nume: '',
    prenume: '',
    email: ''
  };
  arataTot: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  arataFormUser: boolean = true;
  @ViewChild('userForm')form: any;  //userForm ii variabila definita in form, ii un identificator pt form
  data: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

      // ii luam din user.service.ts acuma
      // this.users = [
      //   {
      //     nume: 'Hadarau',
      //     prenume: 'Bogdan',
      //     email: 'hadarau.bogdan@test.com',
      //     eActiv: true,
      //     inregistrare: new Date('01/02/2018 08:30:00'),
      //     ascunde: true
      //   },
      //     {
      //       nume: 'Grecu',
      //       prenume: 'Octavian',
      //       email: 'grecu.octavian@test.com',
      //       eActiv: false,
      //       inregistrare: new Date('11/02/2017 08:30:00'),
      //       ascunde: true
      //     },
      //       {
      //         nume: 'Sandru',
      //         prenume: 'Vlad',
      //         email: 'sandru.vlad@test.com',
      //         eActiv: true,
      //         inregistrare: new Date('01/01/2017 08:30:00'),
      //         ascunde: true
      //       }
      // ];
      this.userService.getData().subscribe(data => {
        console.log(data);
      });
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      });

    
    }
    
    arata(user: User) {
      user.ascunde = !user.ascunde; //asta se putea si pune direct in buton, fara sa mai cheme o functie sa o faca
    }

    // creareUser() {
    //   this.user.eActiv = true;
    //   this.user.inregistrare = new Date();
    //   this.users.unshift(this.user); //unshift ii ca push, dar adauga la inceput, nu la sfarsit
    //   this.user= {    //pentru a goli form-ul dupa ce se adauga un user
    //     nume: '',
    //     prenume: '',
    //     email: ''
    //   };
    // }

    //adaugare user cu template driven form:

    onSubmit({value, valid}: {value: User, valid: boolean}) {
      if(!valid){
        console.log('invalid');  //e setat butonul sa fie inactiv daca nu se valideaza form-ul, dar se putea lasa activ si aici da un mesaj de eroare
      } else {
        value.eActiv = true;
        value.inregistrare = new Date();
        value.ascunde = true;
        //this.users.unshift(value);
        this.userService.addUser(value);
        this.form.reset();
      } 
    }
    
  }
  