import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemiseEnfantComponent } from './chemise-enfant.component';

describe('ChemiseEnfantComponent', () => {
  let component: ChemiseEnfantComponent;
  let fixture: ComponentFixture<ChemiseEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemiseEnfantComponent]
    });
    fixture = TestBed.createComponent(ChemiseEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
