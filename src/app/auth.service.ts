import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

	public token: string;

	constructor(private http: Http){
		//var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		//this.token = currentUser && currentUser.token;
	}

	login(){
		//localStorage.setItem('currentUser','test','test');
	}



	logout(): void{
		//this.token = null;
		//localStorage.removeItem('currentUser');
	}

	public authenticated() {
    	//if (localStorage.getItem('currentUser') !== null ){
    //		return true;
    //	}
    	//return false;
    	
  	}

  	ngOnInit(){
  	//	this.currentUser = {username: 'valerie', password: 'test'}
  	}

}
