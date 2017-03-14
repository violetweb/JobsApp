export class Jobitem {

	linkurl: string;
	jobtitle: string;
	jobdescription: string;
	company: string;
	datetime: string;
	email: string;
	id: string;


	constructor(linkurl: string, jobtitle: string, jobdescription: string, email: string, company: string, datetime: string, id: string) {
		this.linkurl = linkurl;
		this.jobtitle = jobtitle;
		this.jobdescription = jobdescription;
		this.email = email;
		this.company = company;
		this.datetime = datetime;
		this.id = id;
 	}
}
