import { Component, OnInit } from "@angular/core";
import { LoginModel, UserModel } from "../../models/UsersModels";
import { UserService } from "../../services/users.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  private loginModel: LoginModel;
  private loading: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginModel = { email: "aa@aa.aa", password: "pass" };
  }

  onLoginSubmit() {
    this.invokeAuthenticate(this.loginModel);
  }

  invokeAuthenticate(requestData) {
    this.loading = true;
    this.authService.authenticate(requestData).subscribe(
      response => {
        const token = response.headers.get("Authorization");
        this.authService.setAuthorizationToken(token);
        this.invokeGetUser(this.loginModel.email);
      },
      error => (this.loading = false)
    );
  }

  invokeGetUser(email: string) {
    this.userService.getUserByEmail(email).subscribe(
      response => {
        console.info(response);
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }
}
