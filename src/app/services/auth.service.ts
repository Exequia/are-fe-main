// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable, throwError } from "rxjs";
// import { retry, catchError } from "rxjs/operators";
// import { environment } from "../../environments/environment";

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
  // constructor(private http: HttpClient) {}
  // // Base url
  // baseurl = environment.baseUrl + "/users/";
  // // Http Headers
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Content-Type": "application/json"
  //   })
  // };

  // private token: string = undefined;

  // setAuthorizationToken(token: string) {
  //   this.token = token;
  // }

  // getAuthorizationToken(): string {
  //   return this.token;
  // }

  // authenticate(data): Observable<any> {
  //   return this.http
  //     .post<any>(this.baseurl + "authenticate", JSON.stringify(data), {
  //       observe: "response"
  //     })
  //     .pipe(retry(1), catchError(this.errorHandl));
  // }

  // // Error handling
  // errorHandl(error) {
  //   let errorMessage = "";
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }

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

  // login(username: string, password: string) {
  //   return this.http
  //     .post<any>(`${environment.apiUrl}/users/authenticate`, {
  //       username,
  //       password
  //     })
  //     .pipe(
  //       map(user => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem("currentUser", JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

  login(requestData) {
    this.invokeAuthenticate(requestData).subscribe(response => {
      const token = response.headers.get("Authorization");
      const user: User = {
        firstName: "",
        lastName: "",
        id: 0,
        username: "alias",
        token: token,
        password: null
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
    // this.httpOptions.headers. ["Authorization"] = token;

    // this.httpOptions.headers = this.httpOptions.headers.append(
    //   "Authorization",
    //   this.authService.getAuthorizationToken()
    // );

    return this.http
      .get<User>(`${environment.apiUrl}/users/getByEmail?email=${email}`)
      .pipe(retry(2));
    // .pipe(
    //   map(user => {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     const mergedUser = Object.assign(this.currentUserSubject.value, user);
    //     console.log(mergedUser);
    //     this.currentUserSubject.next(mergedUser);
    //     localStorage.setItem("currentUser", JSON.stringify(mergedUser));
    //     return mergedUser;
    //   })
    // );
  }
}
