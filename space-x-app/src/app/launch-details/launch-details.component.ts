import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ILaunches } from '../Interfaces/launches';
import { IRocket } from '../Interfaces/rocket';
import { IPayload } from '../Interfaces/payload';
import { LaunchesService } from '../services/launches.service';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  public launch: ILaunches = {};
  public rocket: IRocket = {};
  public payload: IPayload = {};
  loaded = false;
  public image = "";

  constructor(private route: ActivatedRoute, private _launchService: LaunchesService) {
    this.route.params.subscribe( params => this._launchService.getLaunchById(params['id'])
    .subscribe(payload => {
      this.launch = payload;
      this.loaded = true;
      console.log(this.launch.crew)

      this._launchService.getRocketById(this.launch.rocket!)
                .subscribe(payload => {
                  this.rocket = payload;
                  console.log(this.randomImage())
                })

      this._launchService.getPayload(this.launch.payloads!)
                .subscribe(payload => {
                  this.payload = payload;
                  console.log(this.payload)
                })
    }));

    
   }

  ngOnInit(): void {
  
  }

  public randomImage () {
    const randomElement = this.rocket.flickr_images[Math.floor(Math.random() * this.rocket.flickr_images.length)];
    console.log(randomElement)
    this.image = randomElement;
    return randomElement
    
  }

}
