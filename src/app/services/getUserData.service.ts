import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {switchMap, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {UserResponseInterface} from "../interfaces/user-response.interface";


@Injectable({
  providedIn: 'root'
})

export class GetUserDataService {

  private userData$ = new BehaviorSubject<UserResponseInterface | null>(null);
  private sub$ = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getLoadData(): Observable<UserResponseInterface> {
    return this.http.get<UserResponseInterface>('https://randomuser.me/api/')
      .pipe(
        tap(value => this.setUserData(value))
      )
  }

  setUserData(data: UserResponseInterface): void {
    this.userData$.next(data);
  }

  getUserData(): BehaviorSubject<UserResponseInterface | null> | undefined {
    return this.userData$;
  }

  getSubject(): Observable<any> {
    return this.sub$
      .pipe(
        switchMap((value) => {
          return this.getLoadData();
        })
      );
  }

  addDataToSubject() {
    this.sub$.next(5);
  }

}
