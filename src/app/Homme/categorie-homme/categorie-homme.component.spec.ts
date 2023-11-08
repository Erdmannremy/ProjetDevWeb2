import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieHommeComponent } from './categorie-homme.component';

describe('CategorieHommeComponent', () => {
  let component: CategorieHommeComponent;
  let fixture: ComponentFixture<CategorieHommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieHommeComponent]
    });
    fixture = TestBed.createComponent(CategorieHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
