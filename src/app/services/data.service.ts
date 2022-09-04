import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('Hello!');
  public currentMessage = this.messageSource.asObservable();



  constructor() { }

  public changeUser(user: string) {
    this.messageSource.next(user);
  }


  
}