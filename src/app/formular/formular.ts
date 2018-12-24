import { Optional } from "@angular/core";

export class Formular {
  _id?: string;
  name: string;

  constructor(formular?: Formular) {
    this.name = formular.name;
  }
}
