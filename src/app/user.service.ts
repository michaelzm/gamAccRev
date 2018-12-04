import { Injectable } from '@angular/core';
import { User } from './user';
import { MOCKUSER } from './mock-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getUser(){
    return MOCKUSER;
  }
  getUserScore(){
    return MOCKUSER.score;
  }

  getUserLName(){
    return MOCKUSER.user_lastName;
  }

  getUserCounter(){
    return MOCKUSER.user_counter;
  }

  increaseUserScore(){
    MOCKUSER.score++;
  }
  decreaseUserScore(){
    if(MOCKUSER.score > 0){
      MOCKUSER.score--;
    }
  }

  increaseCounter(){
    MOCKUSER.user_counter++;
  }
}
