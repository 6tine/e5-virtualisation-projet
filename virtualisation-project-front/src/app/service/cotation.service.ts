import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {GATEWAY_API_URL, GATEWAY_API_URL2} from "../../app.constants";
import {catchError, throwError} from "rxjs";
import {CotationParams} from "../model/cotationParams";

@Injectable({
  providedIn: 'root'
})
export class CotationService {

  constructor(private http: HttpClient) { }

  private COTATION_SERVICE = '/cotation';
  private GET_ESTIMATION = '/estimation';

  private getCotationUrl = GATEWAY_API_URL2 + this.COTATION_SERVICE + this.GET_ESTIMATION;

  simulerCotation(params: CotationParams){
    console.log("appel ws : " + this.getCotationUrl)
    console.log('test')
    return this.http.get(this.getCotationUrl)
      .pipe(
      catchError(this.handleError),
    )
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
