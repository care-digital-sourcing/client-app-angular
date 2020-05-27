import { Injectable } from '@angular/core';


export class Provider{
  name: string
  address: string
  postcode: string
  currentRate: number
  longitude:number
  latitude: number
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  getProviders(): Provider[]{
    return [
      {name: "Absolute Care Ltd", address: "my address", 
      postcode: "SS2 1DF", 
      currentRate: 2, 
      longitude:51.588718, latitude:0.596750}, 
      {name: "Papa Care Services Ltd", address: "Papa address", 
      postcode: "SS2 1DF", 
      currentRate: 4, 
      longitude:51.588718, latitude:0.596750},
      {name: "Mama Care Ltd", address: "Mama address", 
      postcode: "IG 1SD", 
      currentRate: 4, 
      longitude:51.588718, latitude:0.596750},
      {name: "Your Care", address: "Your address", 
      postcode: "IG 1SD", 
      currentRate: 6, 
      longitude:51.588718, latitude:0.596750},
      {name: "Declan Care Ltd", address: "my address", 
      postcode: "SS2 1DF", 
      currentRate: 6, 
      longitude:51.588718, latitude:0.596750},
      {name: "Zaza Care Services Ltd", address: "Papa address", 
      postcode: "SS2 1DF", 
      currentRate: 6, 
      longitude:51.588718, latitude:0.596750},
      {name: "Basildon Care Ltd", address: "Mama address", 
      postcode: "IG 1SD", 
      currentRate: 4, 
      longitude:51.588718, latitude:0.596750},
      {name: "Rayleigh Care", address: "Your address", 
      postcode: "IG 1SD", 
      currentRate: 8, 
      longitude:51.588718, latitude:0.596750}
    ]
  }
}
