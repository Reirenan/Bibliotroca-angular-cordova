import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { UploadImagesComponent } from "../../upload-images/upload-images.component";

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css'],
  imports: [SidenavComponent, UploadImagesComponent], // Corrigido 'styleUrls'
})
export class AddBooksComponent {

}
