import { Component, OnInit } from '@angular/core';
import {CotationService} from "../service/cotation.service";
import {NgForm} from "@angular/forms";
import {CotationParams} from "../model/cotationParams";

@Component({
  selector: 'app-simulation-cotation',
  templateUrl: './simulation-cotation.component.html',
  styleUrls: ['./simulation-cotation.component.css']
})
export class SimulationCotationComponent implements OnInit {

  constructor(private cotationService : CotationService) { }

  estimation: any = null;

  ngOnInit(): void {
  }

  cotation(f: NgForm) {
    const nbRooms = f.value.nbRooms;
    const location = f.value.location;
    const params = new CotationParams(nbRooms, location);
    this.cotationService.simulerCotation(params).subscribe(
      (value) => {
        console.log(value)
        this.estimation = value;
      }
    )
  }
}
