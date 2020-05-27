import { Component, OnInit } from '@angular/core';
import { ProviderService, Provider } from '../service/provider.service';
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers: Provider[]

  currentLatitude: number
  currentLongitude: number

  constructor(public providerService : ProviderService ) { }

  ngOnInit(): void {
    this.providers = this.providerService.getProviders()
    this.currentLatitude = this.providers[0].latitude
    this.currentLatitude = this.providers[0].longitude
  }

}
