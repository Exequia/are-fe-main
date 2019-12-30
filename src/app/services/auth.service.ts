import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { retry, map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { User } from "../models/Users";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(requestData) {
    this.invokeAuthenticate(requestData).subscribe(response => {
      const token = response.headers.get("Authorization");
      const user: User = {
        id: 0,
        username: "",
        token: token
      };
      this.currentUserSubject.next(user);
      this.getUserByEmail(requestData.email).subscribe((user: User) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        user.token = token;
        this.currentUserSubject.next(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        return user;
      });
    });
  }

  invokeAuthenticate(data): Observable<any> {
    return this.http
      .post<any>(
        `${environment.apiUrl}/users/authenticate`,
        JSON.stringify(data),
        {
          observe: "response"
        }
      )
      .pipe(retry(2));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http
      .get<User>(`${environment.apiUrl}/users/getByEmail?email=${email}`)
      .pipe(retry(2));
  }
}
