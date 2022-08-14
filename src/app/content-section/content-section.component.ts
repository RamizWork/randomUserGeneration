import {Component, OnInit} from '@angular/core';
import {GetUserDataService} from "../services/getUserData.service";
import {BehaviorSubject, Observable} from "rxjs";
import {UserResponseInterface} from "../interfaces/user-response.interface";

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss'],
})
export class ContentSectionComponent implements OnInit {

  getUserData$: Observable<UserResponseInterface> | undefined;
  sub$: Observable<any> | undefined;
  userData$: BehaviorSubject<UserResponseInterface | null> | undefined;

  constructor(private getUserDataService: GetUserDataService) {
  }

  ngOnInit(): void {
    this.getUserData$ = this.getUserDataService.getLoadData();
    this.userData$ = this.getUserDataService.getUserData();
    this.sub$ = this.getUserDataService.getSubject()
  }

  newRandomUser() {
    this.getUserDataService.addDataToSubject();
  }

}
