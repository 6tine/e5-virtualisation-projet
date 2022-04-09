import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {GATEWAY_API_URL2, GATEWAY_API_URL3} from "../../app.constants";
import {catchError, throwError} from "rxjs";
import {realEstate} from "../model/realEstate";

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {

  constructor(private http: HttpClient) { }

  private REALESTATE_SERVICE = '/realEstate';

  private getRealEstateUrl = GATEWAY_API_URL2 + this.REALESTATE_SERVICE;

  getRealEstates(){
    console.log("appel ws : " + this.getRealEstateUrl)
    return this.http.get<realEstate[]>(this.getRealEstateUrl)
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
