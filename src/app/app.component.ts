import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './pages/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ufma';
}
