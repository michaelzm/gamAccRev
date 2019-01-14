import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";
import { MissionComponent } from "../mission/mission.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  imagePath = "assets/ranks";
  imagePathRaw = "assets/ranks";
  badges = [];
  achievementList: string[];
  dashboardScore: number;
  dashboardCounter: number;
  dashboardUserName: string;
  dashboardUserFirstName: string;
  dashboardUserLevel: number;
  missionsCompleted: number;
  missionText: string;
  constructor(private userService: UserService) {}

  getInformations() {
    this.getScore();
    this.getCounter();
    this.getUserName();
    this.dashboardUserFirstName = this.userService.getUserFName();
    this.getUserLevel();
    this.getAchievements();
    this.updatePicture();
    this.updateLevelBadges();
    console.log("console achievement" + this.achievementList);
  }
  getScore() {
    this.dashboardScore = this.userService.getUserScore();
  }
  getCounter() {
    this.dashboardCounter = this.userService.getUserCounter();
  }

  getUserName() {
    this.dashboardUserName = this.userService.getUserLName();
  }
  getUserLevel() {
    this.dashboardUserLevel = this.userService.getUserLevel();
  }
  updateLevelBadges() {
    for (var i = 0; i < this.dashboardUserLevel; i++) {
      this.badges.push(i);
    }
    console.log("badges are now :" + this.badges);
  }
  updatePicture(): string {
    console.log("updatePicture Called");
    let lvl = this.dashboardUserLevel;
    switch (lvl) {
      case 1: {
        this.imagePath = this.imagePathRaw + "/1.svg";
        return this.imagePath;
      }
      case 2: {
        this.imagePath = this.imagePathRaw + "/2.svg";
        return this.imagePath;
      }
      case 3: {
        this.imagePath = this.imagePathRaw + "/3.svg";
        return this.imagePath;
      }
      case 4: {
        this.imagePath = this.imagePathRaw + "/4.svg";
        return this.imagePath;
      }
      case 5: {
        this.imagePath = this.imagePathRaw + "/5.svg";
        return this.imagePath;
      }
      case 6: {
        this.imagePath = this.imagePathRaw + "/6.svg";
        return this.imagePath;
      }
      case 7: {
        this.imagePath = this.imagePathRaw + "/7.svg";
        return this.imagePath;
      }
      case 8: {
        this.imagePath = this.imagePathRaw + "/8.svg";
        return this.imagePath;
      }
      case 9: {
        this.imagePath = this.imagePathRaw + "/9.svg";
        return this.imagePath;
      }
      default: {
        this.imagePath = this.imagePathRaw + "/10.svg";
        return this.imagePath;
      }
    }
  }
  createMission() {
    if (this.missionsCompleted == 0) {
    }
  }

  ngOnInit() {
    this.getInformations();
  }
  getAchievements() {
    this.achievementList = this.userService.getAchievements();
  }
}
