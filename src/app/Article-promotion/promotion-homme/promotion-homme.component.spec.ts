import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionHommeComponent } from './promotion-homme.component';

describe('PromotionHommeComponent', () => {
  let component: PromotionHommeComponent;
  let fixture: ComponentFixture<PromotionHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionHommeComponent]
    });
    fixture = TestBed.createComponent(PromotionHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
