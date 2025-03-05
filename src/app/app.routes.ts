import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyBooksComponent } from './pages/books/my-books/my-books.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'my-books', component: MyBooksComponent}

];
