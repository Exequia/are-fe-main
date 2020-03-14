import { Component, OnInit } from "@angular/core";
import { Login } from "../../models/Users";
import { UserService } from "../../services/users.service";
import { AuthService } from "src/app/services/auth.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  private loginModel: Login;
  private loading: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginModel = {
      email: environment.loginEmail,
      password: environment.loginPass
    };
  }

  private onLoginSubmit() {
    this.invokeAuthenticate(this.loginModel);
  }

  private invokeAuthenticate(requestData) {
    this.loading = true;
    // this.authService.authenticate(requestData).subscribe(
    //   response => {
    //     const token = response.headers.get("Authorization");
    //     this.authService.setAuthorizationToken(token);
    //     this.invokeGetUser(this.loginModel.email);
    //   },
    //   error => (this.loading = false)
    // );
    this.authService.login(requestData);
  }

  // private invokeGetUser(email: string) {
  //   this.userService.getUserByEmail(email).subscribe(
  //     response => {
  //       console.info(response);
  //       this.loading = false;
  //     },
  //     (_error) => (this.loading = false)
  //   );
  // }
}
