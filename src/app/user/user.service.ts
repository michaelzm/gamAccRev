import { Injectable } from "@angular/core";
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

  getUserLName() {
    return MOCKUSER.user_lastName;
  }

  getUserCounter(): number {
    return MOCKUSER.user_counter;
  }

  setAccuracy(accuracy: number) {
    MOCKUSER.accuracy = accuracy;
  }

  getAccuracy() {
    return MOCKUSER.accuracy;
  }

  increaseCounter() {
    MOCKUSER.user_counter++;
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
}
