import { Injectable } from "@angular/core";
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
  setAccuracy(accuracy: number) {
    MOCKUSER.accuracy = accuracy;
  }
  getAccuracy() {
    return MOCKUSER.accuracy;
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
  getScrollOffset() {
    return MOCKUSER.scrollOffset;
  }
  setScrollOffset(offset: number) {
    MOCKUSER.scrollOffset = offset;
  }
  setUserAuthorized() {
    MOCKUSER.evaluationDisabled = false;
  }
  getUserAuthorized() {
    return MOCKUSER.evaluationDisabled;
  }
  setRanking(newRank: number) {
    //console.log("called setRanking on user.Service with value: " + newRank);
    MOCKUSER.ranking = newRank;
  }
  getRanking() {
    //console.log("called getRanking on user.Service value: " + MOCKUSER.ranking);
    return MOCKUSER.ranking;
  }
  increaseCompletedMissionsByOne() {
    MOCKUSER.completedMissions++;
  }
  getCompletedMissionsCounter() {
    return MOCKUSER.completedMissions;
  }
}
