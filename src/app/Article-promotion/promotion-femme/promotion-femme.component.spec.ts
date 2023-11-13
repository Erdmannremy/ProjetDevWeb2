import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionFemmeComponent } from './promotion-femme.component';

describe('PromotionFemmeComponent', () => {
  let component: PromotionFemmeComponent;
  let fixture: ComponentFixture<PromotionFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionFemmeComponent]
    });
    fixture = TestBed.createComponent(PromotionFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
