import { Component, OnInit } from "@angular/core";
import { Competitor } from "./competitor";
import { UserService } from "../user/user.service";
import { ConfigService } from "../config/config.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"]
})
export class RankingComponent implements OnInit {
  rankings: Competitor[] = [];
  rankingWithUser = [];
  newCompetitor: Competitor;
  currentRanking: number;
  previousRanking: number;
  showMessage: boolean;

  //mocks fake data, not used
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
    this.addUserToRanking();
    this.getRanking();
  }
  constructor(
    private userService: UserService,
    private configService: ConfigService
  ) {}

  addUserToRanking() {
    console.log("creating newCompetitor out of service data");
    var userAsCompetitor = new Competitor();
    userAsCompetitor.userLevel = this.userService.getUserLevel();
    userAsCompetitor.user_lastName = this.userService.getUserLName();
    userAsCompetitor.user_counter = this.userService.getUserCounter();
    this.newCompetitor = userAsCompetitor;
  }

  getRanking() {
    this.configService
      .getRanking()
      .subscribe(
        data => (
          (this.rankings = data),
          this.rankings.push(this.newCompetitor),
          (this.rankings = this.sortArray(this.rankings)),
          this.getCurrentUserPos(this.rankings)
        )
      );
    console.log(
      "fetched some more rankings in getRanking() method so now array looks like " +
        this.rankings +
        "....end"
    );

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
    console.log("fetched database items done.");
  }
  /*
  mergeRankings() {
    console.log(
      "length of array: " + [...this.rankings, ...this.rankingWithUser].length
    );
    var newArray = [...this.rankings, ...this.rankingWithUser].sort((a, b) =>
      a.user_counter > b.user_counter
        ? -1
        : a.user_counter < b.user_counter
        ? 1
        : 0
    );
    console.log(" current position: " + newArray.indexOf(this.newCompetitor));

    console.log(newArray);
    return newArray;
  }
  */
  sortArray(rankingArray: Competitor[]) {
    return rankingArray.sort((a, b) =>
      a.user_counter > b.user_counter
        ? -1
        : a.user_counter < b.user_counter
        ? 1
        : 0
    );
  }
  getCurrentUserPos(rankingArray: Competitor[]) {
    this.previousRanking = this.userService.getRanking();
    for (var j = 0; j < rankingArray.length; j++) {
      if (
        rankingArray[j].user_lastName == this.userService.getUserLName() &&
        rankingArray[j].user_counter == this.userService.getUserCounter()
      ) {
        console.log("the user is currently at position " + j);
        this.currentRanking = j;
      }
    }
    this.userService.setRanking(this.currentRanking);
    this.displayRankUpdate();
  }
  displayRankUpdate() {
    console.log(
      "current rank: " +
        this.currentRanking +
        " previous Rank: " +
        this.previousRanking
    );
    if (
      this.currentRanking != this.previousRanking &&
      this.currentRanking < this.previousRanking
    ) {
      this.showMessage = true;
      console.log("message should be displayed");
    } else {
      this.showMessage = false;
      console.log("message should NOT be displayed");
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
