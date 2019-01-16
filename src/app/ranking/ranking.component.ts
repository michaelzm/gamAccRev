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

    console.log("fetched database items done.");
  }

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
