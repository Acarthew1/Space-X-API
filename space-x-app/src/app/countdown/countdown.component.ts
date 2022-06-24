import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
//
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {

    @Input() launch_time = '';

    private subscription: Subscription = new Subscription;

    public lTime = Date.parse(this.launch_time);
    public dateNow = new Date();
    public dDay = new Date();
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference!: number;
    public secondsToDday!: number;
    public minutesToDday!: number;
    public hoursToDday!: number;
    public daysToDday!: number;


    private getTimeDifference () {
        this.timeDifference = this.dDay.getTime() - new  Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }

    private allocateTimeUnits (timeDifference: any) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

  constructor() { }

  ngOnInit(): void {
    this.dDay = new Date(this.launch_time)
    this.subscription = interval(1000)
      .subscribe(x => {this.getTimeDifference(); })
      
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
