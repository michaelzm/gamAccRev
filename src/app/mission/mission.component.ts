import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-mission",
  templateUrl: "./mission.component.html",
  styleUrls: ["./mission.component.css"]
})
export class MissionComponent implements OnInit {
  counter: number;
  level: number;
  firstMissionUnsolved: boolean;
  secondMissionUnsolved: boolean;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.counter = this.userService.getUserCounter();
    this.firstMissionUnsolved = true;
    this.secondMissionUnsolved = true;
    this.level = this.userService.getUserLevel();
  }
  getFirstMissionReward() {
    this.firstMissionUnsolved = false;
  }
  getSecondMissionReward() {
    this.secondMissionUnsolved = false;
  }
}
