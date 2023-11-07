import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHommeComponent } from './navbar-homme.component';

describe('NavbarHommeComponent', () => {
  let component: NavbarHommeComponent;
  let fixture: ComponentFixture<NavbarHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarHommeComponent]
    });
    fixture = TestBed.createComponent(NavbarHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
