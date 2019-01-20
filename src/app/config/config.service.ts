import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Formular } from "../formular/formular";
import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Competitor } from "../ranking/competitor";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  configUrl = "https://urserver.herokuapp.com/formular";
  rankingUrl = "https://urserver.herokuapp.com/ranking";
  gamificationUrl = "https://urserver.herokuapp.com/gamification";
  serverUrl = "https://urserver.herokuapp.com/"; //needed for activating server at beginning of a session

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  //this should send a request in order to simply wake up the database server on heroku
  activateServer() {
    console.log("activating server");
    return this.http.get(this.serverUrl);
  }

  postGamification(data: Formular) {
    console.log("posting ...");
    //console.log(data);
    return this.http.post(this.gamificationUrl, data, httpOptions);
  }
  getConfig() {
    return this.http.get(this.configUrl);
  }
  //fetch renkings from the server
  getRanking(): Observable<Competitor[]> {
    return this.http
      .get<Competitor[]>(this.rankingUrl)
      .pipe(catchError(this.handleError("get Rankings", [])));
  }
  //submits ranking
  postRanking(data: Competitor) {
    //console.log("posting ...");
    //console.log(data);
    return this.http.post(this.rankingUrl, data, httpOptions);
  }
  //no more needed
  postConfig(data: Formular) {
    return this.http.post(this.configUrl, data, httpOptions);
  }
  /**
   * this is copy pasta
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
