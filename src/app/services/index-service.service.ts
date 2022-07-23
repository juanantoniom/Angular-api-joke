import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexServiceService {

   
  

  private api_url: string ="https://v2.jokeapi.dev/joke/Any";

  
  constructor(private http: HttpClient) { }


  getAllJokesConsoleLog(): Observable<any>{

    

    return this.http.get(this.api_url)

  }


  getAllJokes() : Observable<any>{

    

    return this.http.get(this.api_url);
  }

  getAllJokesSpanish() : Observable<any>{

    

    return this.http.get("https://v2.jokeapi.dev/joke/Any?lang=es");
  }
}
