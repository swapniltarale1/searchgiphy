import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyserviceService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      localStorage.clear();
    } else if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status},` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }


  public searchGif(value): Observable<any> {

    const link = "https://api.giphy.com/v1/gifs/search?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY&limit=10&q="
    return this.http.get(link + value).pipe(
      catchError((err) => this.handleError(err)));

  }




  getGifList(pageLength,pageNumber): Observable<any> {
    
  
    let value = 10 * pageNumber 
  const link = "https://api.giphy.com/v1/gifs/trending?api_key=Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY" + "&"+ "limit="+pageLength+"&offset=" + value
 console.log("link", link)
  return this.http.get(link).pipe(
  catchError((err) => this.handleError(err)));
}   

}
