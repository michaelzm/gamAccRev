import { Component, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { Competitor } from "./competitor";
import { UserService } from "../user/user.service";
import { ConfigService } from "../config/config.service";
import { Formular } from "../formular/formular";
import { Config } from "protractor";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"]
})
export class RankingComponent implements OnInit {
  rankings = [];
  rankingWithUser = [];
  newCompetitor: Competitor;

  createMutlipleCompetitors() {
    for (var i = 0; i < 10; i++) {
      this.newCompetitor = new Competitor();
      this.newCompetitor.userLevel = i;
      this.newCompetitor.user_counter = i * 10;
      this.newCompetitor.user_lastName = "" + i;
      this.rankings.push(this.newCompetitor);
    }
    console.log(this.rankings);
  }

  ngOnInit() {
    console.log(" 0 " + this.rankings);
    this.addUserToRanking();
    this.getRanking();

    console.log(" 1 " + this.rankings);
    console.log(this.rankings);
    console.log(" an stelle 1: " + this.rankings);
    console.log(this.rankingWithUser);
    this.findInsideArray();
  }
  constructor(
    private userService: UserService,
    private configService: ConfigService
  ) {}

  addUserToRanking() {
    console.log("adding user to rankinglist");
    var userAsCompetitor = new Competitor();
    userAsCompetitor.userLevel = this.userService.getUserLevel();
    userAsCompetitor.user_lastName = this.userService.getUserLName();
    userAsCompetitor.user_counter = this.userService.getUserCounter();
    console.log(userAsCompetitor);
    this.rankingWithUser.push(userAsCompetitor);
  }

  getRanking() {
    this.configService.getRanking().subscribe(data => (this.rankings = data));

    /*
        for (var i = 0; i < this.fetchedRankings.length; i++) {
          var newCompetitor = new Competitor();
          newCompetitor.userLevel = this.fetchedRankings[i].level;
          newCompetitor.user_counter = this.fetchedRankings[i].reviewCount;
          newCompetitor.user_lastName = this.fetchedRankings[i].name;
          this.rankings.push(newCompetitor);
          console.log("current database items: " + this.fetchedRankings.length);
        }
        */
    console.log("fetched database items");
  }
  mergeRankings() {
    console.log(
      "length of array: " + [...this.rankings, ...this.rankingWithUser].length
    );
    var newArray = [...this.rankings, ...this.rankingWithUser].sort((a, b) =>
      a.userLevel > b.userLevel ? -1 : a.userLevel < b.userLevel ? 1 : 0
    );
    console.log(" current position: " + newArray.indexOf(this.newCompetitor));

    console.log(newArray);
    return newArray;
  }
  findInsideArray() {
    console.log("looking for current user");
    var lookingInArray = this.mergeRankings();
    for (var i = 0; i < lookingInArray.length; i++) {
      if (!lookingInArray[i]._id) {
        console.log(" found at pos: " + i);
        console.log("user was not on pos " + i);
        console.log("user was not on pos " + i);
      }
    }
  }

  /*
  getRanking() {
    var newCompetitor = new Competitor();
    this.configService.getConfig().subscribe(data: Response => {
      data = new Formular()
      this.
      console.log(data);
    });
  }


   userLevel: data['level'],
        user_counter: data['reviewCount'],
        user_lastName: data['name']

  addUserToRanking() {
    var userAsCompetitor = new Competitor();
    userAsCompetitor.userLevel = this.userService.getUserLevel();
    userAsCompetitor.user_lastName = this.userService.getUserLName();
    userAsCompetitor.user_counter = this.userService.getUserCounter();
    this.rankings.push(userAsCompetitor);
  }
 
  sortedRankings(): Competitor[] {
    return this.rankings.sort((a, b) =>
      a.userLevel > b.userLevel ? -1 : a.userLevel < b.userLevel ? 1 : 0
    );
  }
   */
}

/*
const EMPLOYEES: Employee[] = [];
function pushNameToList() {
  for (var _i = 0; _i < 100; _i++) {
    var lnIndex = Math.floor(Math.random() * 19);
    var fnIndex = Math.floor(Math.random() * 14);
    var posIndex = Math.floor(Math.random() * 3);
    const newEmployee = new Employee();
    newEmployee.lastName = lastName[lnIndex];
    newEmployee.firstName = firstName[fnIndex];
    newEmployee.position = pos[posIndex];
    newEmployee.accessRights = new AccessRightCollection();
    newEmployee.beenChecked = false;
    EMPLOYEES.push(newEmployee);
  }
}
*/
