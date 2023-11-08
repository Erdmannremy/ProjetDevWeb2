import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonFemmeComponent } from './pantalon-femme.component';

describe('PantalonFemmeComponent', () => {
  let component: PantalonFemmeComponent;
  let fixture: ComponentFixture<PantalonFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantalonFemmeComponent]
    });
    fixture = TestBed.createComponent(PantalonFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
