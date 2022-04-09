import { Component } from '@angular/core';
import {RealEstateService} from "./service/real-estate.service";
import {realEstate} from "./model/realEstate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'virtualisation-project-front';
  realEstates: realEstate[] | undefined;

  constructor(private realEstateService: RealEstateService) {
  }

  searchRealEstates(){
    this.realEstateService.getRealEstates().subscribe(
      (value) => {
        console.log(value)
        this.realEstates = value;
      }
    )
  }
}
