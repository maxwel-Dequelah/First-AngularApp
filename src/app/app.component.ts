import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../toolkit/models/wishItem';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <div class="main">
      <header class=" container d-flex flex-flex-end">
        <img src="../assets/logo.jpg" alt="" class="brand-logo img img-fluid" />
      </header>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <app-home></app-home>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My wishlist';
  wishListItems = [
    new WishItem('To Learn Angular'),
    new WishItem('Be a fullstack Developer'),
  ];
}
