import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesteEnfantComponent } from './veste-enfant.component';

describe('VesteEnfantComponent', () => {
  let component: VesteEnfantComponent;
  let fixture: ComponentFixture<VesteEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VesteEnfantComponent]
    });
    fixture = TestBed.createComponent(VesteEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
