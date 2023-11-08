import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFemmeComponent } from './navbar-femme.component';

describe('NavbarFemmeComponent', () => {
  let component: NavbarFemmeComponent;
  let fixture: ComponentFixture<NavbarFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarFemmeComponent]
    });
    fixture = TestBed.createComponent(NavbarFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
