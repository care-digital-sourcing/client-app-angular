import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ProviderService, Provider } from '../service/provider.service';
import {Location} from '../model/location-model'
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers: Provider[] = this.providerService.getProviders()

  currentLatitude: number = this.providers[0].latitude;
  currentLongitude: number= this.providers[0].longitude;
  address = 'dortmund';
  location: Location;
  loading: boolean;
  
  @ViewChild(AgmMap) map: AgmMap;
  
  constructor(public mapsApiLoader: MapsAPILoader, public providerService : ProviderService, private ref: ChangeDetectorRef ) { }


  ngOnInit(): void {
    this.mapsApiLoader.load().then(()=>{

     
    })
    //this.providers = this.providerService.getProviders()
    //this.currentLatitude = this.providers[0].latitude
    //this.currentLatitude = this.providers[0].longitude

    //this.showLocation();
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('Resizing');
      this.map.triggerResize();
    }, 100);
  }

  showInMap(name){
    console.log(this.providers.length)
    for (let p of this.providers){
      if (p.name === name){

        this.currentLatitude = p.latitude
        this.currentLongitude = p.longitude
        break;
      }
    }
    this.ref.detectChanges
  }

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.loading = true;
    this.providerService.geocodeAddress(this.address)
    .subscribe((location: Location) => {
        this.currentLatitude = location.lat
        this.currentLongitude = location.lng
        this.loading = false;
        this.ref.detectChanges();  
      }      
    );     
  }

}
