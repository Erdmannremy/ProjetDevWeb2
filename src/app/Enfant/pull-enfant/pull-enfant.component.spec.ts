import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullEnfantComponent } from './pull-enfant.component';

describe('PullEnfantComponent', () => {
  let component: PullEnfantComponent;
  let fixture: ComponentFixture<PullEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PullEnfantComponent]
    });
    fixture = TestBed.createComponent(PullEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
