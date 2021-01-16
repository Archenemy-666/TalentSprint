import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateHomeComponent } from './corporate-home.component';

describe('CorporateHomeComponent', () => {
  let component: CorporateHomeComponent;
  let fixture: ComponentFixture<CorporateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
