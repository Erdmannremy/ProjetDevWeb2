import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFemmeComponent } from './categorie-femme.component';

describe('CategorieFemmeComponent', () => {
  let component: CategorieFemmeComponent;
  let fixture: ComponentFixture<CategorieFemmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieFemmeComponent]
    });
    fixture = TestBed.createComponent(CategorieFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
