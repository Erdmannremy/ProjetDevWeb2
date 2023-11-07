import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesteHommeComponent } from './veste-homme.component';

describe('VesteHommeComponent', () => {
  let component: VesteHommeComponent;
  let fixture: ComponentFixture<VesteHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VesteHommeComponent]
    });
    fixture = TestBed.createComponent(VesteHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
