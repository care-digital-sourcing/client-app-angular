import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { filter, catchError, tap, map, switchMap } from 'rxjs/operators';
import { from as fromPromise, Observable} from 'rxjs';
import { of } from 'rxjs';
import {Location} from '../model/location-model';



export class Provider{
  name: string
  address: string
  postcode: string
  currentRate: number
  longitude:number
  latitude: number
  iconUrl: string
  website: string
}

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  private initGeocoder() {
    console.log('Init geocoder!');
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if(!this.geocoder) {
      return fromPromise(this.mapLoader.load())
      .pipe(
        tap(() => this.initGeocoder()),
        map(() => true)
      );
    }
    return of(true);
  }
  
  geocodeAddress(location: string): Observable<{}> {
    console.log('Start geocoding!');
    return this.waitForMapsToLoad().pipe(
      // filter(loaded => loaded),
      switchMap(() => {
        return new Observable(observer => {
          this.geocoder.geocode({'address': location}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              console.log('Geocoding complete!');
              observer.next({
                lat: results[0].geometry.location.lat(), 
                lng: results[0].geometry.location.lng()
              });
            } else {
                console.log('Error - ', results, ' & Status - ', status);
                observer.next({ lat: 0, lng: 0 });
            }
            observer.complete();
          });
        })        
      })
    )
  }

  getProviders(): Provider[]{
    return [
      {name: "Absolute Care Ltd", address: "my address", 
      postcode: "SS2 1DF", 
      currentRate: 2, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.677912, latitude:0.126091}, // longitude:51.677912, latitude:0.126091

      {name: "Papa Care Services Ltd", address: "Papa address", 
      postcode: "SS2 1DF", 
      currentRate: 4, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.610676, latitude:0.258065},// longitude:51.610676, latitude:0.258065

      {name: "Mama Care Ltd", address: "Mama address", 
      postcode: "IG 1SD", 
      currentRate: 4, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.570807, latitude:0.169712},// longitude:51.570807, latitude:0.169712

      {name: "Your Care", address: "Your address", 
      postcode: "IG 1SD", 
      currentRate: 6, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.570807, latitude:0.169712},// longitude:51.570807, latitude:0.169712

      {name: "Declan Care Ltd", address: "my address", 
      postcode: "SS2 1DF", 
      currentRate: 6, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.481966, latitude:0.347100},// longitude:51.481966, latitude:0.347100

      {name: "Zaza Care Services Ltd", address: "Papa address", 
      postcode: "SS2 1DF", 
      currentRate: 6, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.765371, latitude:0.112320},// longitude:51.765371, latitude:0.112320

      {name: "Basildon Care Ltd", address: "Mama address", 
      postcode: "IG 1SD", 
      currentRate: 4, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.793602, latitude:0.484079},// longitude:51.793602, latitude:0.484079

      {name: "Rayleigh Care", address: "Your address", 
      postcode: "IG 1SD", 
      currentRate: 8, 
      iconUrl: "https://img.icons8.com/android/24/000000/home.png", website: "http://website.co.uk",
      longitude:51.689063,latitude:0.404773}// longitude:51.689063,latitude:0.404773
    ]
  }
}
