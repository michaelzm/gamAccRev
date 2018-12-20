import { Injectable } from "@angular/core";
import { UserService } from "./user/user.service";
import { AccessReviewComponent } from "./access-review/access-review.component";

@Injectable({
  providedIn: "root"
})
export class GamificationTrackerService {
  currentScore: number;
  currentReviewCount: number;
  currentLevel: number;
  pointsForNextLevel = 20;
  pointsForNextLevelIncrementer = 10;

  constructor(
    private userService: UserService,
    private accessReview: AccessReviewComponent
  ) {}

  checkForGamificationPopup() {
    console.log("Check for Gamification");
    this.checkForThreeReviews();
    this.checkForLevelUp();
    this.checkIfMissionCompleted();
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
    console.log("Points needed for next Level: " + this.pointsForNextLevel);
    if (this.userService.getUserScore() >= this.pointsForNextLevel) {
      this.openGamificationBar("Level Up! Glückwunsch!");
      this.pointsForNextLevel += this.pointsForNextLevelIncrementer;
      this.pointsForNextLevelIncrementer =
        this.pointsForNextLevelIncrementer + this.pointsForNextLevel / 2;
      console.log("incrementer now: " + this.pointsForNextLevelIncrementer);
    }
  }
  checkIfXPBarFull() {
    if (this.userService.getUserScore() >= this.pointsForNextLevel) {
      /*
      xp bar has to be resettet to 0
      */
    }
  }
  checkIfMissionCompleted() {
    if (this.userService.getUserCounter() == 10) {
      this.openGamificationBar(
        "Mission erfolgreich abgeschlossen! Neue Mission verfügbar.."
      );
    }
  }

  ngOnInit() {}
  openGamificationBar(message: string) {
    this.accessReview.openGamificationBar(message);
  }
}
