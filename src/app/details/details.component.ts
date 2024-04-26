import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: ` <p>details {{ housingLocationDetails?.id }} works!</p> `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  housingLocationDetails: Housinglocation | undefined;
  housingService = inject(HousingService);
  constructor() {
    const housingLocationID = Number(this.route.snapshot.params['id']);

    this.housingLocationDetails =
      this.housingService.getHousingLocationByID(housingLocationID);
    console.log(this.housingLocationDetails);
  }
}
