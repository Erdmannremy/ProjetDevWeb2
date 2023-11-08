import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesteFemmeComponent } from './veste-femme.component';

describe('VesteFemmeComponent', () => {
  let component: VesteFemmeComponent;
  let fixture: ComponentFixture<VesteFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VesteFemmeComponent]
    });
    fixture = TestBed.createComponent(VesteFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
