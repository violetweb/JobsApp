import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Jobitem } from '../reddit/jobitem'; // Job item.
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class JobService {
      
 	private baseUrl = "http://localhost:3000/api/jobs";  // URL to web API


 	constructor (private http: Http) {} // 
 

 	getJobs (): Observable<Jobitem[]> {
 
       return this.http.get(this.baseUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
 	}
      
 	private extractData(res: Response) {
       let body = res.json();      
       return body;
 	}
 

  	 // Add a new comment
    addJob (body: Object): Observable<Jobitem[]> {

        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.baseUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
                         
    }   


    updateJob (body: Object): Observable<Jobitem[]> {
        let bodyString = JSON.stringify(body); 
        //DO NOT REMOVE THE UTF-8... OR IT WONT WORK!!!! BELIEVE IT OR NOT. WHY DO THE OTHERS WORK???
        let headers      = new Headers({ 'Content-Type': 'application/json; charset=utf-8' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        let id = body["idjobs"];
        let url = this.baseUrl + "/" + id;     

        let result = this.http.put(url, bodyString, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
                         
         return result;
         



    }   

    deleteJob (id:string): Observable<Jobitem[]> {
        return this.http.delete(`${this.baseUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

 	private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
 	}
}