import { User } from "./user";

var MOCKUSER = new User();
MOCKUSER.user_lastName = "MockedUserName";
MOCKUSER.user_firstName = "MockedUserFirstName";
MOCKUSER.user_counter = 0;
MOCKUSER.score = 0;
MOCKUSER.userLevel = 1;
MOCKUSER.user_progress_counter = 0;

export { MOCKUSER };
