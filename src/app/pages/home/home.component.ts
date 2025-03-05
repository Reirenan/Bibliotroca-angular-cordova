import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { ProductCarouselComponent } from "../product-carousel/product-carousel.component";
import { ContentHomeComponent } from "../content-home/content-home.component";

@Component({
  selector: 'app-home',
  imports: [SidenavComponent, ProductCarouselComponent, ContentHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {
  co: string = ""
  si(){
    this.co = "renan"
  }
}
