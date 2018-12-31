import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Continent } from './continent';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ContinentService {

  private continentListUrl = 'https://restcountries.eu/rest/v2/all';
  private continentListUrlName = 'https://restcountries.eu/rest/v2';
  continent: Observable<any>;

  constructor(private http: HttpClient, private messageService: MessageService) {}


  private log(message: string) {
  this.messageService.add(`ContinentService: ${message}`);
}


  getContinent(name): Observable<Continent> {
    console.log(name);
    const url = `${this.continentListUrlName}/region/${name}`;
    return this.http.get<Continent>(url).pipe(
      tap(_ => this.log(`fetched continent region= ${name}`)),
      catchError(this.handleError<Continent>(`getContinent region=${name}`))
    );
  }

    getContinents (): Observable<Continent[]> {
        return this.http.get<Continent[]>(this.continentListUrl + '?fields=region')
    .pipe(
      catchError(this.handleError('getContinentList', []))
    );
}

 getContinentNo404<Data>(region: string): Observable<Continent> {
    const url = `${this.continentListUrl}/?region=${name}`;
    return this.http.get<Continent[]>(url)
      .pipe(
        map(continents => continents[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} pays region=${name}`);
        }),
        catchError(this.handleError<Continent>(`getContinent region=${name}`))
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
