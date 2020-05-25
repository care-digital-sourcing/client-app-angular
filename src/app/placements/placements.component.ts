import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AreaAndCarePackageServiceService, Area, CarePackage } from '../service/area-and-care-package-service.service';


@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  selectedArea: Area
  selectedCarePackage: CarePackage
  areas: Area[]
  carePackages: CarePackage[]

  days: number[] = [0,1,2,3,4,5,6,7,8,9,10]
  hours: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

  selectedLeadProviderResponseDays: number
  selectedLeadProviderResponseHours: number

  selectedRankedProvidersResponseDays: number
  selectedRankedProvidersResponseHours: number

  selectedAllAccreditedProvidersResponseDays: number
  selectedAllAccreditedProvidersResponseHours: number


  chooseAreaAndCarePackage = true
  leadProviderAndTime = false
  rankedProviderAndTime = false
  allAccreditedProviderAndTime = false
  previewAll = false

  ngOnInit(): void {
    this.areas = this.areaAndCarePackageServiceService.getAreas()
    this.carePackages = this.areaAndCarePackageServiceService.getCarePackages()
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    public areaAndCarePackageServiceService: AreaAndCarePackageServiceService ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  startChooseAreaAndCarePackage(content) {
    this.chooseAreaAndCarePackage = true
    this.leadProviderAndTime = false
    this.rankedProviderAndTime = false
    this.allAccreditedProviderAndTime = false
    this.previewAll = false
    this.modalService.open(content);
  }

  showChooseAreaAndCarePackage(content) {
    this.chooseAreaAndCarePackage = true
    this.leadProviderAndTime = false
    this.rankedProviderAndTime = false
    this.allAccreditedProviderAndTime = false
    this.previewAll = false
  }

  showLeadProviderAndTime(content) {
    this.chooseAreaAndCarePackage = false
    this.leadProviderAndTime = true
    this.rankedProviderAndTime = false
    this.allAccreditedProviderAndTime = false
    this.previewAll = false
  }

  showRankedProviderAndTime(content){
    this.chooseAreaAndCarePackage = false
    this.leadProviderAndTime = false
    this.rankedProviderAndTime = true
    this.allAccreditedProviderAndTime = false
    this.previewAll = false
  }

  showAllAccreditedProviderAndTime(content) {
    this.chooseAreaAndCarePackage = false
    this.leadProviderAndTime = false
    this.rankedProviderAndTime = false
    this.allAccreditedProviderAndTime = true
    this.previewAll = false
  }

  showPreviewAll(content){
    this.chooseAreaAndCarePackage = false
    this.leadProviderAndTime = false
    this.rankedProviderAndTime = false
    this.allAccreditedProviderAndTime = false
    this.previewAll = true
  }

  submitPlacement(content){
    this.modalService.dismissAll("finished")
  }
}
