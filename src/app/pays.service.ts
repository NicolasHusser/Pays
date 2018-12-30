import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pays } from './pays';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class PaysService {

  private paysListUrl = 'https://restcountries.eu/rest/v2/all';
  private paysListUrlName = 'https://restcountries.eu/rest/v2';
  pays: Observable<any>;

  constructor(private http: HttpClient, private messageService: MessageService) {}


  private log(message: string) {
  this.messageService.add(`PaysService: ${message}`);
}


  getPays(id): Observable<Pays> {
    console.log(id);
    const url = `${this.paysListUrlName}/name/${id}`;
    //{{url}}
    return this.http.get<Pays>(url).pipe(
      tap(_ => this.log(`fetched pays name= ${id}`)),
      catchError(this.handleError<Pays>(`getPays name=${id}`))
    );
  }

    getPaysList (): Observable<Pays[]> {
        return this.http.get<Pays[]>(this.paysListUrl + '?fields=name')
    .pipe(
      catchError(this.handleError('getPaysList', []))
    );
}
updatePays (pays: Pays): Observable<any> {
   return this.http.put(this.paysListUrl, pays, httpOptions).pipe(
     tap(_ => this.log(`updated pays name=${pays.name}`)),
     catchError(this.handleError<any>('updatePays'))
   );
 }
 getPaysNo404<Data>(name: string): Observable<Pays> {
    const url = `${this.paysListUrl}/?name=${name}`;
    return this.http.get<Pays[]>(url)
      .pipe(
        map(paysList => paysList[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} pays name=${name}`);
        }),
        catchError(this.handleError<Pays>(`getPays name=${name}`))
      );
  }
  /* GET Country whose name contains search term */
 searchPays(term: string): Observable<Pays[]> {
   if (!term.trim()) {
     // if not search term, return empty hero array.
     return of([]);
   }
   const url = `${this.paysListUrlName}/name/${term}`;
   return this.http.get<Pays[]>(url).pipe(
     tap(_ => this.log(`found Countries matching "${term}"`)),
     catchError(this.handleError<Pays[]>('searchPayslist', []))
   );
 }

private handleError<T> (operation = 'operation', result?: T) {
return (error: any): Observable<T> => {

  console.error(error); // log to console instead
  this.log(`${operation} failed: ${error.message}`);

  // Let the app keep running by returning an empty result.
  return of(result as T);
};
}

  }
