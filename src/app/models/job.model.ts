export class Job {

	linkurl: string;
	jobtitle: string;
	jobdescription: string;
	company: string;
	email: string;
	datetime: string;

	constructor(linkurl: string, jobtitle: string, jobdescription: string, company: string, email: string, datetime: string) {
		this.linkurl = linkurl;
		this.jobtitle = jobtitle;
		this.jobdescription = jobdescription;
		this.company = company;
		this.email = email;
		this.datetime = datetime;
 	}

}
