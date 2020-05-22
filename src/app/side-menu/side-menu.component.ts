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

  constructor() { }

  ngOnInit(): void {
    if (this.selection === "dashboard"){
      this.activeDashboard = "active"
      this.activePlacements = ""
      
    }else if (this.selection === "placements"){
      this.activeDashboard = ""
      this.activePlacements = "active"

    }
  }

}
