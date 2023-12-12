import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFormRegisterComponent } from './users-form-register.component';

describe('UsersFormRegisterComponent', () => {
  let component: UsersFormRegisterComponent;
  let fixture: ComponentFixture<UsersFormRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersFormRegisterComponent]
    });
    fixture = TestBed.createComponent(UsersFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
