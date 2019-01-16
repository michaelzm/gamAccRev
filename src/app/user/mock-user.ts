import { User } from "./user";
//mockuser changed later on to the real user, dont get confused with namegiving
var MOCKUSER = new User();
MOCKUSER.user_lastName = "DefaultUsername";
MOCKUSER.user_firstName = "DefaultUserFirstName";
MOCKUSER.user_counter = 0;
MOCKUSER.score = 0;
MOCKUSER.userLevel = 1;
MOCKUSER.user_progress_counter = 0;
MOCKUSER.achievements = [];
MOCKUSER.scrollOffset = 0;
MOCKUSER.accuracy = 0;
MOCKUSER.evaluationDisabled = true;
MOCKUSER.ranking = 0;
MOCKUSER.completedMissions = 0;
export { MOCKUSER };
