import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {User} from '../../models/User'

@Component({
    selector: 'app-user',
    //template: '<h2>John Doe</h2>'  -fara template html seperat
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']     //si asta se poate aici, cla la html, fara fisier extern
})

export class UserComponent implements OnInit{
    
    //proprietati
    user: User; //user cu u mic ii de tip User cu u mare, definit in interfata
    
    //metode
    constructor() {
        
    }

    ngOnInit() {
        this.user = {
            nume: 'Popescu',
            prenume: 'Ion',
            email: ''
        }
    }

}

