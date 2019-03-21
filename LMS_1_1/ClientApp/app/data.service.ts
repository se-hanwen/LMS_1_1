import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private activityData = new BehaviorSubject<string>("");
    public share = this.activityData.asObservable();

    getData(type: string) {
        this.activityData.next(type);
    }

  constructor() { }
}
