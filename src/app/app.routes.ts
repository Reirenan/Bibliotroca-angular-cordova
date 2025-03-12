import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyBooksComponent } from './pages/books/my-books/my-books.component';
import { AddBooksComponent } from './pages/books/add-books/add-books.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'my-books', component: MyBooksComponent},
  {path: 'add-books', component: AddBooksComponent},
];
