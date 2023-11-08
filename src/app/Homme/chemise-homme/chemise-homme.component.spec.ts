import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemiseHommeComponent } from './chemise-homme.component';

describe('ChemiseHommeComponent', () => {
  let component: ChemiseHommeComponent;
  let fixture: ComponentFixture<ChemiseHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChemiseHommeComponent]
    });
    fixture = TestBed.createComponent(ChemiseHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
