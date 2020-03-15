import { Component, OnInit } from "@angular/core";
import { User } from "../../../models/Users";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import {
  NabvarMenu,
  NabvarMenuItem,
  NabvarCredentials
} from "../../../models/NabvarMenu";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private user: User;
  private menus: NabvarMenu[] = [];

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
    this.menus = this.getMenus();
  }

  ngOnInit() {}

  private logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  private getMenus() {
    const pro: NabvarMenu = this.getProMenu();
    const bets: NabvarMenu = this.getBetsMenu();
    return [pro, bets];
  }

  /** Return array for nabvar menú with profesional info */
  private getProMenu(): NabvarMenu {
    const proItems: NabvarMenuItem[] = this.getProMenuItems();
    const pro: NabvarMenu = {
      authorized: [NabvarCredentials.All],
      key: "pro",
      link: "pro",
      icon: "fa-user-tie",
      items: proItems
    };
    return pro;
  }

  /**Return Profesional items of the navbar menú */
  private getProMenuItems(): NabvarMenuItem[] {
    const proArchitectureItem: NabvarMenuItem = {
      key: "architecture",
      icon: "fa-object-group",
      link: "home"
    };
    return [proArchitectureItem];
  }

  /** Return array for nabvar menú with bets info */
  private getBetsMenu(): NabvarMenu {
    const betsItems: NabvarMenuItem[] = this.getBetsMenuItems();
    const bets: NabvarMenu = {
      authorized: [NabvarCredentials.Admin, NabvarCredentials.Bets],
      key: "bets",
      link: "bets",
      icon: "fa-dice",
      items: betsItems
    };
    return bets;
  }

  /**Return Bets items of the navbar menú */
  private getBetsMenuItems(): NabvarMenuItem[] {
    const betSummaryItem: NabvarMenuItem = {
      key: "summary",
      icon: "fa-tachometer-alt",
      link: "summary"
    };
    return [betSummaryItem];
  }

  private checkCredentials(menu: NabvarMenu): boolean {
    let renderItem = true;
    if (menu.authorized.indexOf(NabvarCredentials.All) < 0) {
      if (!this.user) {
        renderItem = false;
      }
    }
    return renderItem;
  }
}
