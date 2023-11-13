import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionEnfantComponent } from './promotion-enfant.component';

describe('PromotionEnfantComponent', () => {
  let component: PromotionEnfantComponent;
  let fixture: ComponentFixture<PromotionEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionEnfantComponent]
    });
    fixture = TestBed.createComponent(PromotionEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
