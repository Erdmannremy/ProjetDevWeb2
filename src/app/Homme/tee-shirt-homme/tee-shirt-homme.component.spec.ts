import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeShirtHommeComponent } from './tee-shirt-homme.component';

describe('TeeShirtHommeComponent', () => {
  let component: TeeShirtHommeComponent;
  let fixture: ComponentFixture<TeeShirtHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeeShirtHommeComponent]
    });
    fixture = TestBed.createComponent(TeeShirtHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
