import { Injectable } from "@angular/core";
import { UserService } from "./user/user.service";
import { AccessReviewComponent } from "./access-review/access-review.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Injectable({
  providedIn: "root"
})
export class GamificationTrackerService {
  currentReviewCount: number;
  currentLevel: number;

  constructor(
    private dashboard: DashboardComponent,
    private userService: UserService,
    private accessReview: AccessReviewComponent
  ) {}

  checkForGamificationPopup() {
    console.log("Check for Gamification");
    this.checkForThreeReviews();
    this.checkForLevelUp();
    this.checkIfMissionCompleted();
    this.checkIfXPBarFull();
    console.log(
      "current Score = " +
        this.userService.getUserScore() +
        " and current reviewCounter = " +
        this.userService.getUserCounter()
    );
  }
  checkForThreeReviews() {
    if (this.userService.getUserCounter() % 3 == 0) {
      this.openGamificationBar("Erfolgreich 3 Berechtigungen geprüft");
    }
  }
  checkForLevelUp() {
    console.log("Points needed for next Level: implement me");
  }
  checkIfXPBarFull() {
    if (this.userService.getProgressBarCounter() == 10) {
      this.userService.setProgressBarCounter(0);
      this.accessReview.openBottomSheet();
    }
  }
  checkIfMissionCompleted() {
    if (this.userService.getUserCounter() == 10) {
      this.openGamificationBar(
        "Mission erfolgreich abgeschlossen! Neue Mission verfügbar.."
      );
      this.addAchievement("mission");
    }
  }
  addAchievement(type: string) {
    switch (type) {
      case "mission": {
        var counter = this.userService.getUserCounter();
        var newAchievementText: string =
          "Erfolgreich " + counter + " Berechtigungen geprüft";
        this.userService.addAchievement(newAchievementText);
        this.dashboard.getAchievements();
      }
      default: {
        break;
      }
    }
  }

  ngOnInit() {}
  openGamificationBar(message: string) {
    this.accessReview.openGamificationBar(message);
  }
}
