import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthService } from '../auth.service';
 
@Component({
    selector: "login-form",
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
 
export class LoginComponent implements OnInit {

    model: any = {};
    loading: boolean = false;
    error: string = '';
 


    constructor(
        private router: Router,
        private authenticationService: AuthService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
       this.loading = true;
   /*    this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/jobs']);                    
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
        });
     */ 
    }



}