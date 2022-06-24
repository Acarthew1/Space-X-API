import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { ILaunches } from '../launches';
import { LaunchesService } from '../services/launches.service';
import { IRocket } from '../rocket';
import { Router } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css']
})
export class LaunchCardComponent implements OnInit {

  public launches: ILaunches[] = [];
  public rocket: IRocket = {};

  public loaded = false;

  constructor(private _launchService: LaunchesService, private router: Router) { }

  ngOnInit() {
    this.getLaunchData();
               
            
  }

  getLaunchData() {
    this._launchService.getLaunches()
            .subscribe(data => {
              this.launches = data;
              this.loaded = true;
              console.log(data);

              this._launchService.getRocketById(this.launches[0].rocket!)
                .subscribe(payload => {
                  this.rocket = payload;
                  console.log(this.rocket)
                })
              
            })

  }
  getDate(launches: any) {
    let fullDate = launches.date_utc;
    let splitDate = fullDate.split("T");
    return splitDate[0];
  }

  onClick() {
    this.router.navigate(['/launch-details']);
  }

}
