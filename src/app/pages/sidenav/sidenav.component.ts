import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    this.imageClick();
  }

  ngAfterViewInit(): void {
  }

  imageClick() {
    this.sleep(2000);
  }

  async sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  openNavbar() {
    const navbar = document.getElementById('bdNavbar');
    if (navbar) {
      navbar.classList.add('show');
    }
  }

  closeNavbar() {
    console.log('closeNavbar');
    const navbar = document.getElementById('bdNavbar');
    if (navbar) {
      navbar.classList.remove('show');
    }
  }
}
