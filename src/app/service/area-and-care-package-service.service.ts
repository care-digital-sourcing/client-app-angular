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
      {id: 1, name:'Essex North'}, 
      {id: 2, name: 'Essex South'}
    ];
  }

  getCarePackages(): CarePackage[]{
    return [
      {id: 1, name:'Shopping and Personal Care'}, 
      {id: 2, name: 'Personal Care Only'}
    ];
  }

}
