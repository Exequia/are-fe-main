import { Component, OnInit } from "@angular/core";
// import { Login } from "../../models/Users";
import { AuthService } from "src/app/services/auth.service";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";

interface Login {
  email: string;
  password: string;
}

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  public loginModel: Login;
  public loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginModel = {
      email: environment.loginEmail,
      password: environment.loginPass
    };
  }

  public onLoginSubmit() {
    this.invokeAuthenticate(this.loginModel);
  }

  private invokeAuthenticate(requestData) {
    this.loading = true;
    this.authService.login(requestData).then(() => {
      this.loading = false;
      this.router.navigate(["/"]);
    });
  }
}
