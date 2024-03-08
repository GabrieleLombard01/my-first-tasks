import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class HeaderComponent implements OnInit {

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
