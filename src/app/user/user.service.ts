import { Injectable } from "@angular/core";
import { User } from "./user";
import { MOCKUSER } from "./mock-user";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private datePipe: DatePipe) {}

  setUserLastName(lastName: string) {
    MOCKUSER.user_lastName = lastName;
  }

  getUser() {
    return MOCKUSER;
  }
  getUserScore() {
    return MOCKUSER.score;
  }
  setProgressBarCounter(setTo: number) {
    MOCKUSER.user_progress_counter = setTo;
  }
  getProgressBarCounter() {
    console.log(
      "USERSERVICE PROGRESS COUNTER = " + MOCKUSER.user_progress_counter
    );
    return MOCKUSER.user_progress_counter;
  }
  increaseProgress() {
    MOCKUSER.user_progress_counter++;
  }

  getUserLName() {
    return MOCKUSER.user_lastName;
  }
  getUserFName() {
    return MOCKUSER.user_firstName;
  }

  getUserCounter(): number {
    return MOCKUSER.user_counter;
  }
  increaseUserScoreByValue(value: number) {
    MOCKUSER.score += value;
  }
  decreaseUserScore() {
    if (MOCKUSER.score > 0) {
      MOCKUSER.score--;
    }
  }
  getUserLevel(): number {
    return MOCKUSER.userLevel;
  }
  increaseCounter() {
    MOCKUSER.user_counter++;
  }
  increaseLevel() {
    MOCKUSER.userLevel++;
  }
  addAchievement(achievementName: string) {
    let d: Date = new Date();
    let formatDate = this.datePipe.transform(d, "dd.MM.yyyy, H:mm");
    MOCKUSER.achievements.push(achievementName + " am: " + formatDate);
  }
  getAchievements() {
    return MOCKUSER.achievements;
  }
}
