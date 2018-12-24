import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Formular } from "./formular/formular";
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: Http) {}

  public getAllFormulars(): Observable<Formular[]> {
    return this.http.get(API_URL + "/get/formulars").map(response => {
      const formulars = response.json();
      return formulars.map(formular => new Formular(formular));
    });
  }

  public createFormular(formular: Formular) {
    return this.http
      .post(API_URL + "/post/formulars", formular)
      .map(response => {
        return new Formular(response.json);
      });
  }

  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
}
