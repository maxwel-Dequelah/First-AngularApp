import { Component, Inject, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <div class="container d-flex ">
      <form class="d-flex search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search-by-city"
          aria-label="Search-by-city"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div class="card-group card-columns">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
