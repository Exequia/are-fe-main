import { Component, OnInit } from "@angular/core";
import { User } from "../models/Users";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((user: User) => {
      this.user = user;
      this.router.navigate(["/"]);
    });
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(["/users/login"]);
  }
}
