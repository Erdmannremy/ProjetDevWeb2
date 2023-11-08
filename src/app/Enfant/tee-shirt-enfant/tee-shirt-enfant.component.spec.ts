import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeShirtEnfantComponent } from './tee-shirt-enfant.component';

describe('TeeShirtEnfantComponent', () => {
  let component: TeeShirtEnfantComponent;
  let fixture: ComponentFixture<TeeShirtEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeeShirtEnfantComponent]
    });
    fixture = TestBed.createComponent(TeeShirtEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
