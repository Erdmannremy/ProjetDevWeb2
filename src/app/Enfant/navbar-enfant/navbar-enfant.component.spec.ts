import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEnfantComponent } from './navbar-enfant.component';

describe('NavbarEnfantComponent', () => {
  let component: NavbarEnfantComponent;
  let fixture: ComponentFixture<NavbarEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarEnfantComponent]
    });
    fixture = TestBed.createComponent(NavbarEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
