import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeShirtFemmeComponent } from './tee-shirt-femme.component';

describe('TeeShirtFemmeComponent', () => {
  let component: TeeShirtFemmeComponent;
  let fixture: ComponentFixture<TeeShirtFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeeShirtFemmeComponent]
    });
    fixture = TestBed.createComponent(TeeShirtFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
