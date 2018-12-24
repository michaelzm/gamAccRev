import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ConfigService } from "../config/config.service";
import { Formular } from "./formular";
@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.css"]
})
export class FormularComponent implements OnInit {
  submitFormular: Formular;

  constructor(private config: ConfigService) {}

  ngOnInit() {}

  onSubmitEvaluation() {
    console.log("starte submit");

    this.submitFormular = new Formular();
    this.submitFormular.name = "Landodger";
    console.log(this.submitFormular);
    this.config.postConfig(this.submitFormular).subscribe();
  }
}
