import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Led } from '../interfaces/led';
import { MessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class LightPresetService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private presetsUrl = 'api/LightPreset';

  private log(message: string) {
    this.messageService.add(`LightPresetService: ${message}`);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getPreset(id: number): Observable<Led> {
    const url = `${this.presetsUrl}/${id}`;
    return this.http.get<Led>(url);
  }

  getPresets(): Observable<Led[]> {
    return this.http.get<Led[]>(this.presetsUrl);
  }

  updatePreset(led: Led): Observable<any> {
    return this.http.put(this.presetsUrl + "/" + led.id, led, this.httpOptions).pipe(
      tap(_ => this.log(`updated preset id=${led.id}`)),
      catchError(this.handleError<any>('updatePreset')));
  }

  addPreset(led: Led): Observable<Led> {
    return this.http.post<Led>(this.presetsUrl, led, this.httpOptions).pipe(
      tap((newLed: Led) => this.log(`added preset w/ id=${newLed.id}`)),
      catchError(this.handleError<Led>('addPreset')));
  }

  deletePreset(led: Led | number): Observable<Led> {
    const id = typeof led === 'number' ? led : led.id;
    const url = `${this.presetsUrl}/${id}`;

    return this.http.delete<Led>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted preset id=${id}`)),
      catchError(this.handleError<Led>('deletePreset'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
