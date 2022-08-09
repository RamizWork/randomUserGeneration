import { Component, OnInit } from '@angular/core';
import {GetUserDataService} from "../services/getUserData.service";
import {Observable} from "rxjs";
import {UserResponseInterface} from "../interfaces/user-response.interface";
import {TypeNameEnum} from "../enums/type-name.enum";

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  userInfoEnum: TypeNameEnum | undefined;
  getUserData$: Observable<UserResponseInterface> | undefined;

  constructor(private getUserData: GetUserDataService) { }

  ngOnInit(): void {
    this.getUserData$ = this.getUserData.getLoadData();
  }

}
