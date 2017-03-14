import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { JobService } from '../services/job.service';
import { Jobitem } from './jobitem';
import { ModalComponent } from '../helpers/modal/modal.component';




@Component({
  selector: 'reddit',
  template: `  
<div class="col-sm-12">

  <h1>Add a Job</h1>
  <p>Every time you apply to a job, collect the information below.</p>
  <hr/>
 <div class="panel panel-success">
  <div *ngIf="jobitem">{{jobitem.jobtitle}}</div>
  <div class="panel-heading">Add a job.</div>
  <div class="panel-body">
  
  <form [formGroup]="jobForm" (ngSubmit)="addJob()" class="table table-condensed">  

    <div class="form-group col-sm-3">
      <label for="linkurl">Link:</label>
      <input type="text" class="form-control" formControlName="linkurl" aria-describedby="linkdesc" placeholder="Link URL"/>
      <small id="linkdesc" class="form-text text-muted">Link / URL to Job Posting</small>
      <span class="label label-warning" *ngIf="!jobForm.controls['linkurl'].valid && jobForm.controls['linkurl'].touched">
          *Required field.
      </span>
    </div>
    <div class="form-group col-sm-3">
      <label for="job-title">Job Title:</label>
      <input type="text" class="form-control" formControlName="jobtitle" aria-describedby="job-title" placeholder="Enter Job Title"/>
      <small id="job-title" class="form-text text-muted">Job title of posting.</small>
       <span class="label label-warning" *ngIf="!jobForm.controls['jobtitle'].valid && jobForm.controls['jobtitle'].touched">
        *Required field.
      </span>
    </div>

     <div class="form-group col-sm-3">
      <label for="email">Email Address (applied to):</label>
      <input type="text" class="form-control" formControlName="email" aria-describedby="emailaddy" placeholder="Enter Email Address"/>
      <small id="emailaddy" class="form-text text-muted">*Optional: email address.</small>
      <span class="label label-warning" *ngIf="!jobForm.controls['email'].valid && jobForm.controls['email'].touched">
          *Required field.
      </span>
    </div>
    <div class="form-group col-sm-3">
      <label for="company">Company Name (applied to):</label>
      <input type="text" class="form-control" formControlName="company" aria-describedby="co" placeholder="Enter Company Name"/>
      <small id="co" class="form-text text-muted">Company applied to.</small>
        <span class="label label-warning" *ngIf="!jobForm.controls['company'].valid && jobForm.controls['company'].touched">
          *Required field.
          *Required field.
      </span>
    </div>
     <div class="form-group col-sm-12">
      <label for="job-description">Job Description:</label>
      <textarea class="form-control" formControlName="jobdescription" aria-describedby="job-description" placeholder="Enter Job Description"></textarea>
      <small id="job-description" class="form-text text-muted">Enter the Description.</small>      
      <span class="label label-warning" *ngIf="!jobForm.controls['jobdescription'].valid && jobForm.controls['jobdescription'].touched">
          *Required field.
          *Required field.
      </span>
    </div>

    <div class="col-sm-12">
         <button class="btn btn-success btn-lrg" type="submit" [disabled]="!jobForm.valid">Submit</button>
      </div>
  </form>
    </div>
</div>

  </div>
	<div class="col-sm-12">

    <h1>Job Listing</h1>
    <p>Position you've applied to...</p>
    <hr/>
		<jobitem *ngFor="let jobitem of jobitems" [jobitem]="jobitem" (onChange)="sayHello"></jobitem>

	</div>
   <modal [title]="title" [showModal]="showModal" [modalContent]="modalContent" (onClose)="close()"></modal> 
`,
  providers: [JobService]
})
export class RedditComponent implements OnInit {

   @Input()
   selectedJobitem: Jobitem; // Individual Job.

   @Input() showModal: boolean;

   jobitems: Jobitem[]; //Many job items from each job object
   
   errorMessage: string;
   
   datetime = new Date().toDateString(); // get now date.

   public jobForm: FormGroup;
   public submitted: boolean;
   public events: any[] = [];


  constructor(private jobService: JobService) {

    this.createForm();
   

  }

  onChange(){
    console.log("hello");
  }

   createForm(){
      this.jobForm = new FormGroup({      
        'jobtitle': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'jobdescription': new FormControl('',[Validators.required, Validators.minLength(3)]),
        'company': new FormControl('',[Validators.required, Validators.minLength(3)]),
        'linkurl': new FormControl('',[Validators.required, Validators.minLength(3)]),      
        'email': new FormControl('', Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")),
      });
   
   }


  //TODO:  CHANGE TO SUBMIT TO DATABASE VIA API CALL.
  addJob(){

     
      let linkurl = this.jobForm.controls['linkurl'].value;
      let company = this.jobForm.controls['company'].value;
      let jobtitle = this.jobForm.controls['jobtitle'].value;
      let jobdescription = this.jobForm.controls["jobdescription"].value;
      let email = this.jobForm.controls["email"].value;
      let dateval = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');

      let jobitem = new Jobitem(linkurl,jobtitle,jobdescription,company,email,dateval,'');

      // after adding the jobitem to the db, push to the list.
      // this is a observable (like a promise)... do the server thingie, and then respond by pushing item to the list.
      // subscribe is like, then!... so perform this function, then push to array.
      this.jobService.addJob(jobitem).subscribe(
              j => this.jobitems.push(jobitem),
               err => {
                                    // Log errors if any
                                    console.log(err);
                                });

      this.reset();
    
    
     

  }

      
  onClick(jobitem){
    //what do i want to do with the jobitem?
    this.selectedJobitem = jobitem;
    console.log("save it here");
  }
    
 
   ngOnInit(){
    //Note to self:  Have to initialize the variable or it will not produce any results.
      this.jobitems = [];
      this.loadJobs();
   }

  
 
   loadJobs(){
      this.jobService.getJobs()
                           .subscribe(
                               j => this.jobitems = j, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
      
   }


  //Clears form fields of any data.
  reset() {
    this.createForm();
  }

}
