import { Component, OnInit, Input } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ConfigService } from "../config/config.service";
import { Formular } from "./formular";
import { endTimeRange } from "@angular/core/src/profile/wtf_impl";
import { UserService } from "../user/user.service";
import { firstpart, secondpart } from "./parts";
import { Competitor } from "../ranking/competitor";
@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.css"]
})
export class FormularComponent implements OnInit {
  //Beschreibungen der Studie
  firstPart = firstpart;
  secondPart = secondpart;

  userName: string;
  userLevel: number;
  userCoutner: number;

  hasbeenSubmitted = false;
  submitFormular: Formular;
  rankingFormular: Competitor;

  rating1: number;
  rating2: number;
  rating3: number;
  rating4: number;
  /*
  atm not working as expected
  */

  onInputChangeFirst(value: any, slider: string) {
    console.log(value);
    this.rating1 = value;
  }
  constructor(private config: ConfigService, private userSerice: UserService) {}

  onInputChange(event: any, slider: number) {
    console.log(event);
    if (slider == 1) {
      this.rating1 = event.value;
    } else if (slider == 2) {
      this.rating2 = event.value;
    } else if (slider == 3) {
      this.rating3 = event.value;
    } else if (slider == 4) {
      this.rating4 = event.value;
    } else {
      console.log("error occured, slider not registered");
    }
  }
  submitRanking() {
    this.rankingFormular = new Competitor();
    this.rankingFormular.user_lastName = this.userName = this.userSerice.getUserLName();
    this.rankingFormular.userLevel = this.userLevel = this.userSerice.getUserLevel();
    this.rankingFormular.user_counter = this.userCoutner = this.userSerice.getUserCounter();
    this.config.postRanking(this.rankingFormular).subscribe();
  }

  ngOnInit() {}
  onSubmitEvaluation() {
    if (this.hasbeenSubmitted == false) {
      console.log("starte submit");
      this.submitFormular = new Formular();
      this.submitFormular.name = this.userSerice.getUserLName();
      this.submitFormular.reviewCount = this.userSerice.getUserCounter();
      this.submitFormular.rating1 = this.rating1 || 0;
      this.submitFormular.rating2 = this.rating2 || 0;
      this.submitFormular.rating3 = this.rating3 || 0;
      this.submitFormular.rating4 = this.rating4 || 0;
      console.log(this.submitFormular);
      this.config.postConfig(this.submitFormular).subscribe();
      this.submitRanking();
      this.hasbeenSubmitted = true;
    }
  }
}
