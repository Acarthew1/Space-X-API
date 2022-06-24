// Angular Modules
import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
// Get upcoming launch details
public readonly UPCOMING_LAUNCHES_ENDPOINT: string = 'https://api.spacexdata.com/v4/launches/upcoming';
public readonly CREW_NAMES_ENDPOINT: string = 'https://api.spacexdata.com/v4/crew/{{id}}';
public readonly ROCKET_ENDPOINT: string = 'https://api.spacexdata.com/v4/rockets/{{id}}';
} 
