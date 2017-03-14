import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from './login.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  providers: [AuthService]
})

export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthService) { }


  showForm: boolean;

  initialCount: number = 10;

  toggleLogin(){
     if (this.showForm == false){
          this.showForm = true;
     }else{
        this.showForm = false;
     }
  }

  showFormLogin() {
      //what the fuck.
  }

 

  ngOnInit() {
    this.showForm = false;
  }

}
