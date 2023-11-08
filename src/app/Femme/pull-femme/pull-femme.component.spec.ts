import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullFemmeComponent } from './pull-femme.component';

describe('PullFemmeComponent', () => {
  let component: PullFemmeComponent;
  let fixture: ComponentFixture<PullFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PullFemmeComponent]
    });
    fixture = TestBed.createComponent(PullFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
