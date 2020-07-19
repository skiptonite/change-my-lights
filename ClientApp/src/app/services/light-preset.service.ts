import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Led } from '../interfaces/led';


@Injectable({
  providedIn: 'root'
})
export class LightPresetService {

  constructor(
    private http: HttpClient) { }

  private presetsUrl = 'api/LightPreset';

  getPresets(): Observable<Led[]> {
    return this.http.get<Led[]>(this.presetsUrl);
      /*.pipe(
      catchError(this.handleError(`get`)));*/
    
  }

  /*private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };*/
  //}
}
