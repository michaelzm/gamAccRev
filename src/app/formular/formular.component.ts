import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormularService } from "./formular.service";
import { Formular } from "./formular";
@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.css"]
})
export class FormularComponent implements OnInit {
  constructor(private formularService: FormularService) {}

  ngOnInit() {}

  createFormular(fName: string) {
    var newFormular = new Formular();
    newFormular.name = fName;
    newFormular.email = "testemail";
    this.formularService.createFormular(newFormular);
  }
}
