import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Jobitem } from './jobitem.model';

@Component({
  selector: 'job-form',
  template: `
  	<form [formGroup]="jobForm" novalidate (ngSubmit)="addJob(jobForm.value, jobForm.valid)" class="table table-bordered table-condensed">
    	<div class="form-group col-sm-4">
      <label for="linkurl">Link:</label>
      <input type="text" class="form-control" formControlName="linkurl" aria-describedby="linkdesc" placeholder="Link URL"/>
      <small id="linkdesc" class="form-text text-muted">Link / URL to Job Posting</small>
  </div>
  <div class="form-group col-sm-4">
    <label for="job-title">Job Title:</label>
    <input type="text" class="form-control" formControlName="jobtitle" aria-describedby="job-title" placeholder="Enter Job Title"/>
    <small id="job-title" class="form-text text-muted">Job title of posting.</small>
  </div>

   <div class="form-group col-sm-4">
    <label for="company">Company Name (applied to):</label>
    <input type="text" class="form-control" formControlName="company" aria-describedby="co" placeholder="Enter Company Name"/>
    <small id="co" class="form-text text-muted">Company applied to.</small>
  </div>
   <div class="form-group col-sm-12">
    <label for="job-description">Job Description:</label>
    <textarea class="form-control" formControlName="jobdescription" aria-describedby="job-description" placeholder="Enter Job Description"></textarea>
    <small id="job-description" class="form-text text-muted">Enter the Description.</small>
  </div>
  <div class="col-sm-12">
  		 <button class="btn btn-default btn-lrg" type="submit">Submit</button>
  	</div>
	</form>
`
})
export class JobFormComponent implements OnInit {

  
   jobitems: Jobitem[];

   datetime = "01/01/01";

   public jobForm: FormGroup;
   public submitted: boolean;
   public events: any[] = [];

   //this.jobForm = this.fb.group({
  //		jobtitle: ["", Validators.required],
 // 		jobdescription: ["", Validators.required],
  	//	company: ["",Validators.required],
  	//	linkurl: ["",Validators.required]
   //});


  constructor(public fb: FormBuilder) { 

  }

  addJob(model: Jobitem, isValid: boolean){
  	
  	this.submitted = true; 
  	
  	
    let jobdescription = model.jobdescription;
    let company = model.company;
    let linkurl = model.linkurl;
    let jobtitle = model.jobtitle;

  //	this.jobitems.push(new Jobitem(linkurl, jobtitle, jobdescription, company, new Date().toDateString()));
    
  }

	

  ngOnInit() {
	

      this.jobForm = this.fb.group({
          jobtitle: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
          jobdescription: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
          company: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
          linkurl: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
        });
  	
  	
  }

}
