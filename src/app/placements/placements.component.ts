import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  chooseAreaAndCarePackage = true
  leadProviderAndTime = false
  rankedProviderAndTime = false
  allAccreditedProviderAndTime = false
  previewAll = false

  ngOnInit(): void {
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
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
