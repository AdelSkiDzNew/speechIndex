import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-authentication',
    templateUrl: '../views/authentication.component.html',
    styleUrls: ['../css/authentication.component.css','../css/main.css','../css/util.css']
})
export class AuthenticationComponent implements OnInit {
    
    constructor(private _router:Router) { }

    ngOnInit(): void { }



    redirect()
    {
        this._router.navigateByUrl('home');
    }
}
