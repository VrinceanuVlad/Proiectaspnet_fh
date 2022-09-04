import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit ,OnDestroy{
//public subscription:Subscription;
//public loggedUser;
  constructor(
    private router:Router,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
   // this.subscription=this.dataService.currentUser.subscribe(user =>this.loggedUser=user);
  }

  ngOnDestroy(): void {
   // this.subscription.unsubscribe();
    
  }

}
