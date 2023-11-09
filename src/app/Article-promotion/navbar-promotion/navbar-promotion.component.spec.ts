import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPromotionComponent } from './navbar-promotion.component';

describe('NavbarPromotionComponent', () => {
  let component: NavbarPromotionComponent;
  let fixture: ComponentFixture<NavbarPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPromotionComponent]
    });
    fixture = TestBed.createComponent(NavbarPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
