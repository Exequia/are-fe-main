import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NavbarMenu, NavbarCredentials, User } from '../../../models/';
import { FilesService } from 'src/app/services/files/files.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user: User;
  public menus: NavbarMenu[] = [];
  public loadingMenu = false;

  constructor(private router: Router, private authService: AuthService, private filesService: FilesService) {
    this.authService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
    this.invokeGetMenus();
  }

  ngOnInit() {}

  public logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  private invokeGetMenus() {
    this.loadingMenu = true;
    this.filesService.getLocalFile('assets/files/navbar.json').subscribe(
      (menuResponse: NavbarMenu[]) => {
        this.loadingMenu = false;
        this.menus = menuResponse;
      },
      (error) => {
        this.loadingMenu = false;
        console.error('invokeGetMenus', error);
      }
    );
  }

  public checkCredentials(menu: NavbarMenu): boolean {
    let renderItem = true;
    if (menu.authorized.indexOf(NavbarCredentials.All) < 0) {
      if (!this.user) {
        renderItem = false;
      }
    }
    return renderItem;
  }

  /**
   * Close the navbar menú
   * @param event optional
   */
  public closeNavBarMenu(event?: any) {
    const element = document.getElementById('navBarMenu');
    if (element) {
      element.classList.remove('show');
    }
  }
}
