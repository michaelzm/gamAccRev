import { Injectable } from "@angular/core";
import { Formular } from "./formular";
import { Http, Response } from "@angular/http";

@Injectable()
export class FormularService {
  private formularsUrl = "/api/formulars";

  constructor(private http: Http) {}
  getFormulars(): Promise<void | Formular[]> {
    return this.http
      .get(this.formularsUrl)
      .toPromise()
      .then(response => response.json() as Formular[])
      .catch(this.handleError);
  }
  createFormular(newFormular: Formular): Promise<void | Formular> {
    return this.http
      .post(this.formularsUrl, newFormular)
      .toPromise()
      .then(response => response.json() as Formular)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";
    console.error(errMsg); // log to console instead
  }
}
