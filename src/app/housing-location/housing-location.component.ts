import { RouterLink, RouterOutlet } from '@angular/router';
import { HousingLocation } from './../housinglocation';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['details/', housingLocation.id]">Learn more.</a>
  </section>
  `,
  styleUrl: './housing-location.component.scss'
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
