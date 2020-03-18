import { Component, OnInit } from '@angular/core';
import { CaseInfoByStateService } from 'src/services/case-info-by-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  selectedValue = "Select State";
  summaryResult;
  title = 'coronaStatsUSA';
  url = 'http://coronastatsusa.us-west-2.elasticbeanstalk.com/api/state/summary/';
  url2 ='http://coronastatsusa.us-west-2.elasticbeanstalk.com/api/summary';
  states = ["AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY"];
    isSubmitted = false;
    totalCases;
    recoveredCases;
    deathCases;
    activeCases;
    results;
    deathPercentageinState;
    totalCasesinUs;
    activeCasesinUS;
    recoveredCasesinUS;
    totalDeathsinUS;
    deathPercentage;
    activePercentageinState;
    activePercentage;





  constructor(
    private getCaseInfoByState: CaseInfoByStateService
  ) {
    //this.getCaseInfo('FL');
   
  }

  ngOnInit(){

    this.getCaseInfoByState.getAllCaseInfo('http://coronastatsusa.us-west-2.elasticbeanstalk.com/api/summary' ).subscribe(
      res=>{
      this.summaryResult= res;
        this.activeCasesinUS = this.summaryResult.totalActiveCount;
        this.totalCasesinUs = this.summaryResult.totalCount;
        this.totalDeathsinUS = this.summaryResult.totalDeathCount;
        this.recoveredCasesinUS = this.summaryResult.totalRecoveredCount;
        this.deathPercentage = Math.round(this.summaryResult.deathPercentage);
        this.activePercentage = Math.round(this.summaryResult.activePercentage)
      }, err =>{
        window.alert("Something went wrong, Please try again");
      });
}


  getCaseInfo(state) {
    let url = this.url + state;
    this.getCaseInfoByState.getCaseInfoByState(url).subscribe(
      res => {
        console.log(res);
        if(res){
          this.results = res;
          this.activeCases = this.results.totalActiveCount;
          this.deathCases = this.results.totalDeathCount;
          this.totalCases = this.results.totalCount;
          this.recoveredCases = this.results.totalRecoveredCount; 
          this.deathPercentageinState = Math.round(this.results.deathPercentage);
          this.activePercentageinState = Math.round(this.results.activePercentage);
        }


      },
      err =>{
        window.alert('something went wrong, please try again');
      }
    );
  }

  submit(){
    console.log(this.selectedValue);
    this.getCaseInfo(this.selectedValue);
    if(this.selectedValue && this.selectedValue !== "Select State")
    this.isSubmitted = true;
  }
}
