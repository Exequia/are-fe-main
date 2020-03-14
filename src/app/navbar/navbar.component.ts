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
  menus = [];

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
    this.menus = this.getMenus();
  }

  ngOnInit() {}

  private logout() {
    this.authService.logout();
    this.router.navigate(["/users/login"]);
  }

  private getMenus() {
    const bets = {
      authorized: ["admin", "bets"],
      key: "bets",
      link: "bets",
      icon: "fa-dice",
      items: [{ key: "summary", icon: "fa-tachometer-alt", link: "summary" }]
    };

    return [bets];
  }

  private checkCredentials(): boolean {
    let renderItem = true;
    if (!this.user) {
      renderItem = false;
    }
    return renderItem;
  }
}
