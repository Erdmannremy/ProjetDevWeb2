import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-promotion',
  templateUrl: './navbar-promotion.component.html',
  styleUrls: ['./navbar-promotion.component.css']
})
export class NavbarPromotionComponent {
   
    isNavOpen = false;
    isDropdownOpen = false;
  
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }


