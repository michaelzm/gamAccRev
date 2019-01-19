import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";
import { MissionService } from "../mission/mission.service";
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: "app-mission",
  templateUrl: "./mission.component.html",
  styleUrls: ["./mission.component.css"]
})
export class MissionComponent implements OnInit {
  counter: number;
  level: number;
  masteredChallenge =
    "Herausforderung gemeistert, du kannst dir deine Belohnung jetzt abholen";
  showFirstMission: boolean;
  showSecondMission: boolean;
  showThirdMission: boolean;
  showFourthMission: boolean;
  formularDone: boolean;
  showFormular: boolean;

  constructor(
    private userService: UserService,
    private missionService: MissionService,
    private dashboard: DashboardComponent
  ) {}

  ngOnInit() {
    this.counter = this.userService.getUserCounter();
    this.updateSolvedMissions();
    this.level = this.userService.getUserLevel();
    this.formularDone = this.missionService.getFormularDone();
  }

  getFirstMissionReward() {
    if (this.level >= 2) {
      this.showFirstMission = false;
      this.missionService.hideFirst();
      this.missionService.setFirstBadge();
      this.dashboard.updateLevelBadges();
      this.userService.increaseCompletedMissionsByOne();
    }
  }

  getSecondMissionReward() {
    if (this.level >= 4) {
      this.showSecondMission = false;
      this.missionService.hideSecond();
      this.missionService.setSecondBadge();
      this.dashboard.updateLevelBadges();
      this.userService.increaseCompletedMissionsByOne();
    }
  }

  getThirdMissionReward() {
    if (this.level >= 8) {
      this.showThirdMission = false;
      this.missionService.hideThird();
      this.missionService.setThirdBadge();
      this.dashboard.updateLevelBadges();
      this.userService.increaseCompletedMissionsByOne();
    }
  }
  getFourthMissionReward() {
    if (this.level >= 10) {
      this.showFourthMission = false;
      this.missionService.hideFourth();
      this.missionService.setFourthBadge();
      this.dashboard.updateLevelBadges();
    }
  }
  getFormularDoneReward() {
    if (this.formularDone) {
      this.missionService.setFormularDoneBadge();
      this.showFormular = false;
      this.dashboard.updateLevelBadges();
      this.missionService.hideFormular();
      this.userService.increaseCompletedMissionsByOne();
    }
  }

  updateSolvedMissions() {
    this.showFirstMission = this.missionService.getShowFirst();
    this.showSecondMission = this.missionService.getShowSecond();
    this.showThirdMission = this.missionService.getShowThird();
    this.showFourthMission = this.missionService.getShowFourth();
    this.showFormular = this.missionService.getShowFormular();
  }
}
