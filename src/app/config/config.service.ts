import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Formular } from "../formular/formular";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
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

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  getConfig() {
    return this.http.get(this.configUrl);
  }
  //fetch renkings from the server
  getRanking() {
    return this.http
      .get(this.rankingUrl)
      .pipe(tap(_ => console.log("fetched rankings")));
  }

  postConfig(data: Formular) {
    return this.http.post(this.configUrl, data, httpOptions);
  }
}
