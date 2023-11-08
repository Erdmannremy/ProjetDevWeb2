import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonEnfantComponent } from './pantalon-enfant.component';

describe('PantalonEnfantComponent', () => {
  let component: PantalonEnfantComponent;
  let fixture: ComponentFixture<PantalonEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantalonEnfantComponent]
    });
    fixture = TestBed.createComponent(PantalonEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
