import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config/config.service";
import { Formular } from "./formular";
import { UserService } from "../user/user.service";
@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.css"]
})
export class FormularComponent implements OnInit {
  sent = false;
  userName: string;
  hasbeenSubmitted = false;
  submitFormular: Formular;
  gender: string;
  age: string;
  parta1: number;
  parta2: number;
  partb1: number;
  partb2: number;
  partb3: number;
  partb4: number;
  partb5: number;
  partb6: number;
  partb7: number;

  constructor(private config: ConfigService, private userSerice: UserService) {}
  ngOnInit() {}
  //think about switch case maybe
  onInputChange(event: any, slider: number) {
    //console.log(event);
    if (slider == 2) {
      this.parta1 = event.value;
    } else if (slider == 3) {
      this.parta2 = event.value;
    } else if (slider == 4) {
      this.partb1 = event.value;
    } else if (slider == 5) {
      this.partb2 = event.value;
    } else if (slider == 6) {
      this.partb3 = event.value;
    } else if (slider == 7) {
      this.partb4 = event.value;
    } else if (slider == 8) {
      this.partb5 = event.value;
    } else if (slider == 9) {
      this.partb6 = event.value;
    } else if (slider == 10) {
      this.partb7 = event.value;
    } else if (slider == 0) {
      this.age = event.value;
    } else if (slider == 1) {
      this.gender = event.value;
    } else {
      console.log("error occured, slider not registered");
    }
  }

  onSubmitEvaluation() {
    console.log("starte submit");
    this.submitFormular = new Formular();
    this.submitFormular.name = this.userSerice.getUserLName();
    this.submitFormular.age = this.age || "na";
    this.submitFormular.gender = this.gender || "na";
    this.submitFormular.reviewCount = this.userSerice.getUserCounter();
    this.submitFormular.partA1 = this.parta1 || 1;
    this.submitFormular.partA2 = this.parta2 || 1;
    this.submitFormular.partB1 = this.partb1 || 1;
    this.submitFormular.partB2 = this.partb2 || 1;
    this.submitFormular.partB3 = this.partb3 || 1;
    this.submitFormular.partB4 = this.partb4 || 1;
    this.submitFormular.partB5 = this.partb5 || 1;
    this.submitFormular.partB6 = this.partb6 || 1;
    this.submitFormular.partB7 = this.partb7 || 1;
    this.submitFormular.accuracy = this.userSerice.getAccuracy() || 0;
    this.config.postBasic(this.submitFormular).subscribe();
    this.hasbeenSubmitted = true;
    this.sent = true;
  }
}
