import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AreaAndCarePackageServiceService {

  constructor() { }

  getAreas(){
    return ["Essex North", "Essex South", "Essex West", "Essex East", "Essex Central"]
  }

  getCarePackages(){
    return ["Shopping and Personal Care",  "Personal Care Only", "Shopping Only"];
  }

}
