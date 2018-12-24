import { Injectable } from "@angular/core";
import { Formular } from "./formular";
import { ApiService } from "../api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FormularService {
  constructor(private api: ApiService) {}

  createFormular(formular: Formular) {
    return this.api.createFormular(formular);
  }
  getFormular() {
    return this.api.getAllFormulars();
  }
}
/*
  without rx

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
  */
