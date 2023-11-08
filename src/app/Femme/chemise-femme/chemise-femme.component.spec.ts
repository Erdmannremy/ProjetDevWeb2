import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemiseFemmeComponent } from './chemise-femme.component';

describe('ChemiseFemmeComponent', () => {
  let component: ChemiseFemmeComponent;
  let fixture: ComponentFixture<ChemiseFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemiseFemmeComponent]
    });
    fixture = TestBed.createComponent(ChemiseFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
