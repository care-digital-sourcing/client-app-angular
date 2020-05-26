import { Injectable } from '@angular/core';


export class Area {
  id: number;
  name: string;
}

export class CarePackage {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class AreaAndCarePackageServiceService {

  constructor() { }

  getAreas(): Area[]{
    return [
      {id: 1, name: 'Essex North'}, 
      {id: 2, name: 'Essex South'}, 
      {id: 3, name: 'Essex West'}, 
      {id: 4, name: 'Essex East'}
    ];
  }

  getCarePackages(): CarePackage[]{
    return [
      {id: 1, name:'Shopping and Personal Care'}, 
      {id: 2, name: 'Personal Care Only'}
    ];
  }

}
