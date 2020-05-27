import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarePackagesComponent } from './care-packages.component';

describe('CarePackagesComponent', () => {
  let component: CarePackagesComponent;
  let fixture: ComponentFixture<CarePackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarePackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
