import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {UserResponseInterface} from "../interfaces/user-response.interface";

@Injectable({
  providedIn: 'root'
})

export class GetUserDataService {

  constructor(private http: HttpClient) {
  }

  getLoadData(): Observable<UserResponseInterface> {
    return this.http.get<UserResponseInterface>('https://randomuser.me/api/');
  }
}
