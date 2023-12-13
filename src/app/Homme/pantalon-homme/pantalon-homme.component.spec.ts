import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonHommeComponent } from './pantalon-homme.component';

describe('PantalonHommeComponent', () => {
  let component: PantalonHommeComponent;
  let fixture: ComponentFixture<PantalonHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantalonHommeComponent]
    });
    fixture = TestBed.createComponent(PantalonHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
