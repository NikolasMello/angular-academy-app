import { Component, OnInit } from '@angular/core';
import { NavigationItem, NavigationItems } from './navigation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  navigations: NavigationItem[] =  NavigationItems;
  userMenu: boolean = false;

  constructor(
    private router: Router
  ){

  }

  ngOnInit(): void {
      
  }

  openUserMenu(){
    this.userMenu = true;
  }

  closeUserMenu(){
    this.userMenu = false;
  }

  activeRoute(route: string | undefined): string{
    console.log('minha route', route)
    if(route === this.router.url){
      return 'active';
    } else {
      return '';
    }
  }


}
