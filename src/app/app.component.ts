import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../toolkit/models/wishItem';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template: `
    <div class="main">
      <header class=" container d-flex flex-flex-end">
        <img src="../assets/logo.jpg" alt="" class="brand-logo img img-fluid" />
      </header>
      <div class="row justify-content-center">
        <div class="col col-md-12 flex-flex-center">
          <router-outlet></router-outlet>
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
