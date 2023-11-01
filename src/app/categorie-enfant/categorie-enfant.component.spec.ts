import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieEnfantComponent } from './categorie-enfant.component';

describe('CategorieEnfantComponent', () => {
  let component: CategorieEnfantComponent;
  let fixture: ComponentFixture<CategorieEnfantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieEnfantComponent]
    });
    fixture = TestBed.createComponent(CategorieEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
