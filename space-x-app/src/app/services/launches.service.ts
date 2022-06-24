import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ILaunches } from "../Interfaces/launches";
import { IPayload } from "../Interfaces/payload";
import { IRocket } from "../Interfaces/rocket";

@Injectable()
export class LaunchesService {

    constructor(private http: HttpClient) {

    }

    getLaunches(): Observable<ILaunches[]> {
        return this.http.get<ILaunches[]>('http://localhost:3000/launches');
    }

    getLaunchById(id: string): Observable<ILaunches> {
        return this.http.get<ILaunches>(`http://localhost:3000/launch/${id}`);
    }

    getRocketById(id: string): Observable<IRocket> {
        return this.http.get<IRocket>(`http://localhost:3000/rocket/${id}`);
    }

    getPayload(id: string): Observable<IPayload> {
        return this.http.get<IPayload>(`http://localhost:3000/payloads/${id}`);
    }
}