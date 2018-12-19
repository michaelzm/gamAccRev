import { Injectable } from "@angular/core";
import { User } from "./user";
import { MOCKUSER } from "./mock-user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  setUserLastName(lastName: string) {
    MOCKUSER.user_lastName = lastName;
  }

  getUser() {
    return MOCKUSER;
  }
  getUserScore() {
    return MOCKUSER.score;
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

  increaseCounter() {
    MOCKUSER.user_counter++;
  }
}
