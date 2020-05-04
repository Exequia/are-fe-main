import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import { User } from "../../models/Users";
import { environment } from '../../../environments/environment';
import { AuthService } from 'src/app/services/auth.service';
interface User {
  id?: number;
  username: string;
  password?: string;
  email?: string;
  token?: string;
  role?: Role;
}

interface Role {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  // Base url
  baseurl = environment.apiUrl + '/users/';
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POST
  // authenticate(data): Observable<any> {
  //   return this.http
  //     .post<any>(this.baseurl + "authenticate", JSON.stringify(data), {
  //       observe: "response"
  //     })
  //     .pipe(retry(1), catchError(this.errorHandel));
  // }

  // Error handling
  errorHandel(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getUserByEmail(email: string): Observable<User> {
    // this.httpOptions.headers. ["Authorization"] = token;

    // this.httpOptions.headers = this.httpOptions.headers.append(
    //   "Authorization",
    //   this.authService.getAuthorizationToken()
    // );

    return this.http
      .get<User>(this.baseurl + 'getByEmail?email=' + email, this.httpOptions)
      .pipe(retry(2), catchError(this.errorHandel));
  }
}
