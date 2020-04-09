import { Component, OnInit } from "@angular/core";
// import { User } from "../../../models/Users";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import {
  NabvarMenu,
  NabvarMenuItem,
  NabvarCredentials,
} from "../../../models/NabvarMenu";
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

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public user: User;
  public menus: NabvarMenu[] = [];

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
    this.menus = this.getMenus();
  }

  ngOnInit() {}

  public logout() {
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
      items: proItems,
    };
    return pro;
  }

  /**Return Profesional items of the navbar menú */
  private getProMenuItems(): NabvarMenuItem[] {
    const proArchitectureItem: NabvarMenuItem = {
      key: "architecture",
      icon: "fa-object-group",
      link: "home",
    };
    const proWorksItem: NabvarMenuItem = {
      key: "works",
      icon: "fa-laptop-code",
      link: "works",
    };
    const proStudiesItem: NabvarMenuItem = {
      key: "studies",
      icon: "fa-user-graduate",
      link: "studies",
    };
    return [proArchitectureItem, proWorksItem, proStudiesItem];
  }

  /** Return array for nabvar menú with bets info */
  private getBetsMenu(): NabvarMenu {
    const betsItems: NabvarMenuItem[] = this.getBetsMenuItems();
    const bets: NabvarMenu = {
      authorized: [NabvarCredentials.Admin, NabvarCredentials.Bets],
      key: "bets",
      link: "bets",
      icon: "fa-dice",
      items: betsItems,
    };
    return bets;
  }

  /**Return Bets items of the navbar menú */
  private getBetsMenuItems(): NabvarMenuItem[] {
    const betSummaryItem: NabvarMenuItem = {
      key: "summary",
      icon: "fa-tachometer-alt",
      link: "summary",
    };
    return [betSummaryItem];
  }

  public checkCredentials(menu: NabvarMenu): boolean {
    let renderItem = true;
    if (menu.authorized.indexOf(NabvarCredentials.All) < 0) {
      if (!this.user) {
        renderItem = false;
      }
    }
    return renderItem;
  }
}
