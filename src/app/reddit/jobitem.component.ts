import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl  } from '@angular/forms';
import { InlineEditComponent } from '../helpers/inline-edit/inline-edit.component';
import { TextareaEditComponent } from '../helpers/textarea-edit/textarea-edit.component';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { JobService } from '../services/job.service';
import { Jobitem } from './jobitem';


@Component({
  selector: 'jobitem',
  providers: [JobService],
  inputs: ['jobitem'],
  host: {
  	class: 'row'
  },
  template: `
  	<div class="panel panel-default">   	
  		<div class="panel-heading">
        <div class="col-xs-6">
          Applied date: {{jobitem.datetime}}
        </div>
        <div class="pull-right"><button class="btn btn-success" (click)="deleteJob(jobitem.idjobs)"><i class="fa fa-close"></i></button>
        </div>
  		</div>
      <div class="row form-group">
  		 <div class="col-sm-6">
          <inline-edit (change)="saveJob(jobitem)" [(ngModel)]="jobitem.linkurl" label="URL" [required]="true" type="text"></inline-edit>          
       </div>
       <div class="col-sm-6"><inline-edit (change)="saveJob(jobitem)" [(ngModel)]="jobitem.jobtitle" label="Job Title" [required]="true" type="text"></inline-edit></div>
      </div>
      <div class="row form-group">
       <div class="col-sm-6"><inline-edit (change)="saveJob(jobitem)" [(ngModel)]="jobitem.company" label="Company" [required]="true" type="text"></inline-edit></div>
       <div class="col-sm-6"><inline-edit (change)="saveJob(jobitem)" [(ngModel)]="jobitem.email" label="Email" [required]="true" type="text"></inline-edit></div>
      </div>
      <div class="row form-group">  	
  			<div class="col-sm-12">
  				<textarea-edit  (change)="saveJob(jobitem)" [(ngModel)]="jobitem.jobdescription" label="Job Description" [required]="true"></textarea-edit>
  			</div>  		
      </div>  	
  	</div>

   
  `  
})

export class JobitemComponent implements OnInit {

   savedJobitem: Jobitem[];

//  @Output showModal: boolean;

   //When our value changes, we update the database directly.
   saveJob(jobitem){ 
      
     this.jobService.updateJob(jobitem).subscribe(
          j => console.log(j["message"]),
               err => {
                 // Log errors to the console for now.
                console.log(err);
         });
    
   }
 
   deleteJob(jobid){

    this.showModal = true;


    this.jobService.deleteJob(jobid).subscribe(
        j => console.log(j["message"]),
           err => {
           // Log errors to the console for now.
           console.log(err);
      });
   }

   constructor(private jobService: JobService) {
      this.showModal = false;
   }

  ngOnInit() {
  }

  
}
