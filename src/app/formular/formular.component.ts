import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config/config.service";
import { Formular } from "./formular";
import { UserService } from "../user/user.service";
import { Competitor } from "../ranking/competitor";
import { MissionService } from "../mission/mission.service";
@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.css"]
})
export class FormularComponent implements OnInit {
  //Beschreibungen der Studie
  sent = false;

  userName: string;
  userLevel: number;
  userCoutner: number;

  hasbeenSubmitted = false;
  submitFormular: Formular;
  rankingFormular: Competitor;

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
  /*
  atm not working as expected
  */

  constructor(
    private config: ConfigService,
    private userSerice: UserService,
    private missionService: MissionService
  ) {}
  ngOnInit() {}
  //think about switch case maybe
  onInputChange(event: any, slider: number) {
    console.log(event);
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
  submitRanking() {
    this.rankingFormular = new Competitor();
    this.rankingFormular.user_lastName = this.userName = this.userSerice.getUserLName();
    this.rankingFormular.userLevel = this.userLevel = this.userSerice.getUserLevel();
    this.rankingFormular.user_counter = this.userCoutner = this.userSerice.getUserCounter();
    this.config.postRanking(this.rankingFormular).subscribe();
  }

  onSubmitEvaluation() {
    console.log("starte submit");
    this.submitFormular = new Formular();
    this.submitFormular.name = this.userSerice.getUserLName();
    this.submitFormular.age = this.age || "na";
    this.submitFormular.gender = this.gender || "na";
    this.submitFormular.reviewCount = this.userSerice.getUserCounter();
    this.submitFormular.userLevel = this.userSerice.getUserLevel();
    this.submitFormular.userRanking = this.userSerice.getRanking();
    this.submitFormular.partA1 = this.parta1 || 1;
    this.submitFormular.partA2 = this.parta2 || 1;
    this.submitFormular.partB1 = this.partb1 || 1;
    this.submitFormular.partB2 = this.partb2 || 1;
    this.submitFormular.partB3 = this.partb3 || 1;
    this.submitFormular.partB4 = this.partb4 || 1;
    this.submitFormular.partB5 = this.partb5 || 1;
    this.submitFormular.partB6 = this.partb6 || 1;
    this.submitFormular.accuracy = this.userSerice.getAccuracy() || 0;
    console.log(this.submitFormular);
    this.config.postGamification(this.submitFormular).subscribe();
    this.submitRanking();
    this.hasbeenSubmitted = true;
    this.missionService.setFormularDone();
    this.sent = true;
  }
}
