import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()
  selection: string;

  activeDashboard: string;
  activePlacements: string;

  activeProviders: string;
  activeCarePackages: string;

  constructor() { }

  ngOnInit(): void {
    if (this.selection === "dashboard"){
      this.activeDashboard = "active"
      this.activePlacements = ""
      this.activeProviders = ""
      this.activeCarePackages = ""
      
    }else if (this.selection === "placements"){
      this.activeDashboard = ""
      this.activeProviders = ""
      this.activePlacements = "active"
      this.activeCarePackages = ""

    }else if (this.selection === "providers"){
      this.activeDashboard = ""
      this.activeProviders = "active"
      this.activePlacements = ""
      this.activeCarePackages = ""

    }else if (this.selection === "carePackages"){
      this.activeDashboard = ""
      this.activeProviders = ""
      this.activePlacements = ""
      this.activeCarePackages = "active"

    }
  }

}
