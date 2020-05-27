import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AreaAndCarePackageServiceService } from '../service/area-and-care-package-service.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  areas: string[] //= ["Essex North", "Essex South", "Essex West", "Essex East"]
  carePackages: string[] //= ["Shopping and Personal Care",  "Personal Care Only"]

  hours: string[] = [
    "0:00", "0:15", "0:30", "0:45",
    "01:00", "01:15", "01:30", "01:45",
    "02:00", "02:15", "02:30", "02:45",
    "03:00", "03:15", "03:30", "03:45",
    "04:00", "04:15", "04:30", "04:45",
    "05:00", "05:15", "05:30", "05:45",
    "06:00", "06:15", "06:30", "06:45",
    "07:00", "07:15", "07:30", "07:45",
    "08:00", "08:15", "08:30", "08:45",
    "09:00", "09:15", "09:30", "09:45",
    "10:00", "10:15", "10:30", "10:45",
    "11:00", "11:15", "11:30", "11:45",
    "12:00", "12:15", "12:30", "12:45",
    "13:00", "13:15", "13:30", "13:45",
    "14:00", "14:15", "14:30", "14:45",
    "15:00", "15:15", "15:30", "15:45",
    "16:00", "16:15", "16:30", "16:45",
    "17:00", "17:15", "17:30", "17:45",
    "18:00", "18:15", "18:30", "18:45",
    "19:00", "19:15", "19:30", "19:45",
    "20:00", "20:15", "20:30", "20:45",
    "21:00", "21:15", "21:30", "21:45",
    "22:00", "22:15", "22:30", "22:45",
    "23:00", "23:15", "23:30", "23:45",
  ]


  selectedArea: string
  selectedCarePackage: string
  errorMessageSelectedAreaAndCarePackage: boolean

  selectedLeadProviderResponseDay: NgbDateStruct
  selectedLeadProviderResponseHours: string
  errorMessageSelectedLeadProvider: boolean

  selectedRankedProvidersResponseDay: NgbDateStruct
  selectedRankedProvidersResponseHours: string
  errorMessageSelectedRankedProvider: boolean

  selectedAllAccreditedProvidersResponseDay: NgbDateStruct
  selectedAllAccreditedProvidersResponseHours: string
  errorMessageSelectedAllAccreditedProvider: boolean


  chooseAreaAndCarePackage = true
  leadProviderAndTime = false
  rankedProviderAndTime = false
  allAccreditedProviderAndTime = false
  previewAll = false

  errorMessage: string

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
    if (this.selectedArea
      && this.selectedCarePackage ){
        this.errorMessageSelectedAreaAndCarePackage = false
        this.chooseAreaAndCarePackage = false
        this.leadProviderAndTime = true
        this.rankedProviderAndTime = false
        this.allAccreditedProviderAndTime = false
        this.previewAll = false

    }else{
      this.errorMessageSelectedAreaAndCarePackage = true
      this.errorMessage = "Please select an area and care package"
    }
  }

  showRankedProviderAndTime(content){
    if (this.selectedLeadProviderResponseDay
      && this.selectedLeadProviderResponseHours ){
        this.errorMessageSelectedRankedProvider = false
        this.chooseAreaAndCarePackage = false
        this.leadProviderAndTime = false
        this.rankedProviderAndTime = true
        this.allAccreditedProviderAndTime = false
        this.previewAll = false

    }else{
      this.errorMessageSelectedRankedProvider = true
      this.errorMessage = "Please provide the maximum response date and time for a ranked provider to respond"
    }
  }

  showAllAccreditedProviderAndTime(content) {
    if (this.selectedRankedProvidersResponseDay 
      && this.selectedRankedProvidersResponseHours){
      this.errorMessageSelectedAllAccreditedProvider = false
      this.chooseAreaAndCarePackage = false
      this.leadProviderAndTime = false
      this.rankedProviderAndTime = false
      this.allAccreditedProviderAndTime = true
      this.previewAll = false

    }else{
      this.errorMessageSelectedAllAccreditedProvider = true
      this.errorMessage = "Please provide the maximum response date and time for an accredited provider to respond"
    }
  }

  showPreviewAll(content){
    if (this.selectedAllAccreditedProvidersResponseDay 
      && this.selectedAllAccreditedProvidersResponseHours){
      this.chooseAreaAndCarePackage = false
      this.leadProviderAndTime = false
      this.rankedProviderAndTime = false
      this.allAccreditedProviderAndTime = false
      this.previewAll = true

    }else{
      this.errorMessageSelectedAllAccreditedProvider = true
      this.errorMessage = "Please provide the maximum response date and time for an accredited provider to respond"
    }
  }

  submitPlacement(content){
    this.modalService.dismissAll("finished")
  }
}
